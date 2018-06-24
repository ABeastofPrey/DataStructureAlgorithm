class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    find(element) { 
        let currentNode = this.head;
        while (currentNode.element !== element) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    // findPrevious(element) {
    //     let curNode = this.head;
    //     while (curNode.next !== null && curNode.next.element !== element) {
    //         curNode = curNode.next;
    //     }
    //     return curNode;
    // }

    findLast() {
        let curNode = this.head;
        while(curNode.next !== null) {
            curNode = curNode.next;
        }
        return curNode;
    }

    insert(newEle, after) { 
        const newNode = new Node(newEle);
        const curNode = this.find(after);
        newNode.next = curNode.next;
        newNode.previous = curNode;
        curNode.next = newNode;
    }

    remove(element) { 
        // const preNode = this.findPrevious(element);
        // if (preNode.next !== null) {
        //     preNode.next = preNode.next.next;
        // }
        const curNode = this.find(element);
        if (curNode.next !== null) {
            curNode.previous.next = curNode.next;
            curNode.next.previous = curNode.previous;
            curNode.next = null;
            curNode.previous = null;
        }
    }

    display() { 
        let curNode = this.head;
        while (curNode.next !== null) {
            console.log(curNode.next.element);
            curNode = curNode.next;
        }
    }

    dispReverse() {
        let curNode = this.findLast();
        while(curNode.previous !== null) {
            console.log(curNode.element);
            curNode = curNode.previous;
        }
    }
}

var cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log('******************');
cities.remove("Carlisle");
cities.display();
console.log('******************');
cities.dispReverse();