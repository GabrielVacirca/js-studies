


function verifyAge() {
    const ageYear = document.getElementById("textAge");
    const age = Number(ageYear.value)
    const manSex = document.getElementById("manChoose");
    const womanSex = document.getElementById("womanChoose");

    let sex = null;


    /*Neste bloco de código abaixo, está sendo realizado a verificaçao da caixa de seleção no HTML. Com finalidade para saber se o usuário selecinou homem ou mulher*/
    if (manSex.checked) {
        sex = manSex.value;
    } else if (womanSex.checked) {
        sex = womanSex.value;
    }

    console.log(sex); // debug

    const dataNow = new Date(); //cria um objeto com a data e hora atuais
    const yearNow= dataNow.getFullYear(); // pegando apenas o ano
    console.log(yearNow) // debug

    const userAge = yearNow - age //calcula o ano que a pessoa nasceu
    console.log(userAge)

    const verifyResult = document.getElementById("result")
    verifyResult.innerHTML = `Você é um(a) ${sex} de ${userAge} anos.`

}   