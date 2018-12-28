interface Person{
    fristName:string,
    lastName:string
}
function ge(person:Person){
    return 'hello,' +person.toString()
}
let user = {fristName:'Jo',lastName:'gol'}
document.body.innerHTML=ge(user)