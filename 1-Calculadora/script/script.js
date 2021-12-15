/*var a = window.document.querySelector('button#num')

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
}*/


/*
window.document.querySelector('body').addEventListener('keydown', function(event) {
    document.querySelector('.return').innerHTML=KeyboardEvent.keyCode;
    console.info( keyboarEvent.keyCode );
   });*/

   document.querySelector('body').addEventListener('keydown', function(event) {
 
    document.querySelector('.retorno').innerText = "O código da tecla pressionada é : <br> <span>" + event.keyCode + "</span>";

});


function calculo() {
    var valor1 = window.document.getElementById('retorno')
    var v1 = Number(valor1.value)
}
 

