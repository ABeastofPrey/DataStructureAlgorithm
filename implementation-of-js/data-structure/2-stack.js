class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    get Length() { return this.top; }

    push(element) { this.dataStore[this.top++] = element; }
    
    pop() {
        --this.top;
        return this.dataStore.pop();
    }

    peek() { return this.dataStore[this.top - 1]; }

    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.top = 0;
    }
}

var s = new Stack();
var print = console.log;
s.push("David");
s.push("Raymond");
s.push("Bryan");
print("length: " + s.Length);
print(s.pop())
print("length: " + s.Length);
print(s.peek());
var popped = s.pop();
print("The popped element is: " + popped);
print(s.peek());
s.push("Cynthia");
print(s.peek());
s.clear();
print("length: " + s.Length);
print(s.peek());
s.push("Clayton");
print(s.peek());