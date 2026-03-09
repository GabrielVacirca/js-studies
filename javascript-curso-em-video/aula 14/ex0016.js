let timeHour = document.getElementById("timeHour")
let img = document.getElementById("timeIMG")
const now = new Date();





//DADOS horas, minutos e segundos.
const hour = now.getHours();
const minute = now.getMinutes();
const seconds = now.getSeconds();

switch (true){
    case hour < 12: //bom dia
        timeHour.innerHTML = `Horário Atual: <br>${hour}:${minute}:${seconds}`
        document.body.style.backgroundColor = "#f0de3b"
        break

    case hour < 18: //boa tarde
        timeHour.innerHTML = `Horário Atual: <br>${hour}:${minute}:${seconds}`
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rgXS6kNM6aEUvurhbrR2LMdu6H6mT-P4sQ&s"
        document.body.style.backgroundColor = "#ee9536"
        break
    
    case hour > 19: //boa noite
        timeHour.innerHTML = `Horário Atual: <br>${hour}:${minute}:${seconds}`
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalxZalwmBr2y4JFv8kFu6v1cwYaGLqrfDVw&s"
        document.body.style.backgroundColor = "#4960c9"
        break
    }
