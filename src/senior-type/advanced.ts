/**
 * 交叉类型和联合类型
 * 交叉类型:比较适合对象的混入
 * 联合类型:不确定类型比较适用
 */
interface DogInterface{
    run():void
}
interface CatInterface{
    jump():void
}
//交叉类型 取并集
let pet:DogInterface&CatInterface={
    run(){},
    jump(){}
}
//联合类型
let a:Number|string='a'
let b:'a'|'b'|'c'//字面量联合类型
//对象联合类型(取交集)
class Dogss implements DogInterface{
    run(){}
    eat(){}
    leg:number=4
}
class Catss implements CatInterface{
    jump(){
        
    }
    eat(){}
    leg:number=3

}
enum Master{Boy,Girl}
function getPet(master:Master){
    let pet=master==Master.Boy?new Dogss():new Catss()
    pet.eat()
    pet.leg
}


interface Square{
    kind:'square';
    size:number,
}
interface Rectangle{
    kind:'rectangle';
    width:number,
    heigth:number
}
interface Circle{
    kind:'circle';
    r:number,
}
//联合类型
type Shape=Square|Rectangle|Circle
function area(shape:Shape){
    switch(shape.kind){
        case 'square':
            return shape.size*shape.size
        case 'rectangle':
            return shape.heigth*shape.width
        case 'circle':
            return Math.PI*shape.r **2
        default:
            //检查s分支是不是有遗漏，有遗漏打印错误
            return ((e:never)=>{throw new Error(e)})(shape)
    }
}
//打印undefined
console.log(area({kind:'circle',r:1}))