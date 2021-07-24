// Receiver configuration for pavlova dispatcher
// Copyright 2016-2021 Pierre Ynard
// Licensed under GPLv3+

var receivers = {
	// Each supported area is defined by a short code that will be
	// matched against the URL (e.g. "#r/4625" will be dispatched
	// to a receiver in area "r" on 4625 kHz); and by a list of
	// receiver URLs, sorted by preference with the best one at the
	// top (which should be based on location, antenna, reception
	// quality...).
	area: {
		// All listed here are hams.live instances
		cm: [
			'http://hams.live/k/cmb/'
			'http://hams.live/k/cmd/'
			'http://hams.live/k/cme/'
			'http://hams.live/k/cmf/'
			'http://hams.live/k/cmj/'
		],
		cn: [
			'http://hams.live/k/cna/'
			'http://hams.live/k/cnc/'
			'http://hams.live/k/cnk/'
		],
		dm: [
			'http://hams.live/k/dma/''
			'http://hams.live/k/dmc'
			'http://hams.live/k/dmf/''
		],
		dn: [
			'http://hams.live/k/dna/'
			'http://hams.live/k/dnb/'
			'http://hams.live/k/dnc/'
			'http://hams.live/k/dnd/'
			'http://hams.live/k/dne/'
			'http://hams.live/k/dng/'
			'http://hams.live/k/dnh/'
			'http://hams.live/k/dni/'
		],
		do: [
			'http://hams.live/k/doa/'
			'http://hams.live/k/dob/'
			'http://hams.live/k/doc/'
			'http://hams.live/k/dod/'
			'http://hams.live/k/doe/'
			'http://hams.live/k/dog/'
		],
		el: [
			'http://hams.live/k/ela/'
			'http://hams.live/k/elb/'
			'http://hams.live/k/elf/'
			'http://hams.live/k/elg/'
		],
		em: [
			'http://hams.live/k/emb/'
			'http://hams.live/k/emh/'
			'http://hams.live/k/emj/'
			'http://hams.live/k/eml/'
			'http://hams.live/k/emo/'
			'http://hams.live/k/emp/'
			'http://hams.live/k/emv/'
		],
		en: [
			'http://hams.live/k/ena/'
			'http://hams.live/k/enc/'
			'http://hams.live/k/enf/'
			'http://hams.live/k/eng/'
			'http://hams.live/k/enm/'
			'http://hams.live/k/eno/'
			'http://hams.live/k/enr/'
		],
		fm: [
			'http://hams.live/k/fmb/'
			'http://hams.live/k/fmj/'
			'http://hams.live/k/fmk/'
			'http://hams.live/k/fml/'
			'http://hams.live/k/fmt/'
			'http://hams.live/k/fmu/'
			'http://hams.live/k/fmv/'
			'http://hams.live/k/fmw/'
			'http://hams.live/k/fmx/'
			'http://hams.live/k/fmy/'
		],
		fn: [
			'http://hams.live/k/fne/'
			'http://hams.live/k/fnf/'
			'http://hams.live/k/fng/'
			'http://hams.live/k/fnh/'
			'http://hams.live/k/fnl/'
			'http://hams.live/k/fnp/'
			'http://hams.live/k/fnq/'
			'http://hams.live/k/fnr/'
			'http://hams.live/k/fns/'
			'http://hams.live/k/fnw/'
			'http://hams.live/k/fnx/'
		],
		gg: [
			'http://hams.live/k/gga/'
			'http://hams.live/k/ggc/'
			'http://hams.live/k/ggd/'
		],
		io: [
			'http://hams.live/k/ioe/'
			'http://hams.live/k/iog/'
			'http://hams.live/k/ioh/'
			'http://hams.live/k/ioj/'
			'http://hams.live/k/ion/'
			'http://hams.live/k/ioo/'
			'http://hams.live/k/iop/'
			'http://hams.live/k/ioq/'
			'http://hams.live/k/ior/'
		],
		jn: [
			'http://hams.live/k/jna/'
			'http://hams.live/k/jnh/'
			'http://hams.live/k/jni/'
			'http://hams.live/k/jnj/'
			'http://hams.live/k/jnk/'
			'http://hams.live/k/jnaa/'
			'http://hams.live/k/jnab/'
			'http://hams.live/k/jnac/'
		],
		jo: [
			'http://hams.live/k/jog/'
			'http://hams.live/k/joh/'
			'http://hams.live/k/joi/'
			'http://hams.live/k/joj/'
			'http://hams.live/k/jov/'
			'http://hams.live/k/joac/'
			'http://hams.live/k/joad/'
			'http://hams.live/k/jocf/'
			'http://hams.live/k/jocg/'
			'http://hams.live/k/joch/'
		],
		jp: [
			'http://hams.live/k/jpc/'
			'http://hams.live/k/jpd/'
			'http://hams.live/k/jpe/'
			'http://hams.live/k/jpf/'
			'http://hams.live/k/jph/'
		],
		kn: [
			'http://hams.live/k/kna/'
			'http://hams.live/k/knb/'
			'http://hams.live/k/knd/'
			'http://hams.live/k/kne/'
			'http://hams.live/k/knf/'
		],
		kp: [
			'http://hams.live/k/kpb/'
			'http://hams.live/k/kpc/'
			'http://hams.live/k/kpf/'
			'http://hams.live/k/kpj/'
			'http://hams.live/k/kpk/'
			'http://hams.live/k/kpp/'
		],
		ol: [
			'http://hams.live/k/ola/'
			'http://hams.live/k/olb/'
			'http://hams.live/k/olc/'
			'http://hams.live/k/old/'
		],
		pm: [
			'http://hams.live/k/pma/'
			'http://hams.live/k/pmb/'
			'http://hams.live/k/pme/'
			'http://hams.live/k/pmg/'
			'http://hams.live/k/pmm/'
			'http://hams.live/k/pmn/'
			'http://hams.live/k/pmq/'
			'http://hams.live/k/pmr/'
		],
		qf: [
			'http://hams.live/k/qfb/'
			'http://hams.live/k/qfc/'
			'http://hams.live/k/qfd/'
			'http://hams.live/k/qfe/'
			'http://hams.live/k/qff/'
			'http://hams.live/k/qfg/'
			'http://hams.live/k/qfh/'
			'http://hams.live/k/qfo/'
			'http://hams.live/k/qfp/'
		],
		qg: [
			'http://hams.live/k/qga/'
			'http://hams.live/k/qgb/'
		],
		re: [
			'http://hams.live/k/rea/'
			'http://hams.live/k/reb/'
			'http://hams.live/k/rec/'
		]
		
	},
	timeout: 5000, // Timeout when probing receivers, in milliseconds
};
