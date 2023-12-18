// When creating a variable, there are two main ways TypeScript assigns a type:

// 1)Explicit
// 2)Implicit

// 1)Explicit
let namee:string='sanyam';
// namee=123; // error

// 2)Implicit : Having TypeScript "guess" the type of a value is called infer.
// TypeScript will infer the type of a variable based on its value.
let no=123;
// no='sanyam'; error

// 3)Any Type : Setting any to the special type any disables type checking:
let b:any=123;
b='sanyam'; // no error

// 4) Unknown Type : The unknown type is similar to the any type, but is safer because it's not assignable to other types.
// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
let l:unknown=123;
l='sanyam'; // no error

// 5) Never Type: never effectively throws an error whenever it is defined. It is used to represent a value that will never occur.
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// 6) undefined & null : undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let y: undefined = undefined;
let z: null = null;

console.log(b);
console.log(l);
console.log(namee);