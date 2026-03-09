document.getElementById('cntButton').addEventListener('click', countButton)

function countButton() {
    let startNumber = Number(document.getElementById('startNumber').value)
    let endNumber = Number(document.getElementById('endNumber').value)
    let passNumber = Number(document.getElementById('passNumber').value)
    
    var countResult = document.getElementById('countResult')
    countResult.classList.add('resultado') //adiciona uma classe
    
    console.log('Funcionando')
    if (startNumber === 0 || startNumber === 0 || startNumber === 0){
        countResult.innerHTML = `Preencha todos os campos` // validação para preencher os campos
        return
    }
    /*if (passNumber <= 0 ){
        countResult.innerHTML = `O número de passos não pode ser menor que zero` // validação
        return
    }*/
    if (endNumber <= startNumber){
        countResult.innerHTML = `O número final não pode ser menor do que o número do começo` //validação
        return
    }
    
    let result = ''

    while (startNumber <= endNumber)
        {
        result += startNumber + ' - '
        startNumber += passNumber
        
        }
    
 
    
    
    
    result = result.slice(0, -3) //remove o útlimo traçado
    countResult.innerHTML = `${result}`

    


    

}