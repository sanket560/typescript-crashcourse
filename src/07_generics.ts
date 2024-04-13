// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['a','b','c','d'])

// numArray.push('hello') // Argument of type 'string' is not assignable to parameter of type 'number'.