class Set {
    constructor() {
        this.dataStore = [];
    }

    add(element) {
        const findIndex = this.dataStore.indexOf(element);
        if (findIndex < 0) {
            this.dataStore.push(element);
            return true;
        } else {
            return false;
        }
    }

    remove(element) {
        const findIndex = this.dataStore.indexOf(element);
        if (findIndex < 0) {
            return false;
        } else {
            this.dataStore.splice(findIndex, 1);
            return true;
        }
    }
}