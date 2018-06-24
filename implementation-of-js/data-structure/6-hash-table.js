class HashTable {
	constructor() {
		this.table = new Array(137); // 数组的长度应该是一个质数。
	}

	get(key) {
        const hashKey = this.betterHash(key);
        return this.table[hashKey];
    }

	put(key, value) {
		const hashKey = this.betterHash(key);
		this.table[hashKey] = value;
	}

	simpleHash(data) {
		let total = 0;
		for (let i = 0; i < data.length; i++) {
			total += data.charCodeAt(i);
		}
		return total % this.table.length;
	}

	betterHash(data) {
		const H = 37;
		var total = 0;
		for (var i = 0; i < data.length; ++i) {
			total += H * total + data.charCodeAt(i);
		}
		total = total % this.table.length;
		if (total < 0) {
			total += this.table.length - 1;
		}
		return parseInt(total);
	}

	distribution() {
		for (let key of Object.keys(this.table)) {
			console.log(this.table[key]);
		}
	}
}

var someNames = {'aaa': 'David', 'bbb': 'Jennifer', 'ccc': 'Donnie', 'ddd': 'Raymond', 'eee': 'Cynthia', 'fff': 'Mike', 'ggg': 'Clayton', 'hhh': 'Danny', 'kkk': 'Jonathan'};
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i]);
}
for (let key of Object.keys(someNames)){
    hTable.put(key, someNames[key]);
}
hTable.distribution();
