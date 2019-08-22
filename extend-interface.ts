/**
 * @desc 接口继承
 * 
 */
interface A{
    color:string
}
interface B{
    width:number
}

interface S extends A{
    age:number
}
interface X extends A,B{
    heigth:number
}

// let a=<S>{}  疑问？为什么这里是<B>{}??
// a.color="red"
// a.age=6969
// console.log(a)

// 报错
// let b:S
// b.age=99
// b.color="99"
// console.log(b)

