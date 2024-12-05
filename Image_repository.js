// average reactions for stage3
const averageResponses = jsPsych.randomization.repeat([[-65,1],[-75,1],[-70,1], [-72,1],[-68,1],[-20,0],[-17,0],[-15,0],[-22,0],[-21,0]],1)

const BASELINE_NEG_IMAGES_OBJS = jsPsych.randomization.repeat(
  [
    {
      "N": 57,
      "Minimum": -100,
      "Maximum": 0,
      "Mean": -67.8070175438597,
      "Std. Deviation": 30.0822910628325,
      "less extreme": -45.2452992467353,
      "more extreme": -90.3687358409841,
      "pic_num": 0,
      "index": "9940"
    },
    {
      "N": 57,
      "Minimum": -100,
      "Maximum": 31,
      "Mean": -48.5087719298246,
      "Std. Deviation": 33.1889196263589,
      "less extreme": -23.6170822100554,
      "more extreme": -73.4004616495938,
      "pic_num": 3,
      "index": "1111"
    },
    {
      "N": 57,
      "Minimum": -100,
      "Maximum": -1,
      "Mean": -69.7017543859649,
      "Std. Deviation": 28.2823549940599,
      "less extreme": -48.48998814042,
      "more extreme": -90.9135206315098,
      "pic_num": 77,
      "index": "9042"
    },
    {
      "N": 57,
      "Minimum": -100,
      "Maximum": 43,
      "Mean": -38.4035087719298,
      "Std. Deviation": 34.1226043895511,
      "less extreme": -12.8115554797665,
      "more extreme": -63.9954620640932,
      "pic_num": 91,
      "index": "9440"
    },
    {
      "N": 57,
      "Minimum": -100,
      "Maximum": 25,
      "Mean": -36.1228070175439,
      "Std. Deviation": 31.8175996756953,
      "less extreme": -12.2596072607724,
      "more extreme": -59.9860067743153,
      "pic_num": 10,
      "index": "1930"
    },
    {
      "N": 57,
      "Minimum": -100,
      "Maximum": 43,
      "Mean": -32.7719298245614,
      "Std. Deviation": 26.6411453688916,
      "less extreme": -12.7910707978927,
      "more extreme": -52.7527888512301,
      "pic_num": 14,
      "index": "2120"
    },
    {
      "N": 57,
      "Minimum": -100,
      "Maximum": 70,
      "Mean": -41.0877192982456,
      "Std. Deviation": 32.6935340383966,
      "less extreme": -16.5675687694481,
      "more extreme": -65.6078698270431,
      "pic_num": 23,
      "index": "2490"
    },
    {
      "N": 57,
      "Minimum": -100,
      "Maximum": 2,
      "Mean": -54,
      "Std. Deviation": 28.0076520156291,
      "less extreme": -32.9942609882782,
      "more extreme": -75.0057390117218,
      "pic_num": 42,
      "index": "3180"
    },
    {
      "N": 57,
      "Minimum": -80,
      "Maximum": 2,
      "Mean": -21.859649122807,
      "Std. Deviation": 24.3504463119051,
      "less extreme": -3.5968143888782,
      "more extreme": -40.1224838567358,
      "pic_num": 70,
      "index": "7079"
    },
    {
      "N": 57,
      "Minimum": -85,
      "Maximum": 100,
      "Mean": -8.7719298245614,
      "Std. Deviation": 43.7701045822128,
      "less extreme": 24.0556486120982,
      "more extreme": -41.599508261221,
      "pic_num": 71,
      "index": "7360"
    }
  ],1)

const TRAINING_NEG_IMAGES_OBJS = jsPsych.randomization.repeat(
[
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 36,
    "Mean": -35.578947368421,
    "Std. Deviation": 33.10640171608,
    "less extreme": -10.749146081361,
    "more extreme": -60.4087486554811,
    "pic_num": 11,
    "index": "1932"
  },   {
    "N": 57,
    "Minimum": -100,
    "Maximum": 14,
    "Mean": -34.6140350877193,
    "Std. Deviation": 32.1285111399544,
    "less extreme": -10.5176517327535,
    "more extreme": -58.7104184426851,
    "pic_num": 1,
    "index": "1019"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 55,
    "Mean": -33.3508771929824,
    "Std. Deviation": 36.4674469454168,
    "less extreme": -6.00029198391982,
    "more extreme": -60.7014624020451,
    "pic_num": 2,
    "index": "1050"
  },

  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 43,
    "Mean": -41.3508771929825,
    "Std. Deviation": 33.6178583643055,
    "less extreme": -16.1374834197533,
    "more extreme": -66.5642709662116,
    "pic_num": 4,
    "index": "1201"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 52,
    "Mean": -40.9824561403509,
    "Std. Deviation": 39.6878405398529,
    "less extreme": -11.2165757354612,
    "more extreme": -70.7483365452406,
    "pic_num": 5,
    "index": "1205"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 21,
    "Mean": -36.5438596491228,
    "Std. Deviation": 32.2147205567793,
    "less extreme": -12.3828192315384,
    "more extreme": -60.7049000667073,
    "pic_num": 6,
    "index": "1271"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 23,
    "Mean": -39.0701754385965,
    "Std. Deviation": 31.4085177534482,
    "less extreme": -15.5137871235103,
    "more extreme": -62.6265637536826,
    "pic_num": 7,
    "index": "1275"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 12,
    "Mean": -35.0877192982456,
    "Std. Deviation": 32.0486687386512,
    "less extreme": -11.0512177442572,
    "more extreme": -59.124220852234,
    "pic_num": 8,
    "index": "1300"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 59,
    "Mean": -19.719298245614,
    "Std. Deviation": 29.7181728829137,
    "less extreme": 2.56933141657123,
    "more extreme": -42.0079279077993,
    "pic_num": 9,
    "index": "1301"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": -15,
    "Mean": -64.1578947368421,
    "Std. Deviation": 26.3111800474384,
    "less extreme": -44.4245097012633,
    "more extreme": -83.8912797724209,
    "pic_num": 12,
    "index": "2095"
  },
  {
    "N": 57,
    "Minimum": -99,
    "Maximum": 31,
    "Mean": -18.4912280701754,
    "Std. Deviation": 26.2434500719551,
    "less extreme": 1.19135948379085,
    "more extreme": -38.1738156241417,
    "pic_num": 13,
    "index": "2115"
  },

  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 84,
    "Mean": -53.7368421052632,
    "Std. Deviation": 39.313541067655,
    "less extreme": -24.2516863045219,
    "more extreme": -83.2219979060044,
    "pic_num": 16,
    "index": "2205"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 24,
    "Mean": -52.8245614035088,
    "Std. Deviation": 31.9989524421267,
    "less extreme": -28.8253470719138,
    "more extreme": -76.8237757351038,
    "pic_num": 15,
    "index": "2141"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 2,
    "Mean": -31.280701754386,
    "Std. Deviation": 24.5107515665246,
    "less extreme": -12.8976380794925,
    "more extreme": -49.6637654292795,
    "pic_num": 17,
    "index": "2301"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 32,
    "Mean": -19.3508771929825,
    "Std. Deviation": 25.3901634693931,
    "less extreme": -0.308254590937601,
    "more extreme": -38.3934997950273,
    "pic_num": 18,
    "index": "2312"
  },
  {
    "N": 57,
    "Minimum": -72,
    "Maximum": 0,
    "Mean": -19.8070175438596,
    "Std. Deviation": 17.738616668254,
    "less extreme": -6.50305504266916,
    "more extreme": -33.1109800450501,
    "pic_num": 19,
    "index": "2399"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 15,
    "Mean": -26.5263157894737,
    "Std. Deviation": 29.1137579548852,
    "less extreme": -4.69099732330981,
    "more extreme": -48.3616342556376,
    "pic_num": 20,
    "index": "2455"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 3,
    "Mean": -35.2280701754386,
    "Std. Deviation": 27.4447611081004,
    "less extreme": -14.6444993443633,
    "more extreme": -55.8116410065139,
    "pic_num": 21,
    "index": "2456"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 20,
    "Mean": -22.5438596491228,
    "Std. Deviation": 22.3551449618575,
    "less extreme": -5.77750092772966,
    "more extreme": -39.310218370516,
    "pic_num": 22,
    "index": "2457"
  },

  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 64,
    "Mean": -14.8771929824561,
    "Std. Deviation": 35.0311443960119,
    "less extreme": 11.3961653145528,
    "more extreme": -41.1505512794651,
    "pic_num": 24,
    "index": "2590"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 94,
    "Mean": -34.1052631578947,
    "Std. Deviation": 45.3863117385967,
    "less extreme": -0.0655293539471842,
    "more extreme": -68.1449969618423,
    "pic_num": 25,
    "index": "2661"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 45,
    "Mean": -30.4912280701754,
    "Std. Deviation": 32.43847077106,
    "less extreme": -6.16237499188046,
    "more extreme": -54.8200811484704,
    "pic_num": 26,
    "index": "2682"
  },

  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 97,
    "Mean": -51.5438596491228,
    "Std. Deviation": 42.2716851261991,
    "less extreme": -19.8400958044735,
    "more extreme": -83.2476234937721,
    "pic_num": 28,
    "index": "2688"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 63,
    "Mean": -36.3157894736842,
    "Std. Deviation": 30.5696849688992,
    "less extreme": -13.3885257470098,
    "more extreme": -59.2430532003587,
    "pic_num": 29,
    "index": "2691"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -47.1052631578947,
    "Std. Deviation": 25.679817123936,
    "less extreme": -27.8454003149427,
    "more extreme": -66.3651260008467,
    "pic_num": 30,
    "index": "2694"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -32.140350877193,
    "Std. Deviation": 25.1966824605452,
    "less extreme": -13.2428390317841,
    "more extreme": -51.0378627226019,
    "pic_num": 31,
    "index": "2700"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": -9,
    "Mean": -58.9298245614035,
    "Std. Deviation": 26.7099898707814,
    "less extreme": -38.8973321583175,
    "more extreme": -78.9623169644895,
    "pic_num": 32,
    "index": "2703"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -52.6842105263158,
    "Std. Deviation": 27.3333638975317,
    "less extreme": -32.184187603167,
    "more extreme": -73.1842334494645,
    "pic_num": 33,
    "index": "2710"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 11,
    "Mean": -38.8070175438596,
    "Std. Deviation": 27.7813134758981,
    "less extreme": -17.9710324369361,
    "more extreme": -59.6430026507832,
    "pic_num": 34,
    "index": "2718"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": -5,
    "Mean": -57.6140350877193,
    "Std. Deviation": 25.7534702141318,
    "less extreme": -38.2989324271204,
    "more extreme": -76.9291377483182,
    "pic_num": 35,
    "index": "2750"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -42,
    "Std. Deviation": 28.613807855649,
    "less extreme": -20.5396441082633,
    "more extreme": -63.4603558917367,
    "pic_num": 36,
    "index": "2751"
  },
  {
    "N": 57,
    "Minimum": -94,
    "Maximum": 10,
    "Mean": -25.4561403508772,
    "Std. Deviation": 24.1565357729824,
    "less extreme": -7.33873852114039,
    "more extreme": -43.573542180614,
    "pic_num": 37,
    "index": "2753"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 79,
    "Mean": -21.1228070175439,
    "Std. Deviation": 34.3683150255324,
    "less extreme": 4.65342925160545,
    "more extreme": -46.8990432866932,
    "pic_num": 38,
    "index": "2795"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -62.6491228070175,
    "Std. Deviation": 29.5432438663286,
    "less extreme": -40.4916899072711,
    "more extreme": -84.806555706764,
    "pic_num": 39,
    "index": "2800"
  },

  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -42.0526315789474,
    "Std. Deviation": 28.4921173639254,
    "less extreme": -20.6835435560033,
    "more extreme": -63.4217196018914,
    "pic_num": 41,
    "index": "2900"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": -15,
    "Mean": -64.4385964912281,
    "Std. Deviation": 24.0512975176123,
    "less extreme": -46.4001233530189,
    "more extreme": -82.4770696294373,
    "pic_num": 43,
    "index": "3181"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 6,
    "Mean": -52.140350877193,
    "Std. Deviation": 30.0329810354331,
    "less extreme": -29.6156151006181,
    "more extreme": -74.6650866537678,
    "pic_num": 44,
    "index": "3220"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -57.5438596491228,
    "Std. Deviation": 28.4071609278356,
    "less extreme": -36.2384889532461,
    "more extreme": -78.8492303449995,
    "pic_num": 45,
    "index": "3230"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": -3,
    "Mean": -49.4561403508772,
    "Std. Deviation": 28.0656565519896,
    "less extreme": -28.406897936885,
    "more extreme": -70.5053827648694,
    "pic_num": 46,
    "index": "3300"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 2,
    "Mean": -54.3684210526316,
    "Std. Deviation": 26.4545645392701,
    "less extreme": -34.527497648179,
    "more extreme": -74.2093444570841,
    "pic_num": 48,
    "index": "3500"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": -5,
    "Mean": -61.8771929824562,
    "Std. Deviation": 26.6626210903677,
    "less extreme": -41.8802271646804,
    "more extreme": -81.8741588002319,
    "pic_num": 49,
    "index": "3530"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 51,
    "Mean": -34.5964912280702,
    "Std. Deviation": 33.1058150098842,
    "less extreme": -9.76712997065705,
    "more extreme": -59.4258524854833,
    "pic_num": 50,
    "index": "5971"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 5,
    "Mean": -53.0350877192983,
    "Std. Deviation": 29.9993838700306,
    "less extreme": -30.5355498167753,
    "more extreme": -75.5346256218212,
    "pic_num": 51,
    "index": "6020"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 28,
    "Mean": -62.6491228070176,
    "Std. Deviation": 29.3272735253565,
    "less extreme": -40.6536676630002,
    "more extreme": -84.644577951035,
    "pic_num": 52,
    "index": "6212"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 60,
    "Mean": -49.2631578947368,
    "Std. Deviation": 32.2232870074409,
    "less extreme": -25.0956926391562,
    "more extreme": -73.4306231503175,
    "pic_num": 53,
    "index": "6220"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": -3,
    "Mean": -46.0175438596491,
    "Std. Deviation": 25.1782865836462,
    "less extreme": -27.1338289219144,
    "more extreme": -64.9012587973838,
    "pic_num": 56,
    "index": "6311"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -54.5087719298246,
    "Std. Deviation": 30.2118252670194,
    "less extreme": -31.84990297956,
    "more extreme": -77.1676408800891,
    "pic_num": 57,
    "index": "6312"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": -10,
    "Mean": -69.2105263157895,
    "Std. Deviation": 26.9971803038929,
    "less extreme": -48.9626410878698,
    "more extreme": -89.4584115437091,
    "pic_num": 58,
    "index": "6313"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": -4,
    "Mean": -60.1754385964912,
    "Std. Deviation": 26.8335629436463,
    "less extreme": -40.0502663887565,
    "more extreme": -80.300610804226,
    "pic_num": 59,
    "index": "6315"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -76.7368421052632,
    "Std. Deviation": 24.4295827078195,
    "less extreme": -58.4146550743985,
    "more extreme": -95.0590291361278,
    "pic_num": 61,
    "index": "6415"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -60.9649122807018,
    "Std. Deviation": 30.3609034969792,
    "less extreme": -38.1942346579674,
    "more extreme": -83.7355899034361,
    "pic_num": 62,
    "index": "6570"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 2,
    "Mean": -44.3157894736842,
    "Std. Deviation": 30.4877949202258,
    "less extreme": -21.4499432835149,
    "more extreme": -67.1816356638535,
    "pic_num": 63,
    "index": "6571"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -48.5263157894737,
    "Std. Deviation": 26.3547944019665,
    "less extreme": -28.7602199879988,
    "more extreme": -68.2924115909486,
    "pic_num": 64,
    "index": "6821"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 31,
    "Mean": -45.9649122807018,
    "Std. Deviation": 29.2263120885229,
    "less extreme": -24.0451782143096,
    "more extreme": -67.8846463470939,
    "pic_num": 67,
    "index": "6840"
  },
  {
    "N": 57,
    "Minimum": -94,
    "Maximum": 5,
    "Mean": -14.4912280701754,
    "Std. Deviation": 16.0135242027945,
    "less extreme": -2.48108491807959,
    "more extreme": -26.5013712222713,
    "pic_num": 69,
    "index": "7023"
  },


  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 30,
    "Mean": -29.0175438596491,
    "Std. Deviation": 28.1897215488643,
    "less extreme": -7.87525269800087,
    "more extreme": -50.1598350212974,
    "pic_num": 72,
    "index": "7521"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": -2,
    "Mean": -53.719298245614,
    "Std. Deviation": 27.1205999630519,
    "less extreme": -33.3788482733251,
    "more extreme": -74.059748217903,
    "pic_num": 73,
    "index": "8485"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 12,
    "Mean": -32.9473684210526,
    "Std. Deviation": 26.0798369384634,
    "less extreme": -13.3874907172051,
    "more extreme": -52.5072461249002,
    "pic_num": 74,
    "index": "9010"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 49,
    "Mean": -28.0526315789474,
    "Std. Deviation": 31.0175186977523,
    "less extreme": -4.78949255563315,
    "more extreme": -51.3157706022616,
    "pic_num": 75,
    "index": "9031"
  },


  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 14,
    "Mean": -31.2280701754386,
    "Std. Deviation": 27.5765282854949,
    "less extreme": -10.5456739613174,
    "more extreme": -51.9104663895598,
    "pic_num": 78,
    "index": "9046"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 92,
    "Mean": -46.5087719298246,
    "Std. Deviation": 35.2299197147506,
    "less extreme": -20.0863321437616,
    "more extreme": -72.9312117158875,
    "pic_num": 79,
    "index": "9050"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 17,
    "Mean": -42.2631578947368,
    "Std. Deviation": 30.066311425028,
    "less extreme": -19.7134243259659,
    "more extreme": -64.8128914635078,
    "pic_num": 80,
    "index": "9120"
  },

  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 68,
    "Mean": -47.5438596491228,
    "Std. Deviation": 33.8537137525131,
    "less extreme": -22.153574334738,
    "more extreme": -72.9341449635076,
    "pic_num": 82,
    "index": "9180"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": -8,
    "Mean": -63.9298245614035,
    "Std. Deviation": 27.034937481184,
    "less extreme": -43.6536214505155,
    "more extreme": -84.2060276722915,
    "pic_num": 83,
    "index": "9181"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 35,
    "Mean": -30.7894736842105,
    "Std. Deviation": 27.5588570427687,
    "less extreme": -10.120330902134,
    "more extreme": -51.458616466287,
    "pic_num": 84,
    "index": "9184"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -40.4736842105263,
    "Std. Deviation": 28.8438562801991,
    "less extreme": -18.840792000377,
    "more extreme": -62.1065764206757,
    "pic_num": 85,
    "index": "9220"
  },
  {
    "N": 57,
    "Minimum": -88,
    "Maximum": 0,
    "Mean": -34.0350877192982,
    "Std. Deviation": 20.2060501125995,
    "less extreme": -18.8805501348486,
    "more extreme": -49.1896253037479,
    "pic_num": 86,
    "index": "9290"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 15,
    "Mean": -26.5964912280702,
    "Std. Deviation": 25.4627596761587,
    "less extreme": -7.49942147095113,
    "more extreme": -45.6935609851892,
    "pic_num": 87,
    "index": "9331"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 38,
    "Mean": -33.719298245614,
    "Std. Deviation": 31.5253607580836,
    "less extreme": -10.0752776770513,
    "more extreme": -57.3633188141768,
    "pic_num": 88,
    "index": "9341"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 0,
    "Mean": -48.2982456140351,
    "Std. Deviation": 28.633125741426,
    "less extreme": -26.8234013079656,
    "more extreme": -69.7730899201046,
    "pic_num": 90,
    "index": "9429"
  },

  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 4,
    "Mean": -50.9122807017544,
    "Std. Deviation": 27.171598027138,
    "less extreme": -30.5335821814009,
    "more extreme": -71.2909792221079,
    "pic_num": 92,
    "index": "9561"
  },
  {
    "N": 57,
    "Minimum": -91,
    "Maximum": 0,
    "Mean": -40.578947368421,
    "Std. Deviation": 27.9648678628465,
    "less extreme": -19.6052964712862,
    "more extreme": -61.5525982655559,
    "pic_num": 93,
    "index": "9584"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": -9,
    "Mean": -51.0877192982456,
    "Std. Deviation": 26.6741452545842,
    "less extreme": -31.0821103573075,
    "more extreme": -71.0933282391838,
    "pic_num": 94,
    "index": "9620"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 37,
    "Mean": -46.2456140350877,
    "Std. Deviation": 32.9546662107608,
    "less extreme": -21.5296143770172,
    "more extreme": -70.9616136931583,
    "pic_num": 95,
    "index": "9622"
  },
  {
    "N": 57,
    "Minimum": -97,
    "Maximum": 13,
    "Mean": -38.4736842105263,
    "Std. Deviation": 30.5000616294213,
    "less extreme": -15.5986379884604,
    "more extreme": -61.3487304325923,
    "pic_num": 96,
    "index": "9630"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 26,
    "Mean": -59.0877192982456,
    "Std. Deviation": 31.6387424696788,
    "less extreme": -35.3586624459865,
    "more extreme": -82.8167761505047,
    "pic_num": 97,
    "index": "9800"
  },
  {
    "N": 57,
    "Minimum": -100,
    "Maximum": 8,
    "Mean": -42.5964912280702,
    "Std. Deviation": 30.2671790942898,
    "less extreme": -19.8961069073528,
    "more extreme": -65.2968755487875,
    "pic_num": 98,
    "index": "9925"
  },
  {
    "N": 57,
    "Minimum": -94,
    "Maximum": 65,
    "Mean": -16.4736842105263,
    "Std. Deviation": 38.6897482098469,
    "less extreme": 12.5436269468589,
    "more extreme": -45.4909953679115,
    "pic_num": 99,
    "index": "9926"
  }
],1);