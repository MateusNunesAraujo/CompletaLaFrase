localStorage.clear()
let btnSiguiente = document.querySelector('#siguiente')
let btnContinuar = document.querySelector('#continuar')
let valoresSeleccionados = [];
let veces = 2
btnSiguiente.addEventListener('click', () => {
    document.querySelector('.cartel-bienvenida').classList.add('cartel-bienvenida-desactivada')
    document.querySelector('.caja-frases').classList.add('caja-frases-activado')
})

function verificarSeleccion() {
    // Obtener todas las secciones de frases
    let secciones = document.querySelectorAll('.frase');

    // Variable para seguir el estado de la verificación
    let seleccionValida = true;

    // Iterar sobre todas las secciones
    secciones.forEach((seccion, index) => {
        // Obtener todos los inputs de tipo radio dentro de esta sección
        let inputsRadio = seccion.querySelectorAll('input[type="radio"]');
        
        // Verificar si al menos uno de los inputs está seleccionado
        let algunoSeleccionado = Array.from(inputsRadio).some(input => input.checked);
        
        // Si ninguno está seleccionado, actualizar el estado de la verificación y mostrar un mensaje de error
        if (!algunoSeleccionado) {
            seleccionValida = false;
        }
    });

    // Devolver el resultado de la verificación
    return seleccionValida;
}


// Crear el section
let section = document.createElement('section');
section.classList.add('frase', 'nro-2');

// Crear el h3 y agregar texto
let h3 = document.createElement('h3');
h3.textContent = '';

// Crear el div.radio-input-wrapper.palabras
let divWrapper = document.createElement('div');
divWrapper.classList.add('radio-input-wrapper', 'palabras');

// Crear las etiquetas label con inputs dentro
let labels = [];
let palabras = ['', '', ''];
palabras.forEach((palabra, index) => {
    let label = document.createElement('label');
    label.classList.add('label');

    let input = document.createElement('input');
    input.setAttribute('value', `${index + 1}`);
    input.setAttribute('name', 'value-radio');
    input.setAttribute('id', `value-${index + 1}`);
    input.classList.add('radio-input');
    input.setAttribute('type', 'radio');

    let radioDesign = document.createElement('div');
    radioDesign.classList.add('radio-design');

    let labelText = document.createElement('div');
    labelText.classList.add('label-text');
    labelText.textContent = palabra;

    label.appendChild(input);
    label.appendChild(radioDesign);
    label.appendChild(labelText);

    labels.push(label);
});

// Agregar las etiquetas label al divWrapper
labels.forEach(label => {
    divWrapper.appendChild(label);
});

// Agregar el h3 y el divWrapper al section
section.appendChild(h3);
section.appendChild(divWrapper);

// Ahora puedes agregar el section al documento HTML donde desees.
// Por ejemplo:
// document.body.appendChild(section);


btnContinuar.addEventListener('click', (e) => {
    if(veces > 7){
    window.location.href = "resultados.html"
    
    }
    let frase = document.querySelector('.frase');
    let seleccionValida = verificarSeleccion();
    if (seleccionValida) {
        // Array para almacenar los valores de los inputs seleccionados
       

        // Obtener todos los inputs de tipo radio dentro de la sección actual
        let inputsRadio = frase.querySelectorAll('input[type="radio"]');

        // Iterar sobre los inputs radio para verificar cuáles están seleccionados y obtener sus valores
        inputsRadio.forEach(input => {
            if (input.checked) {
                valoresSeleccionados.push(input.value);
                localStorage.setItem("resultadosUsuario",JSON.stringify(valoresSeleccionados))
            }
        });
    }
   
   
    if (seleccionValida) {
        switch (veces) {
            case 2:
                h3.textContent = '2. Sin embargo, actualmente las energías renovables siguen siendo más caras que las energías ____________';
                palabras = ['Energía Solar', 'Energía hidroeléctrica', 'Energía eólica'];
                document.querySelector('.caja-frases').replaceChild(section, frase)
                break;
            case 3:
                h3.textContent = '3. Entre las fuentes no contaminantes encontramos el viento y el calor y esto lo genera la energía __________';
                palabras = ['La energía solar y la energía hidráulica', 'La energía mareomotriz y la energía geotérmica', 'La energía eólica y la energía geotérmica'];
                document.querySelector('.caja-frases').replaceChild(section, frase)
                break;
            case 4:
                h3.textContent = '4. Las energías renovables contaminantes son aquellas que proceden de la __________________';
                palabras = ['La energía undimotriz', 'Biomasa o matería orgánica', 'Energía nuclear'];
                document.querySelector('.caja-frases').replaceChild(section, frase)
                break;
            case 5:
                h3.textContent = '5. En algunos paises la energía ___________ ha superado a otras fuentes de energía en términos de capacidad instalada y producción de electricidad';
                palabras = ['Energía solar', 'Energía hidroelectrica', 'Energía eólica'];
                document.querySelector('.caja-frases').replaceChild(section, frase)
                break;
            case 6:
                h3.textContent = '6. La energía convencional es la que no se autogeneran como la energía ____________';
                palabras = ['Energía renovable', 'Combustible fósil', 'Energía solar y energía eólica'];
                document.querySelector('.caja-frases').replaceChild(section, frase)
                break;
            case 7:
                h3.textContent = '7. El gas natural en este caso se trata de un _____________ resultante de la mezcla de gases de origen natural.';
                palabras = ['Hidrocarburo', 'Roca sedimentada', 'Compuesto orgranico'];
                document.querySelector('.caja-frases').replaceChild(section, frase)
                break;
            // Agrega más casos según sea necesario
            default:
                break;
        }
    
        // Actualiza el texto de las palabras dentro de los label existentes
        labels.forEach((label, index) => {
            let labelText = label.querySelector('.label-text');
            labelText.textContent = palabras[index];
        });
    
        veces++;
    }else{
        swal("¡Sección sin responder!", "Debe seleccionar una opción antes de avanzar", "warning");
    }
   

    // Puedes eliminar esta línea si ya has agregado la sección inicialmente
    // document.querySelector('.caja-frases').appendChild(section);
});

