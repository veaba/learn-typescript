"use strict";
/**
 * @description 类
 *
 */
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function ge(person) {
    return 'hello1,' + person.firstName + ' ' + person.lastName;
}
var user = new Student('Ji', 'Gao.', 'Zheng1112');
document.body.innerHTML = ge(user);
