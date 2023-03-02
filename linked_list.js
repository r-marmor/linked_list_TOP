class LinkedList {
    constructor(head = null)  {
        this.head = head;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        this.length++;

        // Case there's no node yet
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
        // checks if there's at least 1 node
        if (this.head == null) return null ;
        else {
            let pointer = this.head;
            while (pointer.nextNode != null) {
            pointer = pointer.nextNode;
            }
            return pointer;
        }
    }

    at(index) {
        // checks if the index is correct
        if (index < 0 || index > this.length - 1) return null;
        
        // error msg if there is no node in the list
        if (this.head == null) return null;
            else {
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
                let pointer = this.head;

                for (let index = 0; index < this.length; index++) {
                    if (pointer.value == value) return true;
                    pointer = pointer.nextNode;
                }
                return false; 
    }

    find(value) {
        let pointer = this.head;

        for (let index = 0; index < this.length; index++) {
            if (pointer.value == value) return index;
            pointer = pointer.nextNode;
        }
        return null;
    }

    toString() {
            // Case there's no node
            if (this.head == null) return null;

            let pointer = this.head;
            let result = "";

            for (let i = 0; i < this.length; i++) {
                result += "(" + pointer.value + ") -> ";
                pointer = pointer.nextNode;
            }
            return result += "null";
    }

}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let myLinkedList = new LinkedList();



// myLinkedList.append(2);
// myLinkedList.prepend("HEAD");
// myLinkedList.append(3);
// myLinkedList.append(4);
// myLinkedList.append("POP ME");
// console.log(myLinkedList.toString());
// myLinkedList.pop();
// myLinkedList.append("TAIL");
// console.log(myLinkedList.toString());

// console.log(myLinkedList.listHead());
// console.log(myLinkedList.find(4));