export class Node {
    constructor(name, next=null) {
        this.name = name
        this.next = next
    }

    value(name) {this.name = name};
};