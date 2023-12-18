const n:string[]=[];
n.push('sanyam');
console.log(n);
// n.push(89); // error

// ReadonlyArray
const j:readonly string[]=['sanyam'];
// j.push('sanyam'); // error


// TypeScript can infer the type of an array if it has values.
const number=[1,2,3,4,5];
number.push(6); 
// number.push('sanyam'); // error


