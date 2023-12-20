// Return Type
// The type of the value returned by the function can be explicitly defined

function add(a:number,b:number):number{
    return a+b;
}

// The type void can be used to indicate a function doesn't return any value.
function print():void{
    console.log("Hello World");
}

// Optional Parameters
function hello (a:number,b:number,c?:string):number{
    console.log(c || "Hello");
    return a+b;
}

hello(2,3);
hello(2,3,"Hi");

// default parameters
function pow(value:number,exponent:number=2):number{
    return value**exponent;
}

// Named Parameter
function divide({dividend,divisor}:{dividend:number,divisor:number}):number{
    return dividend/divisor;
}

// Rest Parameter
function addd(a:number,...rest:number[]):number{
    return a+rest.reduce((acc,val)=>acc+val,0); 
}

// type alias
// Function types can be specified separately from functions with type aliases.
type Point = {
    x:number,
    y:number
}

function printPoint(point:Point){
    console.log(point.x,point.y);
}