class Queue {
    constructor() { 
        this.dataStore = [];
    }
    enqueue(element) { this.dataStore.push(element); }
    dequeue() { return this.dataStore.shift(); }
    head() { return this.dataStore[0]; }
    tail() { return this.dataStore[this.dataStore.length - 1]; }
    clear() { 
        delete this.dataStore;
        this.dataStore = [];
    }
    isEmpty() {
        return (this.dataStore.length === 0) ? true : false;
    }
}

var q = new Queue();
var print = console.log;
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
print("Front of queue: " + q.head());
print("Back of queue: " + q.tail());