// Enum
enum direction {
  up,
  down,
  left,
  right,
}

console.log(direction.up); // 0
console.log(direction.down); // 1

// objects

type User = {
  id: number;
  username: string;
};

const user: User = {
  id: 1,
  username: "sanket",
};

// Type Assertion

let cid: any = 1;
let customerid = <number>cid;
// customerid = true : Type 'boolean' is not assignable to type 'number'.
let customerid2 = cid as number

