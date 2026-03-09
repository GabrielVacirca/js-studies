let now = new Date()
let hour = now.getHours() //Método que pega a hora ou outros tipos de dados.
if (hora < 12){
    console.log('Bom dia!')
}
else if (hora > 12 && hora <= 18 ){
    console.log('Boa tarde!')
}else {
    console.log('Boa noite!')
}