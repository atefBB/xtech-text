// a helper function for getting a string letters frenquency as an object
function getFrequency(str) {
  return str.split('').reduce((prev, curr) => {
    prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
    return prev;
  }, {});
};

export function f1(a, b) {
	var aLettersFreq = getFrequency(a),
	    bLettersFreq = getFrequency(b);

	for(var aFreq in aLettersFreq) {
		for(var bFreq in bLettersFreq) {
			if(aFreq == bFreq) {
				if(bLettersFreq[bFreq] != aLettersFreq[aFreq]) {
					return bLettersFreq[bFreq] - aLettersFreq[aFreq];
				} else {
					return 0;
				}
			}
		}
	}
};

export function f2(a, b) {
	var b_occ = [];

	b.forEach(function(x, i) {
        b_occ[i] = a.filter(function(y) { 
        	return y === x; 
        }).length;
	});

	return b_occ;
};

export function f3(a) {
	var hostname_regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/gm;
	if(a.match(hostname_regex)) {
		return a.split('.').length;
	} else {
		return 0;
	}
};

export function f4(cb) {
	this.isCalled = true;
   
	setInterval(function() {
    	if(this.isCalled) {
    		cb();
    	}
    }, 300);
};

f4.prototype.isCalled = false;