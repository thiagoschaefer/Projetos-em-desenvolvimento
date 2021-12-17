
window.onload = function() {
    colorbutton();
    bgrandon();
    validatecla();
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
/*function validatecla() {
window.document.querySelector('body').addEventListener('keypress', function(event) {
    
    window.alert('O código da tecla pressionada é :' + event.keyCode)
    
});
}
*/
//Indentifica qual tecla foi pressionada no teclado!
function validatecla() {
    document.addEventListener("keypress", function(e) {
    const btn = e.key
        console.log(btn)
        //btn.click()


    } )
}


//registrar numeros do teclado da calculadora no display

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
    console.log(disp)
}        

/*function operadores(x) {
    document.addEventListener("keypress", function(e) {
        const btn = e.key
        var disp = document.getElementById('display').value
        switch (btn) {
            case btn = '/': 
            document.getElementById('display').value = disp + btn
            break
            case btn = '*': 
            document.getElementById('display').value = disp + btn
            break
            case btn = '-': 
            document.getElementById('display').value = disp + btn
            break
            case btn = '+': 
            document.getElementById('display').value = disp + btn
            break
            case btn = 'Enter': 
            document.getElementById('display').value = disp + btn
            break
        }
        console.log(disp)
        console.log(btn)
    })
}        
*/