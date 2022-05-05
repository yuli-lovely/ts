let add2:(x:number,y:number)=>number //定义一个函数类型
// interface Add{
//     (x:number,y:number)
// }

type Add=(x:number,y:number)=>number //类型别名
let add1:Add=(a,b)=>a+b;

interface Lib{
    ():void,
    version:string,
    dosomeing():void
}
//单历
let lib:Lib=(()=>{}) as Lib//断言
lib.version='1.0'
lib.dosomeing=()=>{}
//工厂方法
function getLib(){
    let lib:Lib=(()=>{}) as Lib;
    lib.version='1.0'
    lib.dosomeing=()=>{}
    return lib;
}
let lib1=getLib();
lib1();
lib1.dosomeing();
let lib2=getLib();

