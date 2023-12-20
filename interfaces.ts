interface Name{
    getArea(a:string,b:string):string;
}

// A class can implement multiple interfaces
class Personn implements Name{

    getArea(a:string,b:string):string{
        return a+b;
    }
    
}

const personn=new Personn();
console.log(personn.getArea("sanyam","narang"));