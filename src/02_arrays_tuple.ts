// arrays

let ids: number[] = [1,2,3,4,5]
// ids.push('hello') :Argument of type 'string' is not assignable to parameter of type 'number'.
let arr : any[] = [1,true,'hello']

// tuple

// let person: [number,string,boolean] = [1,'hello',2] :Type 'number' is not assignable to type 'boolean'.
let person2: [number,string,boolean] = [1,'hello',true]

// tuple array
let employe : [number , string][]

employe =[
    [1,'abc'],
    [2,'efg'],
    // [true,'efg'], : Type 'boolean' is not assignable to type 'number'.
    [3,'hij'],
]

// union
let product_id:string | number

product_id = 22
product_id = 'hello'
