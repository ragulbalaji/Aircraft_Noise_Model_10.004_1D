/*	RAGUL BALAJI 2019 (C) AIRCRAFT NOISE MATH MODEL
 *	ALL RIGHT RESERVED. ASK AUTHOR BEFORE USE.
 */

let SingaporeOutline = new Image()
SingaporeOutline.src = "Wikipedia_Singapore_Outline.svg.png"

let canvas = document.getElementById('mappy')
let ctx = canvas.getContext('2d')

_W = 800 * 2
_H = 500 * 2
_GOriLat = 1.177
_GOriLong = 103.600
_GscaleLat = 3250
_GscaleLong = 3250

function tlong(long) {
	return (long - _GOriLong) * _GscaleLong
}

function tlat(lat) {
	return _H - (lat - _GOriLat) * _GscaleLat
}

function GPSPoint(lat, long, sz) {
	if (typeof sz === "undefined") sz = 5

	ctx.beginPath()
	ctx.arc(tlong(long), tlat(lat), sz, 0, Math.PI * 2)
	ctx.closePath()
	ctx.fill()
}

function GPSLine(lat1, long1, lat2, long2) {
	ctx.beginPath()
	ctx.moveTo(tlong(long1), tlat(lat1))
	ctx.lineTo(tlong(long2), tlat(lat2))
	ctx.closePath()
	ctx.stroke()
}

function GPSText(text, lat, long) {
	ctx.fillText(text, tlong(long), tlat(lat));
}

function start() {
	canvas.width = _W
	canvas.height = _H
	ctx.drawImage(SingaporeOutline, 0, 0, _W, _H)

	ctx.strokeStyle = 'black'
	ctx.lineWidth = 10
	ctx.font = "30px Arial"
	ctx.textAlign = "center"
	for (r1 of runways) {
		GPSLine(r1.startlatitude, r1.startlongitude, r1.stoplatitude, r1.stoplongitude)
		GPSText(r1.IATA, (r1.startlatitude + r1.stoplatitude) / 2 - 0.02, (r1.startlongitude + r1.stoplongitude) / 2)
	}

	ctx.strokeStyle = 'grey'
	ctx.lineWidth = 0.3
	for (r1 of runways) {
		for (r2 of r1.flightpaths) {
			let plane1 = new Plane(gimmeID(), r2, 0)
			gameobjects[plane1.id] = plane1
			for (let ip = 0; ip < r2.length - 1; ip++) {
				GPSLine(r2[ip][0], r2[ip][1], r2[ip + 1][0], r2[ip + 1][1])
			}
		}
	}

	ctx.fillStyle = 'green'
	for (r1 of regions) {
		r1.maxnoise = 0
		GPSPoint(r1.latitude, r1.longitude, 2)
		//GPSText(r1.name, r1.latitude, r1.longitude)
	}

	/*for (r1 of regions) {
		GPSPoint(r1.latitude, r1.longitude)
		for (r2 of regions) {
			//GPSText(GPSDistance(r1.latitude, r1.longitude, r2.latitude, r2.longitude), r2.latitude, r2.longitude)
			console.log(r1.name + '-' + r2.name, GPSDistance(r1.latitude, r1.longitude, r2.latitude, r2.longitude))
		}
		break
	}*/

	requestAnimationFrame(tick)
}

let gameobjects = []

function tick() {
	for (obj of gameobjects) {
		obj.update()
		obj.render(ctx)
	}
	requestAnimationFrame(tick)
}

class Plane {
	constructor(id, path, pathidx) {
		this.id = id
		this.path = path
		this.pidx = pathidx
		this.lat = this.path[this.pidx][0]
		this.long = this.path[this.pidx][1]
		this.alt = 0 //TODO
		this.pidx++
		this.step = 0.5
		this.stepsz = this.calcstepsz()
		this.stepdist = 0
		this.totaldist = 0
		this.climbratio = Math.tan(deg2rad(15)) // 15 degree climb angle, see boeing reference
		this.crusingalt = 10 // 10km aka 30000ft
		this.hexcolor = 'red' //randHexColor()
		this.dead = 0
	}

	update() {
		if (this.dead) return;
		if (this.step >= 1) {
			this.totaldist += GPSDistance(this.path[this.pidx][0], this.path[this.pidx][1], this.path[this.pidx - 1][0], this.path[this.pidx - 1][1])
			this.pidx++
			if (this.pidx >= this.path.length) {
				this.dead = 1
				return;
			}
			this.step = 0
			this.stepsz = this.calcstepsz()
		}

		this.step += this.stepsz
		this.alt = Math.min((this.totaldist + (this.stepdist * this.step)) * this.climbratio, this.crusingalt)
		this.lat = (this.path[this.pidx][0] * this.step) + (this.path[this.pidx - 1][0] * (1 - this.step))
		this.long = (this.path[this.pidx][1] * this.step) + (this.path[this.pidx - 1][1] * (1 - this.step))
		//console.log(this.lat, this.long, this.pidx, this.stepsz)
	}

	render(g) {
		if (this.dead) return;

		g.fillStyle = 'green'
		for (r1 of regions) {
			// Jet Engine 150dB at 1m distance
			let noiseAtR1 = DBatDistance(150, 1, 1000 * Math.sqrt(Math.pow(GPSDistance(r1.latitude, r1.longitude, this.lat, this.long),2) + Math.pow(this.alt,2))) // Pythagoras Thm + Power Law
			if (noiseAtR1 > r1.maxnoise) {
				r1.maxnoise = noiseAtR1
				g.fillStyle = 'hsl('+(r1.maxnoise*1.5)+',100%,40%)'
				GPSPoint(r1.latitude, r1.longitude, Math.min(20, (r1.maxnoise-40)/5.0))
			}
		}

		g.fillStyle = this.hexcolor
		GPSPoint(this.lat, this.long, Math.max(1.5, this.alt/1.5))
	}

	calcstepsz() {
		this.stepdist = GPSDistance(this.path[this.pidx][0], this.path[this.pidx][1], this.path[this.pidx - 1][0], this.path[this.pidx - 1][1])
		return 0.1 / this.stepdist
	}
}

function GPSDistance(lat1, lon1, lat2, lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2 - lat1); // deg2rad below
	var dLon = deg2rad(lon2 - lon1);
	var a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
		Math.sin(dLon / 2) * Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c; // Distance in km
	return d;
}

function DBatDistance(srcDB, srcR, destR){ // http://linuxfocus.org/~guido/javascript/decibel-calculator.html
	return srcDB + 10 * Math.log10(Math.pow(srcR/destR, 2))
}

function deg2rad(deg) {
	return deg * (Math.PI / 180)
}

IDgen = 0

function gimmeID() {
	return IDgen++
}

function randHexColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function randInt(min, max) { // min+max inclusive
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

setTimeout(start, 500)