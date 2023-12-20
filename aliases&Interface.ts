// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

// One major difference between type aliases vs interfaces are that interfaces are open and type aliases are closed. This means you can extend an interface by declaring it a second time. // In the other case a type cannot be changed outside of its declaration.

// Aliases
// Aliases are created using the type keyword.

type name=string;
type age=number;

type details={
    namee:name;
    agee:age;
}

let person:details={
    namee:"Sanyam",
    agee:21
}

console.log(person);

// Interfaces : Interfaces are similar to type aliases, except they only apply to object types.
interface details1{
    name1:string;
    age1:number;
}

const details1:details1={
    name1:"Sanyam",
    age1:21
}

// Extending Interfaces : Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

interface details2 extends details1{
    no:string;
}

const details2:details2={
    name1:"Sanyam",
    age1:21,
    no:"1234567890"
}