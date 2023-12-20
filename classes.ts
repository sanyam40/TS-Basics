class Person{
    name:string;
}

const person=new Person();
person.name="sanyam";

// Members visibility
// public, private, protected

class details{
    private name:string;
    private age:number;
    private readonly address:string;

    public constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address;
    }

    public getName():string{
        return this.name;
    }

    public getAge():number{
        return this.age;
    }
}

// Extends
class Rectange {
    private length:number;
    private width:number;

    public constructor(length:number,width:number){
        this.length=length;
        this.width=width;
    }

    public getArea():number{
        return this.length*this.width;
    }
}

class square extends Rectange{
    public constructor(length:number){
        super(length,length);
    }

    // @override
    public override getArea():number{
        return super.getArea();
    }
}

// abstract class
abstract class Person1{
    public name:string;

    public constructor(name:string){
        this.name=name;
    }

    public display():void{
        console.log(this.name);
    }

    abstract find(string: any):Person1;
}

class Employee extends Person1{
    empCode:number;

    public constructor(name:string,empCode:number){
        super(name);
        this.empCode=empCode;
    }

    public find(name:string):Person1{
        return new Employee(name,1);
    }
}
