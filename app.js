const botonGrabar = document.getElementById('record_b');
const botonParar = document.getElementById('stop_b');
const palabraDicha = document.getElementById('palabra-dicha')


var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.lang = "es-ES";
recognition.continuous = true;
recognition.interimResults = false;

//RESULTADOS EN PANTALLA

const body = document.querySelector('body');
let colorGuardado;


var dibujarPantalla = function(frases){
    let color;
    
    console.log(`frase dentro de Dibujar pantalla tiene el valor de ${frases}`);
    
    color = frases;

    console.log(`antes del switch es ${color}`);

    frases = frases.trim();
    //Pintamos segun el color
    switch(frases){
        case "rojo.":
        color = "red";
        console.log(`En el switch es ${color}`);
        break;

        case "azul.":
        color = "blue";
        console.log(`En el switch es ${color}`);
        break;

        case "amarillo.":
        color = "yellow";
        console.log(`En el switch es ${color}`);
        break;

        case "verde.":
        color = "green";
        console.log(`En el switch es ${color}`);
        break;

        case "naranja.":
        color = "orange";
        console.log(`En el switch es ${color}`);
        break;        
        
        default: console.log(`No se detecta ${color}`);
        break;
    }
    console.log(`despues del switch es ${color}`);
    palabraDicha.textContent = `Haz dicho ${frases}`
    body.style.backgroundColor = color;
    body.style.backgroundColor = innerWidth;
    body.style.backgroundColor = innerHeight;
    }
   
//EVENTO

recognition.onstart = function(){
    console.log("El microfono esta funcionando");
}

var i = 0;
var results;
recognition.onresult = function(event){
    
    results = event.results;
    var frases = event.results[i][0].transcript.toLowerCase();
    dibujarPantalla(frases);
    console.log(i);
    i++;
    console.log(results);
}

botonGrabar.addEventListener("click",() =>{
    recognition.start();
});

botonParar.addEventListener("click",() =>{
    recognition.abort();
    location.reload();
    /*palabraDicha.textContent = ''
    body.style.backgroundColor = white;
    results = '';
    i = 0;*/
});