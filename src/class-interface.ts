
//类和接口的关系
interface Human{
    name:string;
    eat():void
}
//类实现接口时，必须实现接口中的所有属性和方法
//接口不能约束私有成员，接口只能约束类的共有成员
class Asian implements Human{
    constructor(name:string){
        this.name=name;
    }
    name:string
    eat(){}
    sleep(){}
}
//一个接口可以定义多个接口
interface Man extends Human{
    run():void
}
interface Child{
    cry():void
}
//一个接口可以继承多个接口
interface Boy extends Man,Child{

}
let boy:Boy={
    name:'',
    run(){},
    eat(){},
    cry(){ }
}

// 一个接口还可以继承多个类
class Auto{
    state=1
}
interface autoInterface extends Auto{

}
class C implements autoInterface{
    state=1
}
class Bus extends Auto implements autoInterface{

}
