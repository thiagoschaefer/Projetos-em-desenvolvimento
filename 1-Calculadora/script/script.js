
window.onload = function() {
    colorbutton();
    bgrandon();
    //registradisplay();
    //validatecla();
}

//Mudar a cor do Background da calculadora
function bgrandon(){
    var btn = document.querySelector('button');
    
    function random(number) {
        return Math.floor(Math.random()*(number+1));
    }
    
    btn.onclick = function() {
        var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        document.body.style.backgroundColor = rndCol;
    }
}

//Altera cor de teclas quando, "clica - passa sobre - sai". incluir condição for
function colorbutton(){
    var filhos = document.querySelectorAll('#number num')
    for (var i = 0; i < filhos.length; i++) {
        filhos[i].addEventListener('click', clicar)
        filhos[i].addEventListener('mouseenter', entrar)
        filhos[i].addEventListener('mouseout', sair)
        
            function clicar() {
                filhos.style.background = 'green'
            }
            function entrar() {
                filhos.style.background = 'rgba(214, 211, 211, 1.992)'
            }
            function sair() {
                filhos.style.background = 'white'
            }
        }
    }

    
  


/*let a = window.document.activeElement.value;
console.log(a)*/


// Indentifica e exibe o código de uma tecla que foi apertada no teclado
function validatecla() {
window.document.querySelector('body').addEventListener('keydown', function(event) {
    
    window.alert('O código da tecla pressionada é :' + event.keyCode)
    
});
}

// Criar uma condição que valide as 16 teclas da claculadora que podem ser acionadas pelo teclado - condição "while" 

// Captura o que for digitado no display da calculadora 
function guardavalor(){
let valorA = window.document.activeElement.value
console.log(valor)

if (event.keycode = 97) {
    window.document.activeElement.innerText = '3' 
}
}

//registrar numeros no display

function registradisplay(x) {
    var disp = document.getElementById('display').value
    switch (x) {
        case x = 0: 
        document.getElementById('display').value = disp + x
        break
        case x = 1:
        document.getElementById('display').value = disp + x
        break
        case x = 2:
        document.getElementById('display').value = disp + x
        break
        case x = 3:
        document.getElementById('display').value = disp + x
        break
        case x = 4: 
        document.getElementById('display').value = disp + x
        break
        case x = 5:
        document.getElementById('display').value = disp + x
        break
        case x = 6:
        document.getElementById('display').value = disp + x
        break
        case x = 7:
        document.getElementById('display').value = disp + x
        break
        case x = 8:
        document.getElementById('display').value = disp + x
        break
        case x = 9:
        document.getElementById('display').value = disp + x
        break
    }
    focus()
    console.log(disp)
}        