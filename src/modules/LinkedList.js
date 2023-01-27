import { Node } from "./Node.js";

export class LinkedList {
    constructor(head=null) {
        this.head = head
        this.length = 0;
    }

    at(index) {
        let head = this.getHead();
        if (!head) return "No nodes in list"
        let counter = 1;
        while (head.next != null) {
            if (counter === index) {
                return head 
            }
            counter += 1
            head = head.next
        }
    }

    size() {
        if (!this.getHead()) return null
        return this.length
    }

    pop() {
        let head = this.getHead();
        if (!head) return "No nodes in list"
        while (true) {
            if (head.next.next === null) {
                head.next = null
                break; 
            }
            head = head.next
        }
    }

    push(head) {
        this.head = head
    }

    prepend(name) {
        this.push(new Node(name, this.getHead()));
        this.length += 1
    }

    append(name) {
        let head = this.getHead();
        if (!head) return "No nodes in list"
        this.length += 1
        while (true) {
            if (head.next === null) {
                head.next = new Node(name)
                break;
            }
            head = head.next
        }
    }

    search(name) {
        let head = this.getHead()
        if (!head) return "No nodes in list"
        while(head.next !== null) {
            if (head.name == name) {
                return true
            }
            head = head.next
        }
        return head.name === name ? true : false;
    }

    getTail() {
        let head = this.getHead()
        if (!head) return "No nodes in list"
        while(true) {
            if (head.next === null) {
                return head 
            }
            head = head.next
        }
    }

    find(name) {
        let head = this.getHead()
        if (!head) return "No nodes in list"
        let index = 0
        while (head.next != null) {
            if (head.name === name) {
                return index 
            }
            index += 1
            head = head.next
        }
        return head.name === name ? index : null;
    }

    toString() {
        let head = this.getHead()
        if (!head) return "No nodes in list"
        let string;
        while (true) {
            string = `(${head.name}) ->`
            if (head.next === null) {
                string += ` (${head.name}) -> null`
                return string
            }
            head = head.next
        }
    }

    getHead() {
        return this.head
    }
}

// let list = new LinkedList()
// list.prepend("Jerry");
// list.append("BOB");

// console.log(list.find("BOB"));
// console.log(list.toString());