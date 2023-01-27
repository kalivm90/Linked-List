"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = void 0;
class Node {
  constructor(name, next = null) {
    this.name = name;
    this.next = next;
  }
  value(name) {
    this.name = name;
  }
}
exports.Node = Node;
;