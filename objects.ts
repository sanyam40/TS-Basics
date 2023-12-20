const details:{name:string,age:number}={
    name:'Sanyam',
    age:20
};

details.name='Sanyam Narang'; // no error

// --> Withount an optional property
// const details1:{name:string,age:number}={
//     name:'Sanyam'
//     // Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }
// };

// --> With an optional property
const details1:{name:string,age?:number}={
    name:'Sanyam'
    // no error for age
};

// --> Index Signature : Index signatures can be used for objects without a defined list of properties.
const details2:{name:string,[index:string]:any}={
    name:'Sanyam',
    lastname:'Narang'
};