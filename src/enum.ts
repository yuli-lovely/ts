//数字枚举（编译后反相映射）
enum Role{
    Report=1,
    developer,
    main,
    owner,
    Guest
}
console.log(Role)
console.log(Role.Guest)
//字符串枚举（编译后映射）
enum message{
    sucess='chenggong',
    fail='失败'
}
//异构枚举


//枚举成员
enum Char{
    a,
    b=Char.a,
    c=1+3,
    d=Math.random(),
    e='123'.length
}
console.log(Char)
//常量枚举(编译后无)
const enum Month{
    feb
}

//枚举类型
enum E{a,b}
enum F{a=0,b=3}
enum G{a='a22',b='b33'}
let e:E=3
let f:F=3
// e===f
let e1:E.a
let e2:E.b

interface List{
    readonly id:number,
    name:string,
    [x:string]:any;//---断言
    age?:number//这个属性可有可没有

}
interface Result{
    data:List[]
}
function render(result:Result){
    result.data.forEach((value)=>{
        console.log(value.id,value.name)
        if(value.age){
            console.log(value.age)
        }
        // value.id=12//只读不可以改
    })
}
let result={
    data:[
        {id:1,name:'A',sex:'Male'},
        {id:2,name:'B'}
    ]
}
// <Result>---断言
render(<Result>{
    data:[
        {id:1,name:'A',sex:'Male'},
        {id:2,name:'B'}
    ]
})

//用数字索引
interface StringArray{
    [index:number]:string
}
let char:StringArray=['A','B'];
//用字符串索引
interface Names{
    [x:string]:string
    //[z:number]:number
    [z:number]:string   //为了兼容string
}
