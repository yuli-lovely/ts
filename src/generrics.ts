
/**泛型函数和泛型接口 */
function log<T> (value:T):T{
    console.log(value);
    return value
}
log<string[]>(['a','b'])
log([1,2,3])
// type Log=<T>(value:T)=>T
// let myLog:Log=log
//等价
//泛型变量约束了整个接口
interface Log <T=string>{
    (value:T):T
}
let mylog:Log=log;
mylog('1')

interface length{
    length:number
}
//T extends length   泛型约束
/**
 * 函数和类可以轻松地支持多种类型，增强程序的可扩展性
 * 不必写多条函数重载，冗长的联合类型声明，增强代码可阅读性
 * 灵活控制类型之间的约束
 */
//泛型类
class Log1<T extends length>{
    run(value:T){
        console.log(value,value.length);
        return  value
    }
}
let log1=new Log1();
log1.run([1,2,36])
let log2=new Log1()
log2.run("2")


