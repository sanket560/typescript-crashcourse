"use strict";
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['a', 'b', 'c', 'd']);
// numArray.push('hello') // Argument of type 'string' is not assignable to parameter of type 'number'.
