/**
 * @desc 泛型
 * @url https://www.tslang.cn/docs/handbook/generics.html
 * 
 */

// 不用泛型
function identity(arg: number): number {
    return arg
}

// 使用any定义函数
function identityAny(arg: any): any {
    return arg
}

// 需要返回值类型和传入参数类型是相同的，使用：类型变量，是一种特殊变量，只用于类型而不是值

function identityT<T>(arg: T): T {
    return arg
}

const x = identityT<string>("wahahahah")

console.log('xxxx=>', x)