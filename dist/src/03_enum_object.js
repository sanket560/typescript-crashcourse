"use strict";
// Enum
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
console.log(direction.up); // 0
console.log(direction.down); // 1
const user = {
    id: 1,
    username: "sanket",
};
// Type Assertion
let cid = 1;
let customerid = cid;
// customerid = true : Type 'boolean' is not assignable to type 'number'.
let customerid2 = cid;
