/**
 * @description 类
 * 
 */
class Student {
    fullName:string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName +' ' + middleInitial +' ' + lastName;
    }
}
/**
 * @desc interface 接口
 * 只在两个类型内部的结构兼容，那么这两个类型就是兼容的
 */
interface Person{
    firstName: string;
    lastName: string;
}
function ge(person:Person){
    return 'hello1,' +person.firstName+' '+person.lastName
}
let user = new Student ('JJ','Five.','Cool');
document.body.innerHTML=ge(user);

