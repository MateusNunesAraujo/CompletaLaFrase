let btnSiguiente = document.querySelector('#siguiente')
btnSiguiente.addEventListener('click',()=>{
document.querySelector('.cartel-bienvenida').classList.add('cartel-bienvenida-desactivada')
document.querySelector('.caja-frases').classList.add('caja-frases-activado')
})