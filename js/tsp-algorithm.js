var tsp_data = [
[130,
1, 334.5909245845, 161.7809319139,
2, 397.6446634067, 262.8165330708,
3, 503.8741827107, 172.8741151168,
4, 444.0479403502, 384.6491809647,
5, 311.6137146746, 2.0091699828,
6, 662.8551011379, 549.2301263653,
7, 40.0979030612, 187.2375430791,
8, 526.8941409181, 215.7079092185,
9, 209.1887938487, 691.0262291948,
10, 683.2674131973, 414.2096286906,
11, 280.7494438748, 5.9206392047,
12, 252.7493090080, 535.7430385019,
13, 698.7850451923, 348.4413729766,
14, 678.7574678104, 410.7256424438,
15, 220.0041131179, 409.1225812873,
16, 355.1528556851, 76.3912076444,
17, 296.9724227786, 313.1312792361,
18, 504.5154071733, 240.8866564499,
19, 224.1079496785, 358.4872228907,
20, 470.6801296968, 309.6259188406,
21, 554.2530513223, 279.4242466521,
22, 567.6332684419, 352.7162027273,
23, 599.0532671093, 361.0948690386,
24, 240.5232959211, 430.6036007844,
25, 32.0825972787, 345.8551009775,
26, 91.0538736891, 148.7213270256,
27, 248.2179894723, 343.9528017384,
28, 488.8909044347, 3.6122311393,
29, 206.0467939820, 437.7639406167,
30, 575.8409415632, 141.9670960195,
31, 282.6089948164, 329.4183805862,
32, 27.6581484868, 424.7684581747,
33, 568.5737309870, 287.0975660546,
34, 269.4638933331, 295.9464636385,
35, 417.8004856811, 341.2596589955,
36, 32.1680938737, 448.8998721172,
37, 561.4775136009, 357.3543930067,
38, 342.9482167470, 492.3321423839,
39, 399.6752075383, 156.8435035519,
40, 571.7371050025, 375.7575350833,
41, 370.7559842751, 151.9060751898,
42, 509.7093253204, 435.7975189314,
43, 177.0206999750, 295.6044772584,
44, 526.1674198605, 409.4859418161,
45, 316.5725171854, 65.6400108214,
46, 469.2908100279, 281.9891445025,
47, 572.7630641427, 373.3208821255,
48, 29.5176994283, 330.0382309000,
49, 454.0082936692, 537.2178547659,
50, 416.1546762271, 227.6133100741,
51, 535.2514330806, 471.0648643744,
52, 265.4455533675, 684.9987192464,
53, 478.0542110167, 509.6452028741,
54, 370.4781203413, 332.5390063041,
55, 598.3479202004, 446.8693279856,
56, 201.1521139175, 649.0260268945,
57, 193.6925360026, 680.2322840744,
58, 448.5792598859, 532.7934059740,
59, 603.2853485624, 134.4006473609,
60, 543.0102490781, 481.5168231148,
61, 214.5750793346, 43.6460117543,
62, 426.3501451825, 61.7285415996,
63, 89.0447037063, 277.1158385868,
64, 84.4920100219, 31.8474816424,
65, 220.0468614154, 623.0778103080,
66, 688.4613313444, 0.4702312726,
67, 687.2857531630, 373.5346236130,
68, 75.4934933967, 312.9175377486,
69, 63.4170993511, 23.7039309674,
70, 97.9363495877, 211.0910930878,
71, 399.5255884970, 170.8221968365,
72, 456.3167017346, 597.1937161677,
73, 319.8855102422, 626.8396604886,
74, 295.9250894897, 664.6291554845,
75, 288.4868857235, 667.7284070537,
76, 268.3951858954, 52.9010181645,
77, 140.4709056068, 513.5566720960,
78, 689.8079027159, 167.5947003748,
79, 280.5784506848, 458.7533546925,
80, 453.3884433554, 282.9082328989,
81, 213.5704943432, 525.8681817779,
82, 133.6953004520, 677.1757808026,
83, 521.1658690522, 132.8617086506,
84, 30.2657946347, 450.0754502986,
85, 657.0199585283, 39.7772908299,
86, 6.9252241961, 23.8749241575,
87, 252.4286967767, 535.1659364856,
88, 42.8551682504, 63.8232081774,
89, 145.8999393902, 399.5255884970,
90, 638.4885715591, 62.6262558472,
91, 489.2756391122, 665.3131282446,
92, 361.2231139311, 564.2347787901,
93, 519.9475425732, 347.9711417040,
94, 129.3349741063, 435.6692740389,
95, 259.7172815016, 454.6495181318,
96, 676.3421890013, 371.0979706551,
97, 84.5133841706, 183.3260738572,
98, 77.7164048671, 354.3833863300,
99, 335.9802442534, 660.6321896676,
100, 264.3554717810, 377.5743377274,
101, 51.6826916855, 676.0429509187,
102, 692.1376849300, 543.8010925819,
103, 169.2191356800, 547.8194325476,
104, 194.0131482339, 263.4791316822,
105, 415.1928395332, 78.9133571973,
106, 415.0432204919, 479.0801701569,
107, 169.8389859939, 245.6103433244,
108, 525.0987124228, 213.5063718969,
109, 238.6851191283, 33.4932910965,
110, 116.2112467718, 363.5742702940,
111, 16.9283258126, 656.5711014044,
112, 434.3440768162, 92.6996831431,
113, 40.5253860363, 424.6829615797,
114, 530.4849979086, 183.8390534273,
115, 484.3595848990, 49.2460387276,
116, 263.6501248722, 426.5852608187,
117, 450.2891917862, 126.3853415784,
118, 441.7822805823, 299.7724362653,
119, 24.2169105375, 500.3474481664,
120, 503.7886861157, 514.6895019799,
121, 635.5389390312, 200.9811207275,
122, 614.5922732529, 418.8691931188,
123, 21.7161351334, 660.9741760476,
124, 143.8266469611, 92.6996831431,
125, 637.7191022040, 54.2048412384,
126, 566.5645610042, 199.9551615873,
127, 196.6849168280, 221.8209157619,
128, 384.9270448985, 87.4630166986,
129, 178.1107815614, 104.6905805938,
130, 403.2874386776, 205.8971749407],
[150,
1, 37.4393516691, 541.2090699418,
2, 612.1759508571, 494.3166877396,
3, 38.1312338227, 353.1484581781,
4, 53.4418081065, 131.4849013650,
5, 143.0606355347, 631.7200953923,
6, 689.9451267256, 468.5354998742,
7, 112.7478815786, 529.4177578260,
8, 141.4875865042, 504.8184855710,
9, 661.0513901702, 445.9375182115,
10, 98.7899036592, 384.5926031158,
11, 697.3881696597, 180.3962284275,
12, 536.4894189738, 287.2279085051,
13, 192.4067320507, 20.4394059310,
14, 282.7865258765, 229.8001556189,
15, 240.8251726391, 281.5141437200,
16, 246.9281323057, 322.4613321160,
17, 649.7313216456, 62.3331575282,
18, 352.9658562600, 666.7873101942,
19, 633.3923676580, 534.9398453712,
20, 488.3117994040, 437.4869439948,
21, 141.4039286509, 228.4325551488,
22, 17.3632612602, 240.2407068508,
23, 397.5586451389, 231.3591208928,
24, 565.7853781464, 282.3858748974,
25, 475.8975387047, 468.5392706317,
26, 322.4224566559, 550.3165478233,
27, 397.5586634023, 74.7588387765,
28, 672.8618339396, 432.8826409630,
29, 571.2189680147, 530.2616991530,
30, 104.6531165914, 482.8224768783,
31, 356.7098388794, 67.6477131712,
32, 400.4070255527, 253.6794479997,
33, 282.3036243109, 426.8380500923,
34, 58.7766988363, 507.1712386832,
35, 189.7506224400, 460.3815233617,
36, 659.9124120147, 226.6284156239,
37, 639.0307636033, 467.2302300719,
38, 415.0258357432, 233.3045376118,
39, 547.2662016307, 161.6589278401,
40, 616.6547902644, 339.3409309407,
41, 494.8592427417, 148.1217856389,
42, 629.9980812186, 433.4548164038,
43, 471.1014312410, 314.2219307579,
44, 138.2440514421, 137.1679919735,
45, 91.5847556724, 110.0203007516,
46, 390.6972811808, 423.9774318385,
47, 565.1617825137, 429.1598152874,
48, 54.5248980387, 438.5515408431,
49, 334.3508329710, 153.7969238040,
50, 531.0291024509, 612.3874827889,
51, 475.7345905802, 385.7844618897,
52, 228.8325218994, 410.4461939615,
53, 578.3805347586, 321.3303494537,
54, 358.9170574485, 404.4670352898,
55, 486.4648554867, 593.0429937016,
56, 343.1693707670, 509.3123571315,
57, 530.3626972076, 137.6881275684,
58, 498.8065475299, 576.2102674608,
59, 224.3182715500, 312.4677490415,
60, 595.8360732590, 81.8130051356,
61, 661.5588724308, 217.0456944477,
62, 43.6892045516, 305.4722789165,
63, 79.4653452530, 445.9641737689,
64, 210.4163247004, 130.7151137038,
65, 432.2642292251, 629.4092661116,
66, 623.2487161301, 69.1892850840,
67, 436.5194739944, 282.9356456070,
68, 59.4163265482, 40.1280234442,
69, 630.9230074073, 230.3429888130,
70, 579.3265539688, 601.0359410602,
71, 117.8624507480, 112.9796833705,
72, 297.7912565664, 166.3131886803,
73, 22.7642703744, 455.5340094037,
74, 259.7095810385, 10.6199925885,
75, 342.3579873647, 599.3880182608,
76, 10.0260950143, 488.9310558282,
77, 315.2926064118, 273.2275475579,
78, 220.7044919297, 270.0819745721,
79, 192.1186059948, 314.1839922798,
80, 271.5042718992, 225.2921989972,
81, 530.7320005441, 504.0670155337,
82, 42.5331441666, 656.3645162886,
83, 396.1274792588, 539.4648066027,
84, 118.6631474021, 508.7129103929,
85, 395.6913876595, 699.5376048429,
86, 559.0157105844, 560.8866941411,
87, 22.6471035906, 526.2470392816,
88, 135.6377085256, 325.8409901555,
89, 141.4507014379, 485.2477927763,
90, 396.7741299332, 460.7557115283,
91, 87.7494562765, 19.6170129082,
92, 350.4245639661, 420.6531186835,
93, 216.7010817133, 466.4816410995,
94, 130.9237737024, 351.1491733079,
95, 72.6329856671, 645.7852219213,
96, 144.6002949996, 457.4224283926,
97, 212.3725077442, 594.9216893413,
98, 49.9186786455, 541.4350825349,
99, 656.6943525585, 558.1109593509,
100, 176.5941623792, 648.5239953299,
101, 500.3825200226, 198.7428378322,
102, 634.3178678420, 612.8291643194,
103, 59.7537372726, 551.6321886765,
104, 15.2145765106, 143.0441928532,
105, 283.0054378872, 376.4439530184,
106, 146.5389000907, 39.4231794338,
107, 101.8685605377, 635.0986850180,
108, 588.1968537448, 580.5946976921,
109, 457.2628632528, 350.0164047376,
110, 537.4663680494, 472.5842276692,
111, 269.3669098585, 367.4763636538,
112, 239.9045383695, 102.6297653390,
113, 88.4677500396, 384.0507209275,
114, 658.9133693395, 583.9575181023,
115, 97.7359146347, 157.4558657632,
116, 506.6191384007, 233.0022156094,
117, 500.2566898239, 64.9136393489,
118, 594.4048565021, 275.8741868990,
119, 66.2308146610, 24.1317387604,
120, 598.4162993909, 414.5557574275,
121, 172.3088330830, 344.3963466366,
122, 299.4812851800, 251.8295121320,
123, 303.8379894831, 21.0526063790,
124, 197.8969269840, 512.3888960980,
125, 56.0199567669, 243.0663818382,
126, 255.5566183121, 448.8651882442,
127, 608.4256112402, 222.5421309272,
128, 70.2722703273, 77.9227026433,
129, 398.2298999899, 119.5576573860,
130, 635.4970237093, 133.3225902609,
131, 378.3484559418, 272.2907677147,
132, 484.8029663388, 677.0730379436,
133, 278.8710882619, 299.9308770828,
134, 381.6537300653, 360.3337602785,
135, 557.6070707573, 595.3185092281,
136, 249.0589749342, 76.6595112599,
137, 562.9048787838, 670.0382113114,
138, 398.5504365580, 392.6493259144,
139, 590.8939720560, 370.7414913742,
140, 558.2008003726, 0.4198814512,
141, 461.4114714423, 530.5254969413,
142, 354.7242881504, 685.4045361900,
143, 193.6611295657, 669.7432521028,
144, 352.3140807211, 140.3273323662,
145, 308.4345709740, 115.2054269847,
146, 299.5881370080, 530.5889619020,
147, 334.2748764383, 152.1494569394,
148, 690.9658585947, 134.5793307203,
149, 48.0798124069, 270.9680673720,
150, 91.6467647724, 166.3541158474]
];

var gene_data, res_data, mutate_rate = 0.1;

$(document).ready(function () {
	$('#calculate').click(function () {
		var algorithm = $('input[name=mode-selection]').val();
		var data_set_name = $('input[name=data-selection]').val();
		var gene_size = $('input[name=size-selection]').val();
		var iters = $('input[name=iter-selection]').val();

		//console.log(algorithm, data_set_name, gene_size, iters);

		if ( ('' === algorithm) || ('' === data_set_name) || ('' === gene_size) || ('' === iters)) {
			swal({
				title:"Please, fill the blank first",
				html:true,
				confirmButtonColor: "#057748",
				confirmButtonText: "Ok, I got it",
				closeOnConfirm: true,
				animation: "slide-from-top"
			});
			return;
		}

		var gb_size = tsp_data[data_set_name][0];

		//console.log(data_set_name, gb_size);

		gene_data = [];

		console.log('init');
		res_data = rand_init(gene_size, gb_size, data_set_name);
		console.log('init fin');

		//console.log(res_data);

		var test = function(n, callback) {
			var result = 0;
			var i = 0;
			(function() {
				var st = +new Date();
				while (i < n) {
					extand(res_data, gene_size, gb_size, algorithm, data_set_name);

					res_data.sort(function(a, b) {
						return calculate(a, gb_size, data_set_name) - calculate(b, gb_size, data_set_name);
					});
					while (res_data.length > gene_size)
						res_data.pop();

					console.log(n, [i, calculate(res_data[0], gb_size, data_set_name)]);
					gene_data.push([i, calculate(res_data[0], gb_size, data_set_name)]);
					switch_data(res_data[0], gb_size, data_set_name);

					++ i;

					if ((+new Date()) - st < 100) {
						result++;
					} else {
						setTimeout(arguments.callee, 0);
						return;
					}
				}
				callback && callback();
			})();
		};

		test(parseInt(iters));

		//console.log(gene_data);
	});
});

function rand_init(gene_size, gb_size, data_set_name) {
	var res = [];
	for (var i = 0; i < gene_size; ++ i) {
		var visit = new Array(gb_size);
		var local_res = [];
		for (var j = 0; j < gb_size; ++ j) {
			var x = Math.floor(gb_size * Math.random());
			while (x >= gb_size || visit[x] != undefined) {
				x = Math.floor(gb_size * Math.random());
			}
			visit[x] = 1;
			local_res.push(x);
		}
		local_res.push(0);
		//greedy(local_res, gb_size, data_set_name);
		res.push(local_res);
	}
	return res;
}

function switch_data(res, gb_size, data_set_name) {
	console.log("CALL S", gene_data.length);
	data = [];
	for (var i = 0; i < gb_size - 1; ++ i) {
		data.push([tsp_data[data_set_name][i * 3 + 2], tsp_data[data_set_name][i * 3 + 3]]);
	}
	data.push([tsp_data[data_set_name][2], tsp_data[data_set_name][3]]);
	map.setData([data]);
	map.setupGrid();
	map.draw();
	down.setData([gene_data]);
	down.setupGrid();
	down.draw();
}

function calculate(res, gb_size, data_set_name) {
	if (res[res.length - 1] != 0)
		return res[res.length - 1];

	var ans = 0.0;

	for (var i = 0; i < gb_size - 1; ++ i) {
		ans += Math.sqrt(
			(tsp_data[data_set_name][res[i] * 3 + 2] - tsp_data[data_set_name][res[i + 1] * 3 + 2]) *
			(tsp_data[data_set_name][res[i] * 3 + 2] - tsp_data[data_set_name][res[i + 1] * 3 + 2]) +
			(tsp_data[data_set_name][res[i] * 3 + 3] - tsp_data[data_set_name][res[i + 1] * 3 + 3]) *
			(tsp_data[data_set_name][res[i] * 3 + 3] - tsp_data[data_set_name][res[i + 1] * 3 + 3])
		);
	}

	ans += Math.sqrt(
		(tsp_data[data_set_name][res[gb_size - 1] * 3 + 2] - tsp_data[data_set_name][res[0] * 3 + 2]) *
		(tsp_data[data_set_name][res[gb_size - 1] * 3 + 2] - tsp_data[data_set_name][res[0] * 3 + 2]) +
		(tsp_data[data_set_name][res[gb_size - 1] * 3 + 3] - tsp_data[data_set_name][res[0] * 3 + 3]) *
		(tsp_data[data_set_name][res[gb_size - 1] * 3 + 3] - tsp_data[data_set_name][res[0] * 3 + 3])
	);

	res[res.length - 1] = ans;
	return ans;
}

function extand(res_data, gene_size, gb_size, algorithm, data_set_name) {
	if (algorithm != undefined) {
		//for (var i = 0; i < 10; ++ i)
		for (var j = 0; j < gene_size; ++ j) {
			var p = Math.random();
			if (p <= mutate_rate) {
				new_res = [];
				for (var k = 0; k < gb_size; ++ k)
					new_res.push(res_data[j][k]);

				for (var avg = 0; avg < 5; ++ avg) {
					var x = Math.floor(gb_size * Math.random());
					var y = Math.floor(gb_size * Math.random());
					while (y == x) {
						y = Math.floor(gb_size * Math.random());
					}
					var t = new_res[x];
					new_res[x] = new_res[y];
					new_res[y] = t;
				}

				new_res.push(0);
				greedy(new_res, gb_size, data_set_name);

				res_data.push(new_res);
			}
		}
	}
}

function greedy(res, gb_size, data_set_name) {
	new_res = [];
	for (var k = 0; k < gb_size; ++ k)
		new_res.push(res[k]);
	new_res.push(0);
	calculate(new_res, gb_size, data_set_name);

	var cnt = 0;
	for (var i = 0; i < gb_size; ++ i) {
		if (cnt >= 100)
			break;
		for (var j = i + 1; j < gb_size; ++ j) {
			if (cnt >= 100)
				break;
			var t = new_res[i];
			new_res[i] = new_res[j];
			new_res[j] = t;

			var old = new_res[gb_size];
			new_res[gb_size] = 0;

			var ans = calculate(new_res, gb_size, data_set_name);
			
			if (ans >= old) {
				t = new_res[i];
				new_res[i] = new_res[j];
				new_res[j] = t;
			} else {
				++ cnt;
			}
		}
	}

	for (var k = 0; k <= gb_size; ++ k)
		res[k] = new_res[k];
}
