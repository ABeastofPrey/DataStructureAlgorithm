class Dictionary {
    constructor() {
        this.dataStore = [];
    }

    add(key, value) {
        this.dataStore[key] = value;
    }

    remove(key) {
        delete this.dataStore[key];
    }

    find(key) {
        return this.dataStore[key];
    }

    display() {
        for (let key of Object.keys(this.dataStore)) {
            console.log("%s -> %s", key, this.dataStore[key]);
        }
    }
}

var pbook = new Dictionary();
var print = console.log;
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
print("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.display();