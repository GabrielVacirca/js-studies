document.getElementById('buttonTabuada').addEventListener('click', generateTabel)

function generateTabel(){
    let insertNum = document.getElementById('numberOne').value
    let resultArea = document.getElementById('resultArea')
    resultArea.value = '' // Limpa a textArea.

    console.log('Working')
    for(let i = 0; i <= 10; i++){
    
   
    let multiplierNum = i
    //console.log(multiplierNum)
    
    console.log('INICIANDO A MULTIPLICAÇÃO')
    let mutiplicationResult = insertNum * multiplierNum
    console.log(mutiplicationResult) 

    
    resultArea.value += `${insertNum} x ${multiplierNum} = ${mutiplicationResult}\n`
    }


}