
//Mudar a cor do Background da calculadora
var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}


// Indentifica e exibe o código de uma tecla que foi apertada no teclado

    window.document.querySelector('body').addEventListener('keydown', function(event) {

    window.alert('O código da tecla pressionada é :' + event.keyCode)
 
 });

/* Criar uma condição que valide as 16 teclas da claculadora que podem ser acionadas pelo teclado - condição "while" */



/* Captura o que for digitado no display da calculadora */
var valorA = window.document.activeElement.value
console.log(valor)

if (event.keycode = 97) {
    window.document.activeElement.innerText = '3' 
}






//Altera cor de teclas
/*
var a = window.document.querySelector('button#num')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.style.background = 'red'
}
function entrar() {
    a.style.background = 'rgba(214, 211, 211, 1.992)'
}
function sair() {
    a.style.background = 'white'
}
*/



