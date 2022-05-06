/**
 * 条件类型:由条件表达式形成的一种类型
 * T extends U ? x:y
 * 如果类型T可以赋值给类型U那么结果类型就是X，否则就是Y
 */
type TypeName<T>=
    T extends string?"string":
    T extends number?'number':
    T extends boolean?'boolean':
    T extends undefined?'undefined':
    T extends Function?'Function':
    "object";
console.log()
//条件类型嵌套
// type T1=TypeName<string>
//let T2:TypeName<string[]>=['string','string']


//(A|B) extends U?X:Y
//等价于(A extends U?X:Y)|(B extends U?X:Y)
//可以做一些类型的过滤
type T3=TypeName<string|string[]>
type Diff<T,U>=T extends U?never:T

type T4=Diff<"a"|"b"|"c","a"|"e">

//多个条件的联合类型
//Diff<"a","a"|"e">|Diff<"b","a"|"e">|Diff<"c","a"|"e">
//never | "b" |"c"
//"b"|"c"
//过滤调null和undefined
type NotNull<T>=Diff<T,undefined|null>
type T5=NotNull<string|number|undefined|null>

/**
 * 内置条件类型 
 * Exclude<T,U>
 * NonNullable<T>
 * Extract<T,U>
 * returnType<T>获取函数返回值的类型
 */
type T7=ReturnType<()=>string>
type T6=Extract<"a"|"b"|"c","a"|"e">