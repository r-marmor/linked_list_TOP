class LinkedList {
    constructor(head = null)  {
        this.head = head;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        this.length++;

        // Case there's no node yet, create one at the head
        if (this.head == null) {
           this.head = newNode;
        // if there's one, append it at the end of the list
        } else {
            let pointer = this.head;
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;
            }
            pointer.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        this.length++;

        // Case there's no node yet
        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    size() {
        return this.length;
    }

    listHead() {
        return this.head;
    }

    tail() {
        if (this.head == null) {
            return "the list is empty";
        } else {
            let pointer = this.head;
            while (pointer.nextNode != null) {
            pointer = pointer.nextNode;
            }
            return pointer;
        }
    }

    at(index) {
        if (index < 0 || index > this.length - 1) return `index must be between 0 and ${this.length - 1}`;
        if (this.head == null) {
            return "the list is empty";
        } else {
            let pointer = this.head;
            for (let i = 0; i <= index; i++) {
                if (index == i) return pointer;
                pointer = pointer.nextNode;
            }
        }
    }

    pop() {
        // Case there's no node 
        if (this.head == null) return;
        // Case there's only 1 node, just remove it and return
        if (this.head.nextNode == null) {
        this.head = null;
        return;
        }
        // find the node before the tail
        let nodeBeforeTail = this.at(this.length - 2);
        nodeBeforeTail.nextNode = null;
        this.length--;
    }

    contains(value) {
        if (this.head == null) return "the list is empty";
    }

}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let myLinkedList = new LinkedList();


myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append("tail");
myLinkedList.prepend("head : prepended node");
myLinkedList.append("POP ME");

console.log(myLinkedList.tail())
myLinkedList.pop()
console.log(myLinkedList.tail())
myLinkedList.pop()
console.log(myLinkedList.tail())
myLinkedList.pop()
console.log(myLinkedList.tail())
myLinkedList.pop()
console.log(myLinkedList.tail())
myLinkedList.pop()
console.log(myLinkedList.tail())