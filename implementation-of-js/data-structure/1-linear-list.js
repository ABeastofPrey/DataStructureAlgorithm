class LinearList {
	constructor() {
		this.listSize = 0;
		this.position = 0;
		this.dataStore = [];
	}

	get Length() {
		return this.listSize;
	}

	toString() {
		return this.dataStore;
	}

	append(element) {
		this.dataStore[this.listSize++] = element;
	}

	find(element) {
		return this.dataStore.findIndex((value) => {
			return value === element;
		});
	}

	contains(element) {
		return this.dataStore.some((value) => {
			return value === element;
		});
	}

	remove(element) {
		const findIndex = this.find(element);
		return findIndex > -1
			? (() => {
					this.dataStore.splice(findIndex, 1);
					this.listSize--;
					return true;
				})()
			: false;
	}

	insert(element, after) {
		const findIndex = this.find(after);
		if (findIndex === -1) {
			return false;
		}
		this.dataStore.splice(findIndex + 1, 0, element);
		++this.listSize;
		return true;
	}

	clear() {
		delete this.dataStore;
		this.dataStore = [];
		this.listSize = 0;
	}

	front() {
		this.position = 0;
    }
    
	end() {
		this.position = this.listSize - 1;
    }
    
	prev() {
		if (this.position > 0) {
			--this.position;
		}
    }
    
	next() {
		if (this.position < this.listSize) {
			++this.position;
		}
    }
    
	currPos() {
		return this.position;
    }
    
	moveTo(position) {
		this.position = position;
    }
    
	getElement() {
		return this.dataStore[this.position];
	}
}

var names = new LinearList();
var print = console.log;
names.append('Cynthia');
names.append('Raymond');
names.append('Barbara');
print(names.toString());
print(names.Length);
names.remove('Raymond');
print(names.toString());
print(names.Length);
names.insert('Raymond', 'Barbara');
print(names.toString());
print(names.Length);
print('*****************');
for(names.front(); names.currPos() < names.Length; names.next()) {
    print(names.getElement());
}
