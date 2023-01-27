import { LinkedList } from "./modules/LinkedList.js";

let list = new LinkedList()
list.prepend("Jerry");
list.append("BOB");

console.log(list.find("BOB"));
console.log(list.toString());