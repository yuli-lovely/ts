/**
 * 索引类型 @2022.05.06
 */
let objss={
    a:1,
    b:2,
    c:3
}
function getValues<T,K extends keyof T>(obj:T,keys:K[]){
    return keys.map((key)=>obj[key])
}
console.log(getValues(objss,['a','b']))
//
//console.log(getValues(objs,['e','f']))

//keyof T
interface ObjIndexing{
    a:number,
    b:string
}
//key变成a和b的联合类型
let key:keyof ObjIndexing

//T[K]-对象属性k的t类型
let valuesss:ObjIndexing['a']
//泛型约束
// T extends U

//改造getValue