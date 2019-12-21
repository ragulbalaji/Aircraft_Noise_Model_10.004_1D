let regions = [{"name": "Ang Mo Kio", "population": 174770, "latitude": 1.369842, "longitude": 103.8466086}, {"name": "Ang Mo Kio Town Centre", "population": 5020, "latitude": 1.369842, "longitude": 103.8466086}, {"name": "Cheng San", "population": 29770, "latitude": 1.340863, "longitude": 103.830391822121}, {"name": "Chong Boon", "population": 27900, "latitude": 1.36820695, "longitude": 103.856360356937}, {"name": "Sembawang Hills", "population": 6890, "latitude": 1.3723986, "longitude": 103.8290294792}, {"name": "Shangri-La", "population": 18510, "latitude": 1.311352, "longitude": 103.826629214706}, {"name": "Tagore", "population": 8350, "latitude": 1.3841414, "longitude": 103.8299403}, {"name": "Townsville", "population": 23770, "latitude": 1.3594914, "longitude": 103.8551716}, {"name": "Yio Chu Kang", "population": 30, "latitude": 1.3587904, "longitude": 103.8742217}, {"name": "Yio Chu Kang East", "population": 4080, "latitude": 1.3587904, "longitude": 103.8742217}, {"name": "Yio Chu Kang North", "population": 0, "latitude": 1.3587904, "longitude": 103.8742217}, {"name": "Yio Chu Kang West", "population": 26550, "latitude": 1.3587904, "longitude": 103.8742217}, {"name": "Bedok", "population": 289750, "latitude": 1.3239765, "longitude": 103.930216}, {"name": "Bayshore", "population": 7480, "latitude": 1.3128118, "longitude": 103.939032917616}, {"name": "Bedok North", "population": 85930, "latitude": 1.3324018, "longitude": 103.9193052}, {"name": "Bedok Reservoir", "population": 25400, "latitude": 1.3425058, "longitude": 103.925229807312}, {"name": "Bedok South", "population": 51190, "latitude": 1.3170871, "longitude": 103.9499069}, {"name": "Frankel", "population": 33570, "latitude": 1.3183166, "longitude": 103.9147267}, {"name": "Kaki Bukit", "population": 40820, "latitude": 1.3360277, "longitude": 103.9018509}, {"name": "Kembangan", "population": 38440, "latitude": 1.3210321, "longitude": 103.9129269}, {"name": "Siglap", "population": 6930, "latitude": 1.3169991, "longitude": 103.9195871}, {"name": "Bishan", "population": 90700, "latitude": 1.3514521, "longitude": 103.8482496}, {"name": "Bishan East", "population": 28820, "latitude": 1.3514521, "longitude": 103.8482496}, {"name": "Marymount", "population": 31540, "latitude": 1.3486136, "longitude": 103.8392382}, {"name": "Upper Thomson", "population": 30340, "latitude": 1.354498, "longitude": 103.832820550675}, {"name": "Boon Lay", "population": 30, "latitude": 1.3456401, "longitude": 103.7118018}, {"name": "Samulun", "population": 10, "latitude": 1.302728, "longitude": 103.697428262079}, {"name": "Shipyard", "population": 0, "latitude": 1.3094701, "longitude": 103.697839}, {"name": "Tukang", "population": 10, "latitude": 1.3253215, "longitude": 103.7092754}, {"name": "Bukit Batok", "population": 139270, "latitude": 1.3490572, "longitude": 103.7495906}, {"name": "Brickworks", "population": 0, "latitude": 1.2869332, "longitude": 103.807560113105}, {"name": "Bukit Batok Central", "population": 26060, "latitude": 1.3509787, "longitude": 103.750719}, {"name": "Bukit Batok East", "population": 14570, "latitude": 1.3490572, "longitude": 103.7495906}, {"name": "Bukit Batok South", "population": 13940, "latitude": 1.3490572, "longitude": 103.7495906}, {"name": "Bukit Batok West", "population": 15190, "latitude": 1.3455305, "longitude": 103.7397329}, {"name": "Gombak", "population": 9820, "latitude": 1.360768, "longitude": 103.7495341}, {"name": "Guilin", "population": 13130, "latitude": 1.35548985, "longitude": 103.752533564001}, {"name": "Hillview", "population": 18220, "latitude": 1.3623436, "longitude": 103.7671304}, {"name": "Hong Kah North", "population": 28340, "latitude": 1.3582378, "longitude": 103.7271914}, {"name": "Bukit Merah", "population": 155840, "latitude": 1.2806275, "longitude": 103.8305915}, {"name": "Alexandra Hill", "population": 15650, "latitude": 1.277477, "longitude": 103.8018803}, {"name": "Alexandra North", "population": 1000, "latitude": 1.277477, "longitude": 103.8018803}, {"name": "Bukit Ho Swee", "population": 16290, "latitude": 1.2873254, "longitude": 103.8334458}, {"name": "Bukit Merah", "population": 1190, "latitude": 1.2806275, "longitude": 103.8305915}, {"name": "Jurong Island", "population": 40, "latitude": 1.24762615, "longitude": 103.686974398195}, {"name": "Depot Road", "population": 5200, "latitude": 1.2815921, "longitude": 103.8050368}, {"name": "Everton Park", "population": 9010, "latitude": 1.2771286, "longitude": 103.83936791519}, {"name": "Kampong Tiong Bahru", "population": 10460, "latitude": 1.2749197, "longitude": 103.8289511}, {"name": "Maritime Square", "population": 2560, "latitude": 1.264222, "longitude": 103.8189255}, {"name": "Redhill", "population": 12210, "latitude": 1.2896482, "longitude": 103.8167677}, {"name": "Singapore General Hospital", "population": 10, "latitude": 1.27944885, "longitude": 103.836280497274}, {"name": "Telok Blangah Drive", "population": 16000, "latitude": 1.2727476, "longitude": 103.8094655}, {"name": "Telok Blangah Rise", "population": 13820, "latitude": 1.2733393, "longitude": 103.8206709}, {"name": "Telok Blangah Way", "population": 10690, "latitude": 1.2775976, "longitude": 103.8177703}, {"name": "Tiong Bahru", "population": 12190, "latitude": 1.2861968, "longitude": 103.8257646}, {"name": "Tiong Bahru Station", "population": 16670, "latitude": 1.2861968, "longitude": 103.8257646}, {"name": "Bukit Panjang", "population": 139030, "latitude": 1.377921, "longitude": 103.7718658}, {"name": "Bangkit", "population": 23800, "latitude": 1.3800432, "longitude": 103.7726581}, {"name": "Dairy Farm", "population": 5390, "latitude": 1.3651581, "longitude": 103.7740781}, {"name": "Fajar", "population": 26770, "latitude": 1.3845178, "longitude": 103.770797}, {"name": "Jelebu", "population": 33470, "latitude": 1.3804378, "longitude": 103.7635987}, {"name": "Nature Reserve", "population": 3870, "latitude": 1.35384195, "longitude": 103.778506318935}, {"name": "Saujana", "population": 25530, "latitude": 1.3824196, "longitude": 103.766833}, {"name": "Senja", "population": 20200, "latitude": 1.3826778, "longitude": 103.7623822}, {"name": "Bukit Timah", "population": 74470, "latitude": 1.3546901, "longitude": 103.7763724}, {"name": "Anak Bukit", "population": 21990, "latitude": 1.3358173, "longitude": 103.7754302}, {"name": "Coronation Road", "population": 6170, "latitude": 1.3216284, "longitude": 103.8062364}, {"name": "Farrer Court", "population": 4680, "latitude": 1.3212852, "longitude": 103.8708583}, {"name": "Hillcrest", "population": 8810, "latitude": 1.2904753, "longitude": 103.8520359}, {"name": "Holland Road", "population": 10280, "latitude": 1.3103101, "longitude": 103.8047377}, {"name": "Leedon Park", "population": 6260, "latitude": 1.3168073, "longitude": 103.7961078}, {"name": "Swiss Club", "population": 5550, "latitude": 1.3429964, "longitude": 103.7906466}, {"name": "Ulu Pandan", "population": 10730, "latitude": 1.3112959, "longitude": 103.784035}, {"name": "Changi", "population": 2530, "latitude": 1.352516, "longitude": 103.987006967412}, {"name": "Changi Airport", "population": 0, "latitude": 1.3573382, "longitude": 103.9885647}, {"name": "Changi Point", "population": 790, "latitude": 1.352516, "longitude": 103.987006967412}, {"name": "Changi West", "population": 1740, "latitude": 1.352516, "longitude": 103.987006967412}, {"name": "Changi Bay", "population": 0, "latitude": 1.3168496, "longitude": 104.0206494}, {"name": "Changi Bay", "population": 0, "latitude": 1.3168496, "longitude": 104.0206494}, {"name": "Choa Chu Kang", "population": 174330, "latitude": 1.3892601, "longitude": 103.743728}, {"name": "Choa Chu Kang Central", "population": 21400, "latitude": 1.3806708, "longitude": 103.747758}, {"name": "Choa Chu Kang North", "population": 34380, "latitude": 1.3892601, "longitude": 103.743728}, {"name": "Keat Hong", "population": 15660, "latitude": 1.3785783, "longitude": 103.7490338}, {"name": "Teck Whye", "population": 27040, "latitude": 1.3766511, "longitude": 103.753635}, {"name": "Yew Tee", "population": 43710, "latitude": 1.3974678, "longitude": 103.7473332}, {"name": "Clementi", "population": 91630, "latitude": 1.3140256, "longitude": 103.7624098}, {"name": "Clementi Central", "population": 13490, "latitude": 1.3140256, "longitude": 103.7624098}, {"name": "Clementi North", "population": 28730, "latitude": 1.3140256, "longitude": 103.7624098}, {"name": "Clementi West", "population": 16470, "latitude": 1.3140256, "longitude": 103.7624098}, {"name": "Clementi Woods", "population": 16400, "latitude": 1.3000215, "longitude": 103.767770762669}, {"name": "Faber", "population": 4320, "latitude": 1.271924, "longitude": 103.81717519393}, {"name": "Pandan", "population": 10, "latitude": 1.3112959, "longitude": 103.784035}, {"name": "Sunset Way", "population": 6290, "latitude": 1.329083, "longitude": 103.7670802}, {"name": "Toh Tuck", "population": 40, "latitude": 1.3309244, "longitude": 103.757592680382}, {"name": "West Coast", "population": 5890, "latitude": 1.3072301, "longitude": 103.7667284}, {"name": "Anson", "population": 80, "latitude": 1.2714519, "longitude": 103.8429867}, {"name": "Bugis", "population": 2330, "latitude": 1.2994758, "longitude": 103.8550889}, {"name": "Cecil", "population": 160, "latitude": 1.2787159, "longitude": 103.8477379}, {"name": "City Hall", "population": 60, "latitude": 1.2928611, "longitude": 103.8526887}, {"name": "Clifford Pier", "population": 0, "latitude": 1.28394665, "longitude": 103.853537790268}, {"name": "Marina Centre", "population": 20, "latitude": 1.2904753, "longitude": 103.8520359}, {"name": "Maxwell", "population": 0, "latitude": 1.28062915, "longitude": 103.843994213966}, {"name": "Phillip", "population": 0, "latitude": 1.2839125, "longitude": 103.8495898}, {"name": "Raffles Place", "population": 60, "latitude": 1.2835947, "longitude": 103.851568}, {"name": "Tanjong Pagar", "population": 520, "latitude": 1.2764189, "longitude": 103.8429295}, {"name": "Geylang", "population": 116960, "latitude": 1.3181862, "longitude": 103.8870563}, {"name": "Aljunied", "population": 41710, "latitude": 1.3012922, "longitude": 103.8587206}, {"name": "Geylang East", "population": 33380, "latitude": 1.3181862, "longitude": 103.8870563}, {"name": "Kallang Way", "population": 40, "latitude": 1.3249544, "longitude": 103.8767546}, {"name": "Kampong Ubi", "population": 13210, "latitude": 1.328847, "longitude": 103.897373516403}, {"name": "Macpherson", "population": 28630, "latitude": 1.32620695, "longitude": 103.889506953939}, {"name": "Hougang", "population": 222310, "latitude": 1.3733601, "longitude": 103.8860907}, {"name": "Defu Industrial Park", "population": 20, "latitude": 1.35161105, "longitude": 103.89204505}, {"name": "Hougang Central", "population": 4830, "latitude": 1.3712907, "longitude": 103.8907556}, {"name": "Hougang East", "population": 21940, "latitude": 1.3733601, "longitude": 103.8860907}, {"name": "Hougang West", "population": 50120, "latitude": 1.3733601, "longitude": 103.8860907}, {"name": "Kangkar", "population": 26080, "latitude": 1.3839216, "longitude": 103.9022015}, {"name": "Kovan", "population": 25640, "latitude": 1.3597278, "longitude": 103.8863248}, {"name": "Lorong Ah Soo", "population": 34180, "latitude": 1.3520481, "longitude": 103.8845867}, {"name": "Lorong Halus", "population": 0, "latitude": 1.3831229, "longitude": 103.922492}, {"name": "Tai Seng", "population": 14700, "latitude": 1.3387694, "longitude": 103.8906378}, {"name": "Jurong East", "population": 84980, "latitude": 1.333115, "longitude": 103.7422968}, {"name": "International Business Park", "population": 10, "latitude": 1.3273734, "longitude": 103.747610627953}, {"name": "Jurong Gateway", "population": 20, "latitude": 1.3320983, "longitude": 103.7433761}, {"name": "Jurong Port", "population": 10, "latitude": 1.3110156, "longitude": 103.7188639}, {"name": "Jurong River", "population": 10, "latitude": 1.3135155, "longitude": 103.727496772568}, {"name": "Lakeside", "population": 1010, "latitude": 1.3442605, "longitude": 103.7207503}, {"name": "Penjuru Crescent", "population": 10, "latitude": 1.3165214, "longitude": 103.732135356004}, {"name": "Teban Gardens", "population": 19080, "latitude": 1.32089305, "longitude": 103.741658118063}, {"name": "Toh Guan", "population": 16510, "latitude": 1.3444027, "longitude": 103.7439352}, {"name": "Yuhua East", "population": 27460, "latitude": 1.347423, "longitude": 103.7231329}, {"name": "Yuhua West", "population": 20870, "latitude": 1.347423, "longitude": 103.7231329}, {"name": "Jurong West", "population": 272660, "latitude": 1.3396365, "longitude": 103.7073387}, {"name": "Boon Lay Place", "population": 31100, "latitude": 1.3474429, "longitude": 103.7123779}, {"name": "Chin Bee", "population": 0, "latitude": 1.3358076, "longitude": 103.7116182}, {"name": "Hong Kah", "population": 56870, "latitude": 1.3582378, "longitude": 103.7271914}, {"name": "Jurong West Central", "population": 68200, "latitude": 1.3396365, "longitude": 103.7073387}, {"name": "Kian Teck", "population": 50, "latitude": 1.3285109, "longitude": 103.694796274865}, {"name": "Safti", "population": 0, "latitude": 1.3304504, "longitude": 103.6834422}, {"name": "Taman Jurong", "population": 36940, "latitude": 1.3279442, "longitude": 103.7217462}, {"name": "Yunnan", "population": 70890, "latitude": 1.33828165, "longitude": 103.691098307116}, {"name": "Kallang", "population": 101210, "latitude": 1.310759, "longitude": 103.866262}, {"name": "Bendemeer", "population": 33830, "latitude": 1.3138211, "longitude": 103.8629282}, {"name": "Boon Keng", "population": 10970, "latitude": 1.3199062, "longitude": 103.861746}, {"name": "Crawford", "population": 9740, "latitude": 1.3044356, "longitude": 103.8662427}, {"name": "Geylang Bahru", "population": 12870, "latitude": 1.3199416, "longitude": 103.8718698}, {"name": "Kallang Bahru", "population": 30, "latitude": 1.3149163, "longitude": 103.864025}, {"name": "Kampong Bugis", "population": 890, "latitude": 1.3085297, "longitude": 103.8658712}, {"name": "Kampong Java", "population": 11260, "latitude": 1.313975, "longitude": 103.845481}, {"name": "Lavender", "population": 10320, "latitude": 1.3074447, "longitude": 103.8630305}, {"name": "Tanjong Rhu", "population": 11310, "latitude": 1.29734275, "longitude": 103.873764261344}, {"name": "Lim Chu Kang", "population": 90, "latitude": 1.4342172, "longitude": 103.7149872}, {"name": "Lim Chu Kang", "population": 90, "latitude": 1.4342172, "longitude": 103.7149872}, {"name": "Mandai", "population": 2120, "latitude": 1.4235346, "longitude": 103.8033499}, {"name": "Mandai East", "population": 0, "latitude": 1.4235346, "longitude": 103.8033499}, {"name": "Mandai Estate", "population": 2120, "latitude": 1.4080529, "longitude": 103.7588873}, {"name": "Mandai West", "population": 0, "latitude": 1.4235346, "longitude": 103.8033499}, {"name": "Marina East", "population": 0, "latitude": 1.288624, "longitude": 103.869827}, {"name": "Marina East", "population": 0, "latitude": 1.288624, "longitude": 103.869827}, {"name": "Marina South", "population": 0, "latitude": 1.276998, "longitude": 103.8615002}, {"name": "Marina South", "population": 0, "latitude": 1.276998, "longitude": 103.8615002}, {"name": "Marine Parade", "population": 48730, "latitude": 1.3026889, "longitude": 103.9073952}, {"name": "East Coast", "population": 0, "latitude": 1.3104654, "longitude": 103.9235132}, {"name": "Katong", "population": 9620, "latitude": 1.3057886, "longitude": 103.8976313}, {"name": "Marina East (Mp)", "population": 0, "latitude": 1.288624, "longitude": 103.869827}, {"name": "Marine Parade", "population": 28910, "latitude": 1.3026889, "longitude": 103.9073952}, {"name": "Mountbatten", "population": 10210, "latitude": 1.3062494, "longitude": 103.8824959}, {"name": "Museum", "population": 380, "latitude": 1.3011676, "longitude": 103.7734711}, {"name": "Bras Basah", "population": 10, "latitude": 1.2970035, "longitude": 103.8530934}, {"name": "Dhoby Ghaut", "population": 210, "latitude": 1.2991728, "longitude": 103.8452934}, {"name": "Fort Canning", "population": 160, "latitude": 1.2922396, "longitude": 103.8441627}, {"name": "Newton", "population": 6920, "latitude": 1.312981, "longitude": 103.8389215}, {"name": "Cairnhill", "population": 3330, "latitude": 1.3095838, "longitude": 103.8363139}, {"name": "Monk's Hill", "population": 980, "latitude": 1.3096313, "longitude": 103.840369}, {"name": "Newton Circus", "population": 230, "latitude": 1.3128904, "longitude": 103.8396116}, {"name": "Orange Grove", "population": 1440, "latitude": 1.3133229, "longitude": 103.826632115685}, {"name": "Novena", "population": 47990, "latitude": 1.3200842, "longitude": 103.8434924}, {"name": "Balestier", "population": 32340, "latitude": 1.326226, "longitude": 103.8473149}, {"name": "Dunearn", "population": 3900, "latitude": 1.3210897, "longitude": 103.827867312987}, {"name": "Malcolm", "population": 2630, "latitude": 1.3244852, "longitude": 103.8344062}, {"name": "Moulmein", "population": 8470, "latitude": 1.3193745, "longitude": 103.8535398}, {"name": "Orchard", "population": 920, "latitude": 1.305272, "longitude": 103.8328757}, {"name": "Boulevard", "population": 400, "latitude": 1.340863, "longitude": 103.830391822121}, {"name": "Somerset", "population": 130, "latitude": 1.3002901, "longitude": 103.838501}, {"name": "Tanglin", "population": 390, "latitude": 1.3060443, "longitude": 103.8152804}, {"name": "Outram", "population": 22080, "latitude": 1.2828695, "longitude": 103.8378603}, {"name": "China Square", "population": 1590, "latitude": 1.2834925, "longitude": 103.8465903}, {"name": "Chinatown", "population": 11880, "latitude": 1.2837372, "longitude": 103.8437976}, {"name": "Pearl's Hill", "population": 8230, "latitude": 1.28442085, "longitude": 103.841552797121}, {"name": "People's Park", "population": 390, "latitude": 1.2858105, "longitude": 103.8441598}, {"name": "Pasir Ris", "population": 139890, "latitude": 1.3759799, "longitude": 103.954254551031}, {"name": "Flora Drive", "population": 12950, "latitude": 1.3599271, "longitude": 103.9650379}, {"name": "Loyang East", "population": 2190, "latitude": 1.3753678, "longitude": 103.9772924}, {"name": "Loyang West", "population": 200, "latitude": 1.3753678, "longitude": 103.9772924}, {"name": "Pasir Ris Central", "population": 25730, "latitude": 1.3719016, "longitude": 103.9499677}, {"name": "Pasir Ris Drive", "population": 59480, "latitude": 1.3759799, "longitude": 103.954254551031}, {"name": "Pasir Ris Park", "population": 2980, "latitude": 1.37898635, "longitude": 103.950379788546}, {"name": "Pasir Ris West", "population": 36330, "latitude": 1.3759799, "longitude": 103.954254551031}, {"name": "Paya Lebar", "population": 40, "latitude": 1.3538993, "longitude": 103.887820526624}, {"name": "Airport Road", "population": 0, "latitude": 1.3376284, "longitude": 103.8962049}, {"name": "Paya Lebar East", "population": 10, "latitude": 1.3538993, "longitude": 103.887820526624}, {"name": "Paya Lebar North", "population": 20, "latitude": 1.3538993, "longitude": 103.887820526624}, {"name": "Paya Lebar West", "population": 0, "latitude": 1.3538993, "longitude": 103.887820526624}, {"name": "Pioneer", "population": 100, "latitude": 1.3375884, "longitude": 103.6974104}, {"name": "Benoi Sector", "population": 0, "latitude": 1.322022, "longitude": 103.6872516}, {"name": "Gul Circle", "population": 30, "latitude": 1.3159115, "longitude": 103.662305}, {"name": "Joo Koon", "population": 40, "latitude": 1.3264794, "longitude": 103.6720703}, {"name": "Pioneer Sector", "population": 0, "latitude": 1.3018135, "longitude": 103.6639546}, {"name": "Punggol", "population": 109750, "latitude": 1.398033, "longitude": 103.9073312}, {"name": "Coney Island", "population": 0, "latitude": 1.40941835, "longitude": 103.921469998714}, {"name": "Matilda", "population": 30440, "latitude": 1.40174085, "longitude": 103.891146137516}, {"name": "Northshore", "population": 280, "latitude": 1.41787695, "longitude": 103.901299302842}, {"name": "Punggol Canal", "population": 0, "latitude": 1.398033, "longitude": 103.9073312}, {"name": "Punggol Field", "population": 43300, "latitude": 1.3930598, "longitude": 103.9137421}, {"name": "Punggol Town Centre", "population": 7390, "latitude": 1.398033, "longitude": 103.9073312}, {"name": "Waterway East", "population": 28340, "latitude": 1.40876875, "longitude": 103.896819099971}, {"name": "Queenstown", "population": 98050, "latitude": 1.2946235, "longitude": 103.8060454}, {"name": "Commonwealth", "population": 8130, "latitude": 1.3024428, "longitude": 103.7983085}, {"name": "Dover", "population": 13200, "latitude": 1.3114214, "longitude": 103.7786275}, {"name": "Ghim Moh", "population": 11900, "latitude": 1.311558, "longitude": 103.788797}, {"name": "Holland Drive", "population": 14230, "latitude": 1.3077174, "longitude": 103.7936434}, {"name": "Kent Ridge", "population": 1080, "latitude": 1.2933012, "longitude": 103.7844127}, {"name": "Margaret Drive", "population": 10520, "latitude": 1.3014583, "longitude": 103.8014392}, {"name": "Mei Chin", "population": 16750, "latitude": 1.2911956, "longitude": 103.8016206}, {"name": "One North", "population": 620, "latitude": 1.2996073, "longitude": 103.7872407}, {"name": "Pasir Panjang 1", "population": 4010, "latitude": 1.2888336, "longitude": 103.7756574}, {"name": "Pasir Panjang 2", "population": 3520, "latitude": 1.2888336, "longitude": 103.7756574}, {"name": "Port", "population": 140, "latitude": 1.408495, "longitude": 103.8609948}, {"name": "Queensway", "population": 280, "latitude": 1.308069, "longitude": 103.8025128}, {"name": "Singapore Polytechnic", "population": 160, "latitude": 1.30913695, "longitude": 103.778143658071}, {"name": "Tanglin Halt", "population": 13160, "latitude": 1.2980714, "longitude": 103.798402550261}, {"name": "River Valley", "population": 9190, "latitude": 1.340863, "longitude": 103.830391822121}, {"name": "Institution Hill", "population": 3380, "latitude": 1.2950892, "longitude": 103.8395466}, {"name": "Leonie Hill", "population": 2450, "latitude": 1.2996815, "longitude": 103.8324203}, {"name": "One Tree Hill", "population": 1840, "latitude": 1.3004434, "longitude": 103.8249584}, {"name": "Oxley", "population": 1380, "latitude": 1.2962681, "longitude": 103.840827005664}, {"name": "Paterson", "population": 150, "latitude": 1.30030955, "longitude": 103.830616423022}, {"name": "Rochor", "population": 14590, "latitude": 1.3039839, "longitude": 103.8526118}, {"name": "Bencoolen", "population": 1460, "latitude": 1.2990161, "longitude": 103.850475248058}, {"name": "Farrer Park", "population": 3130, "latitude": 1.3127545, "longitude": 103.8543738}, {"name": "Kampong Glam", "population": 170, "latitude": 1.30128, "longitude": 103.8599267}, {"name": "Little India", "population": 3850, "latitude": 1.3074571, "longitude": 103.8525724}, {"name": "Mackenzie", "population": 110, "latitude": 1.3058532, "longitude": 103.8480346}, {"name": "Rochor Canal", "population": 10, "latitude": 1.3038431, "longitude": 103.8528609}, {"name": "Selegie", "population": 270, "latitude": 1.3027586, "longitude": 103.8502417}, {"name": "Sungei Road", "population": 2420, "latitude": 1.3047849, "longitude": 103.8565878}, {"name": "Seletar", "population": 270, "latitude": 1.4098488, "longitude": 103.8773789}, {"name": "Pulau Punggol Barat", "population": 0, "latitude": 1.4251234, "longitude": 103.8789977}, {"name": "Pulau Punggol Timor", "population": 0, "latitude": 1.4198936, "longitude": 103.8904904}, {"name": "Seletar", "population": 260, "latitude": 1.4098488, "longitude": 103.8773789}, {"name": "Seletar Aerospace Park", "population": 20, "latitude": 1.4163503, "longitude": 103.8724617}, {"name": "Sembawang", "population": 76530, "latitude": 1.4480646, "longitude": 103.8207604}, {"name": "Admiralty", "population": 14410, "latitude": 1.4406369, "longitude": 103.8009592}, {"name": "Sembawang Central", "population": 29140, "latitude": 1.4480646, "longitude": 103.8207604}, {"name": "Sembawang East", "population": 90, "latitude": 1.4480646, "longitude": 103.8207604}, {"name": "Sembawang North", "population": 26860, "latitude": 1.4480646, "longitude": 103.8207604}, {"name": "Sembawang Springs", "population": 4290, "latitude": 1.4405369, "longitude": 103.826076671701}, {"name": "Sembawang Straits", "population": 1700, "latitude": 1.458458, "longitude": 103.837404618567}, {"name": "Senoko North", "population": 20, "latitude": 1.4602965, "longitude": 103.8052452}, {"name": "Senoko South", "population": 20, "latitude": 1.4602965, "longitude": 103.8052452}, {"name": "The Wharves", "population": 0, "latitude": 1.46437295, "longitude": 103.829644322919}, {"name": "Sengkang", "population": 206680, "latitude": 1.3909487, "longitude": 103.8951748}, {"name": "Anchorvale", "population": 38040, "latitude": 1.38927895, "longitude": 103.887639999679}, {"name": "Compassvale", "population": 18510, "latitude": 1.394518, "longitude": 103.9004349}, {"name": "Fernvale", "population": 35590, "latitude": 1.3904635, "longitude": 103.8770826}, {"name": "Lorong Halus North", "population": 0, "latitude": 1.3831229, "longitude": 103.922492}, {"name": "Rivervale", "population": 59860, "latitude": 1.38062345, "longitude": 103.898400807354}, {"name": "Sengkang Town Centre", "population": 54680, "latitude": 1.3909487, "longitude": 103.8951748}, {"name": "Sengkang West", "population": 10, "latitude": 1.3909487, "longitude": 103.8951748}, {"name": "Serangoon", "population": 120670, "latitude": 1.363236, "longitude": 103.8744617}, {"name": "Lorong Chuan", "population": 8390, "latitude": 1.3541321, "longitude": 103.8651253}, {"name": "Seletar Hills", "population": 13580, "latitude": 1.3854637, "longitude": 103.8656683}, {"name": "Serangoon Central", "population": 26480, "latitude": 1.3475734, "longitude": 103.8748122}, {"name": "Serangoon Garden", "population": 39180, "latitude": 1.3624579, "longitude": 103.8660127}, {"name": "Serangoon North", "population": 17490, "latitude": 1.3713383, "longitude": 103.8727563}, {"name": "Upper Paya Lebar", "population": 15540, "latitude": 1.3538993, "longitude": 103.887820526624}, {"name": "Simpang", "population": 0, "latitude": 1.4452954, "longitude": 103.8497425}, {"name": "Pulau Seletar", "population": 0, "latitude": 1.44378625, "longitude": 103.861596991664}, {"name": "Simpang North", "population": 0, "latitude": 1.4452954, "longitude": 103.8497425}, {"name": "Simpang South", "population": 0, "latitude": 1.4452954, "longitude": 103.8497425}, {"name": "Singapore River", "population": 2720, "latitude": 1.28917835, "longitude": 103.84515431766}, {"name": "Boat Quay", "population": 180, "latitude": 1.2856828, "longitude": 103.8507661}, {"name": "Clarke Quay", "population": 130, "latitude": 1.2903938, "longitude": 103.8454241}, {"name": "Robertson Quay", "population": 2420, "latitude": 1.29040905, "longitude": 103.83812675642}, {"name": "Southern Islands", "population": 1480, "latitude": 1.2710889, "longitude": 103.86328}, {"name": "Sentosa", "population": 1470, "latitude": 1.24894585, "longitude": 103.834305641593}, {"name": "Straits View", "population": 0, "latitude": 1.2782163, "longitude": 103.8525322}, {"name": "Straits View", "population": 0, "latitude": 1.2782163, "longitude": 103.8525322}, {"name": "Sungei Kadut", "population": 850, "latitude": 1.4149971, "longitude": 103.7533106}, {"name": "Gali Batu", "population": 130, "latitude": 1.3965351, "longitude": 103.774025}, {"name": "Kranji", "population": 20, "latitude": 1.4252189, "longitude": 103.7619891}, {"name": "Pang Sua", "population": 20, "latitude": 1.3941182, "longitude": 103.7524794}, {"name": "Reservoir View", "population": 20, "latitude": 1.340863, "longitude": 103.830391822121}, {"name": "Turf Club", "population": 660, "latitude": 1.4220553, "longitude": 103.764182069032}, {"name": "Tampines", "population": 261230, "latitude": 1.3546528, "longitude": 103.9435712}, {"name": "Simei", "population": 42710, "latitude": 1.3432581, "longitude": 103.9542015}, {"name": "Tampines East", "population": 138500, "latitude": 1.3560253, "longitude": 103.955001}, {"name": "Tampines North", "population": 0, "latitude": 1.3678134, "longitude": 103.9374096}, {"name": "Tampines West", "population": 78110, "latitude": 1.3454122, "longitude": 103.9385357}, {"name": "Xilin", "population": 1920, "latitude": 1.3290801, "longitude": 103.965004}, {"name": "Tanglin", "population": 19000, "latitude": 1.3060443, "longitude": 103.8152804}, {"name": "Chatsworth", "population": 5740, "latitude": 1.29902585, "longitude": 103.8248887572}, {"name": "Nassim", "population": 8340, "latitude": 1.30659285, "longitude": 103.822992054526}, {"name": "Ridout", "population": 1400, "latitude": 1.3060771, "longitude": 103.8033316}, {"name": "Tyersall", "population": 3520, "latitude": 1.3117371, "longitude": 103.812435}, {"name": "Tengah", "population": 10, "latitude": 1.3669017, "longitude": 103.7108456}, {"name": "Tengah", "population": 10, "latitude": 1.3669017, "longitude": 103.7108456}, {"name": "Toa Payoh", "population": 124940, "latitude": 1.3353906, "longitude": 103.8497414}, {"name": "Bidadari", "population": 10, "latitude": 1.3352618, "longitude": 103.87216677548}, {"name": "Boon Teck", "population": 15110, "latitude": 1.3261225, "longitude": 103.8494543}, {"name": "Braddell", "population": 10760, "latitude": 1.3402775, "longitude": 103.8614324}, {"name": "Joo Seng", "population": 6720, "latitude": 1.3355302, "longitude": 103.8833207}, {"name": "Kim Keat", "population": 8610, "latitude": 1.3294271, "longitude": 103.8532782}, {"name": "Lorong 8 Toa Payoh", "population": 8220, "latitude": 1.3363982, "longitude": 103.8597569}, {"name": "Pei Chun", "population": 11780, "latitude": 1.33707015, "longitude": 103.855686352513}, {"name": "Potong Pasir", "population": 12650, "latitude": 1.3341893, "longitude": 103.8670929}, {"name": "Sennett", "population": 4540, "latitude": 1.33198165, "longitude": 103.874479159811}, {"name": "Toa Payoh Central", "population": 30740, "latitude": 1.334272, "longitude": 103.8468546}, {"name": "Toa Payoh West", "population": 13360, "latitude": 1.3351603, "longitude": 103.8408909}, {"name": "Woodleigh", "population": 2440, "latitude": 1.3391966, "longitude": 103.8707535}, {"name": "Tuas", "population": 70, "latitude": 1.3293722, "longitude": 103.6482364}, {"name": "Tengeh", "population": 0, "latitude": 1.34623395, "longitude": 103.646593424376}, {"name": "Tuas Bay", "population": 20, "latitude": 1.3293722, "longitude": 103.6482364}, {"name": "Tuas North", "population": 20, "latitude": 1.3293722, "longitude": 103.6482364}, {"name": "Tuas View", "population": 10, "latitude": 1.3293722, "longitude": 103.6482364}, {"name": "Western Islands", "population": 0, "latitude": 1.24066895, "longitude": 104.201771658282}, {"name": "Semakau", "population": 0, "latitude": 1.20358545, "longitude": 103.769847592456}, {"name": "Sudong", "population": 0, "latitude": 1.2080635, "longitude": 103.719488623156}, {"name": "Western Water Catchment", "population": 900, "latitude": 1.3664522, "longitude": 103.6810305}, {"name": "Western Water Catchment", "population": 900, "latitude": 1.3664522, "longitude": 103.6810305}, {"name": "Woodlands", "population": 250290, "latitude": 1.436897, "longitude": 103.786216}, {"name": "Midview", "population": 35510, "latitude": 1.33940175, "longitude": 103.756891640277}, {"name": "Senoko West", "population": 20, "latitude": 1.4602965, "longitude": 103.8052452}, {"name": "Woodgrove", "population": 35850, "latitude": 1.42913595, "longitude": 103.781250348102}, {"name": "Woodlands East", "population": 95510, "latitude": 1.436897, "longitude": 103.786216}, {"name": "Woodlands Regional Centre", "population": 0, "latitude": 1.436897, "longitude": 103.786216}, {"name": "Woodlands South", "population": 35840, "latitude": 1.4252493, "longitude": 103.7710242}, {"name": "Woodlands West", "population": 32890, "latitude": 1.436897, "longitude": 103.786216}, {"name": "Yishun", "population": 201970, "latitude": 1.428136, "longitude": 103.8336942}, {"name": "Khatib", "population": 10850, "latitude": 1.4173597, "longitude": 103.8330179}, {"name": "Lower Seletar", "population": 2870, "latitude": 1.411265, "longitude": 103.852135855657}, {"name": "Nee Soon", "population": 900, "latitude": 1.40961385, "longitude": 103.814648830065}, {"name": "Northland", "population": 30380, "latitude": 1.43571045, "longitude": 103.840719473428}, {"name": "Springleaf", "population": 3880, "latitude": 1.398315, "longitude": 103.818057261069}, {"name": "Yishun Central", "population": 1490, "latitude": 1.4304311, "longitude": 103.835527}, {"name": "Yishun East", "population": 54880, "latitude": 1.428136, "longitude": 103.8336942}, {"name": "Yishun South", "population": 38840, "latitude": 1.428136, "longitude": 103.8336942}]