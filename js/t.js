/**
 * @desc 这是一个typeScript测试demo文件,在命令行中 执行tsc t.ts 会在此目录，生产一个t.js文件
 *
 */
// interface Person3 {
//     readonly id:number;
//     name: string;
//     age?: number;//
//     [propName:string]:string|number|undefined;
// }
// let person2: Person3 = {
//     id:2333,
//     name: 'Tom',
//     aget: 'x'
// };
// person2.id=3333
/**
 * @desc 对数组声明多种数据类型
 */
// let a:Array<number|string|object>=[1,3,'2',{a:2}]
/**
 * @desc 对函数输入输出确定数据类型
 *
 */
// function sum(x:number,y:number):number|string{
//     return x+ y+''
//   }
/**
 * @desc interface定义函数
 *
 */
// interface SearchFnc{
//     //相当于 入参是两个，都是字符串，输出的是一个布尔值
//     (source:string,subString:string):boolean
// }
// let mySearch:SearchFnc
// mySearch=function(x:string,y:string){
//     return x.search(y)!==-1
// }
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join('')) || '';
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('') || '';
    }
}
var c = reverse(123);
console.log(c);
