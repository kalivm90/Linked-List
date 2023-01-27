"use strict";

var _LinkedList = require("./modules/LinkedList.js");
let list = new _LinkedList.LinkedList();
list.prepend("Jerry");
list.append("BOB");
console.log(list.find("BOB"));
console.log(list.toString());