//函数的定义
function add3(x:number,y:number){
    return x+y;
}
//函数类型的定义，并没有具体的实现

let add4:(x:number,y:number)=>number;
type add5=(x:number,y:number)=>number;

interface add6{
    (x:number,y:number):number
}

//函数体
add3(1,3)

function add7(x:number,y?:number){
    return y?x+y:x
}
add7(1)
function add8(x:number,y=0,z:number,q=1,s:number){
    return x+y+q+z+s;
}
console.log(add8(1,3,4,5,3))
//剩余参数
function add9(x:number,...rest:number[]){
    return x+rest.reduce((pre:number,next:number)=>{
        return pre+next
    })
}
console.log(add9(1,2,3))

//函数重载---增强函数可读性  

function add10(...rest:number[]):number
function add10(...rest:string[]):string
function add10(...rest:any[]):any{
    let first=rest[0];
    if(typeof first==='number'){
        return rest.reduce((x:number,y:number)=>x+y)
    }
    if(typeof first==='string'){
        return rest.join();
    }
}

