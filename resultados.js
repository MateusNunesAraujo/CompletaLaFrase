document.addEventListener('DOMContentLoaded',()=>{
    let frases = document.querySelectorAll(".frase")
    const respuestasCorrectas = [1,3,1,2,3,1,1];
    let puntaje = 0

    document.querySelector('.spinner').classList.add('spinner-activacion')
    setTimeout(() => {
        document.querySelector('.spinner').classList.remove('spinner-activacion')
        document.querySelector('main').classList.add('main-activacion')
    }, 5000);

    let resultadosUsuario = JSON.parse(localStorage.getItem("resultadosUsuario"))
   respuestasCorrectas.forEach((element, index) => {
    if(resultadosUsuario[index] == element){
        frases[index].children[1].textContent = "Correcto"
        frases[index].children[1].style.color = "#2ecc71"
        puntaje++
    }else{
        frases[index].children[1].textContent = "Incorrecto"
        frases[index].children[1].style.color = "#e74c3c"
    
    }
})

document.querySelector(".puntaje").textContent = `${puntaje}/7`


})