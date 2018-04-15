// Receiver configuration for pavlova dispatcher
// Copyright 2016-2017 Pierre Ynard
// Licensed under GPLv3+

var receivers = {
	// Each supported area is defined by a short code that will be
	// matched against the URL (e.g. "#r/4625" will be dispatched
	// to a receiver in area "r" on 4625 kHz); and by a list of
	// receiver URLs, sorted by preference with the best one at the
	// top (which should be based on location, antenna, reception
	// quality...).
	area: {
		// All listed here are KiwiSDR instances
		a: [ // Asia, transmitted from Far East
			'http://szsdr.ddns.net:8073/', // China
			'http://nsk.swl.su:8073/', // Novosibirsk, Russia
			'http://126.80.167.175:8073/', // Japan
			'http://hbsdr.proxy.kiwisdr.com:8073/', // China
			'http://msk.swl.su:8073/', // Moscow, Russia
		],
		m: [ // Mediterranean sea / Middle East
			'http://sv1btl.no-ip.org:8073/', // Athens, Greece
			'http://sdr.telcosol.gr:8073/', // Western Greece
			'http://kiwisdr.briata.org:8073/', // Northern Italy
		],
		n: [ // North America, transmitted from Cuba
			'http://64.136.200.36:8073/', // Kansas
			'http://ka7u.no-ip.org:8073/', // Idaho
			'http://w5uxh-kiwi.dyndns.org:8073/', // New Mexico
			'http://ranch-pt.no-ip.org:8073/', // Texas
			'http://ka7u.no-ip.org:8074/', // Idaho
			'http://71.200.243.35:8073/', // Southwest Florida
		],
		p: [ // Pacific
			'http://126.80.167.175:8073/', // Japan
			'http://222.7.151.84:8073/', // Japan
			'http://103.2.34.7:8073/', // Japan
			'http://wa6our.ddns.net:8073/', // Seattle, WA
			'http://kiwisdr.ece.uvic.ca:8073/', // Victoria, BC
			'http://119.224.45.205:8073/', // New Zealand
			'http://rjdevlin47.sytes.net:8073/', // Hawaii
		],
	},
	timeout: 5000, // Timeout when probing receivers, in milliseconds
};
