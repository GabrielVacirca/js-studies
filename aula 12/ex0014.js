//Condições múltiplas
//Utilizando o comando "switch(expressão)" - Comando que veio da linguagem C
//Necessário utilizar "break" no final de cada "case"
/*
    switch(expressão):
        case valor1:
            break
*/

let now = new Date()
let day = now.getDay()
/* 
    0 - Domingo
    1 - Segunda
    2 - Terça-feira
    3 - Quarta-feira
    4 - Quinta-feira
    5 - Sexta-feira
    6 - Sábado
*/

switch(day){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
         console.log('Quinta-feira')
         break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log("Dia inválido")
        break
    }
