class MyClass{
   constructor(p1, p2){
       this.property = p1
       this.property2 = p2
       this.method = () => {
           //soy un método
       }
   } 
}

const instance = new MyClass(4, 2)
console.log(instance)