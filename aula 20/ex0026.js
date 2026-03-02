let numberList = []
let numberArea = document.getElementById("numberArea")

const container = document.getElementById('container')


document.getElementById("addButton").addEventListener("click", function () {

    // Justificativa: Usamos uma função anônima dentro do addEventListener para que a ação só ocorra quando o botão for clicado, permitindo capturar o valor atual do input. Dessa forma garantimos que `addNumber` receba exatamente o número digitado, sem receber o objeto do evento (`PointerEvent`).

    let number = Number(document.getElementById("insertNumber").value)

    addNumber(number)
})



//FUNÇÕES

function addNumber(number) {
    console.log("Botão acionado!")
    
    
    container.innerHTML = "" //LIMPA O CONTAINER QUE MOSTRA O RESULTADO
    

    //CONDIÇÃO 
    if (numberList.indexOf(number) !== -1) { //Executa a condição utilizando a propiedade indexOF para verificar se o número digitado já foi adicionado.
        window.alert("O número digitado já está contido na lista. Por favor, tente outro número.")
    } else {



        numberList.push(number)
        console.log(`O número ${number} foi adicionado a lista `)
        console.log(numberList)



        numberArea.innerHTML += `o número ${number} foi adicionado.\n`

    }

}

document.getElementById("finishButton").addEventListener("click", finish)

function finish() {

    //CONDIÇÃO
    if (numberList.length <= 0) { //Executa uma condição que verifica se há números adicionados na lista. Utilizei  verificando pelo tamanho da lista, senão houver números, dispara o alerta.
        window.alert("Nenhum valor foi adicionado!")
    } else {

        //OPERAÇÕES
        let listSize = numberList.length
        console.log(`Ao todo, a lista possui ${listSize} números cadastrados.`)

        let highestValue = Math.max(...numberList)
        console.log(`O maior valor informado foi ${highestValue}`)

        let smallestValue = Math.min(...numberList)
        console.log(`O menor valor informado foi ${smallestValue}`)

        let total = 0
        for (let i of numberList) {
            total += i
        }

        console.log(`Somando todos os valores, temos ${total}`)

        let mediaValue = total / numberList.length
        console.log(`A média dos valores é ${mediaValue}`)


        //EXIBIÇÃO
        const finishResult = document.createElement("p")
        finishResult.innerHTML = `
        Ao todo, a lista possui ${listSize} números cadastrados<br>
        O maior valor informado foi ${highestValue}<br>
        O menor valor informado foi ${smallestValue}<br>
        Somando todos os valores, temos ${total}<br>
        A média dos valores é ${mediaValue}`
        container.appendChild(finishResult)

        numberList = [] //LIMPA A LISTA APÓS FINALIZAR
        numberArea.innerHTML = "" // LIMPA O TEXTAREA APÓS FINALIZAR
    }
}


//DIFERENÇA ENTRE FOR IN E FOR OF

/*

"FOR OF" ---> PERCORRE OS VALORES DO ARRAY
"FOR IN" ---> PERCORRE O ÍNDICE(KEY)

Para percorrer uma lista de números ou elementos de array ---> for...of
Para percorrer as propriedades de um objeto ---> for...in



*/