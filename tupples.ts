// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the letrect
// tuple=['sanyam',true]; // error

const ourReadonlyTuple: readonly [number, boolean, string] = [1, true, 'three'];

// Named Tuples : Named tuples allow us to provide context for our values at each index.
const graph: [x: number, y: number] = [55.2, 41.3];