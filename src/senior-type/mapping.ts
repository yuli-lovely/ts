/**
 * 映射类型
 */
interface ObjMapping{
    a:number,
    b:number,
    c:number
}
//把所有变量变成只读的
//ts内置的泛型接口
//[P in keyof T]: T[P];
/**
 * Readonly是一个（可索引类型的）泛型接口
 * [P in keyof T]-索引签名
 * keyof T 索引类型的查询操作符，表示索引类型T的联合查询类型
 * P in --相当于执行了一次for in 操作，把变量P依次的绑定到所有的属性上
 * P[T] 属性P所指的所有T类型
 */
type ReadOnlyObj=Readonly<ObjMapping>
/**
 * 可选类型
 */
type PartialObj=Partial<ObjMapping>
/**
 * 抽取子集
 */
type PickObj=Pick<ObjMapping,'a'|'b'>
/**
 * 非同态类型
 */
type RecordObj=Record<'x'|'y'|'z',ObjMapping>

