/**
 * @desc Class #属性用法, #属性下class 之外不可访问，因为他它具有私有标识符
 * @url https://www.typescriptlang.org/docs/handbook/classes.html
 * 
 */
class A {
    #name: string
    job: string | undefined
    private money: any
    constructor(n: string, m?: any, j?: string) {
        this.#name = n
        this.job = j
        this.money = m

    }
    getName() {
        return this.#name
    }

}

const x = new A('HAHA')

console.log('xxx=>', x)     // { job: undefined, money: undefined }
console.log('yyy==>', x.getName()) // HAHA