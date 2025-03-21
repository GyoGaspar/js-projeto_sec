let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo de Adivinhação';

let subtitulo = document.querySelector('p');
subtitulo.innerHTML = ' Escolha um número de 1 e 100';

exibirTextoNaTela ('h1', 'Jogo de Advinhação');
exibirTextoNaTela ('p' , 'Escolha um número de 1 e 100');

function exibirTextoNaTela(tag, texto){ 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    console.log ('Apertou o botão');
}

