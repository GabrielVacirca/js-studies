let example = [0, 5, 6, 8]  // criando um array/vetor

example.push(4) //adiciona um elemento no final do vetor
example.sort() //coloca os elementos do vetor em ordem crescente.

console.log(example)
console.log(`O array tem ${example.length} posições`) //mostra o tamanho do vetor
console.log(example[2])  //mostra o valor do terceiro valor do vetor

//forma tradicional de mostrar os valores de cada elemento no array, sem o código precisar ficar extenso
for (let i = 0; i < example.length; i++){
    console.log(example[i])
}

//"for" otimizado para variáveis compostas. Só funciona para variáveis compostas e objetos.
for(let i in example){  //forma correta de ler: PARA CADA POSIÇÃO EM "EXAMPLE" & "PARA CADA"
    console.log(`A posição ${i} tem o valor ${example[i]}`)
}


//método indexOF()  
example.indexOf(5)  //faz uma busca do valor definido no método que está dentro do array e devolve a chave/posição que está contido.