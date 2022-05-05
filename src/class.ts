class Dog{
    constructor(name:string){
        this.name=name//private既不能被实力话，也不能继承
    //protected:只能被继承，不能实力化
    }
    
    name:string //ts中必须有初始值，或者在构造函数有志向
    run(){}
    private pri(){}// 实力和继承都不可以访问
    protected pro(){}//只能在类和子类中访问，不能在类的实例中访问
    readonly legs:number=4
    static food:string='bones'//只能通过类名调用
}
//类成员的属性都是实例属性，而不是原型属性，类成员的方法都是原型方法（在原型上）
console.log(Dog.prototype)
let dog=new Dog('wang')
console.log(dog.name);
//dog.pro()
console.log(Dog.food)
//派生-super
class husky extends Dog{
    constructor(name:string,public color:string){// 修饰符：变成实例属性
        super(name);
        this.color=color
        this.pro()
        this.legs
    }
    // color:string
}

//抽象类(只能被继承，不能实例)
abstract class Animal{
    //  sleep():void{}
     eat(){
         console.log('eat')
     }
     //抽象方法，没有具体返回
     abstract sleep():void
}
//let a=new Animal()
class Dogs extends Animal{
    constructor(name:string){
        super()
        this.name=name//private既不能被实力话，也不能继承
    //protected:只能被继承，不能实力化
    }
    name:string //ts中必须有初始值，或者在构造函数有志向
    run(){}
    sleep(): void {
        console.log('dog sleep')
    }
}
let dogs=new Dogs('wwww');
dogs.eat()
//实现多态
class Cat extends Animal{
    sleep(){
        console.log('Cat sleep')
    }
}
let cat=new Cat();
let animals:Animal[]=[dogs,cat]

animals.forEach(i=>{
    i.sleep()
})


//特殊的this
class workFlow{
    step1(){
        console.log('step1')
        return this;
    }
    step2(){
        console.log('step2')
        return this;
    }
}
//可以通过 this实现链式调用
let wk=new workFlow().step1().step2();

class MyFlow extends workFlow{
    next(){
        console.log('next')
        return this
    }
}
//保持了子类和父类接口调用的连贯性
new MyFlow().next().step1().next().step2();
