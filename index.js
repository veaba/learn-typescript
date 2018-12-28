"use strict";
function ge(person) {
    return 'hello,' + person.toString();
}
var user = { fristName: 'Jo', lastName: 'gol' };
document.body.innerHTML = ge(user);
                                                  