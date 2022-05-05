//原始类型
let bool: boolean = true;
let num: number = 1;
let str: string = "1";
//数组
let arr1: number[] = [1, 2, 4];
let arr2: Array<number | string> = [1, 2, 3, "4"];
//元组
let tuple:[number,string,string]=[1,'2','3']
console.log(tuple[0])
//函数
let add=(x:number,y:number)=>x+y
let compite:(x:number,y:number)=>number
compite=(a,b)=>a+b;
//对象
let obj:{x:number,y:number}={x:1,y:3}
//symobl
let s1:symbol=Symbol();
let s2=Symbol();
console.log(s1===s2);
//undefined,null
let un:undefined=undefined;
let nu:null=null;
//void(没有返回值)
let noreturn=()=>{}
//any
let x:any=2;
x='33'
//never(绝对没有返回值类型)
let error=()=>{
    throw new Error('error');
}
let endLess=()=>{
    while(true){}
}
