// casting with as keyword

let c:unknown = "hello world";
console.log( c as string + " is a string")

// casting with angle bracket <>
let d:unknown = "hello world";
console.log( <string>d + " is a string")

// force casting
// let x = 'hello';
// console.log(((x as unknown) as number).length);