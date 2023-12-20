// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

let a:string | number = 1;
a='sanyam'; // no error

// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
//     // Property 'toUpperCase' does not exist on type 'number'
//   }