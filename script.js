//valor objetivo da contagem
let valorFinal = prompt("Digite o número de vidas:");
//valor indice repetição e estado aplicação
let i = 0;
//valor demonstrado na tela
let contador = document.querySelector(".contador");
//intervalo de tempo inicial em ms
let intervalo = 1000;
//tempo aproximado para finalização da contagem em ms
let tempoMaximo = 25000;
//Intervalo minimo calculado para alteração de valores do contador
let intervaloMinimo = (tempoMaximo / valorFinal);

/*Insere o valor ao contador*/
function somaNaTela() {
    contador.innerHTML = i+1;
}

/*Soma 1 ao indice e chama*/
function soma_adiciona() {
    if (i < valorFinal-1) {
        somaNaTela();
        i++;
        setTimeout(start, 1);  
    } else if(i >= valorFinal-1) {
        somaNaTela();
        i++;
    }
}

//atualiza o intervalo, responsavel pela velocidade de mudança dos numeros
function atualizaVelocidade() {
    /*Aumenta a velocidade*/
    if (i >= 0 && i < 5 && intervalo > intervaloMinimo) {
        intervalo = intervalo - 100;
    } else if (i >= 5 && i <10 && intervalo > intervaloMinimo) {
        intervalo = (intervalo - 50);
    } else if (i >= 10 && i < (valorFinal - 30)) {
        intervalo = (intervalo - 7.5);
    }
    /*Diminui a velocidade*/
    if (i >= (valorFinal - 20) && i < (valorFinal - 10) && intervalo < 1000) {
        intervalo = intervalo + 20;
    } else if (i >= (valorFinal - 10) && i < (valorFinal - 5) && intervalo < 1000) {
        intervalo = intervalo + 75;
    } else if (i >= (valorFinal - 5) && i < valorFinal) {
        intervalo = intervalo + 200;
    }
    /*Limites de intervalo*/
    if(intervalo < intervaloMinimo) {
        intervalo = intervaloMinimo;
    }
    if(intervalo > 1750) {
        intervalo = 1750;
    }
}

/*Inicia a contagem*/
function start() {
    atualizaVelocidade();
    setTimeout(soma_adiciona, intervalo);
}

/*Reconhece teclas apertadas*/
document.addEventListener("keydown", function (event) {
    if(event.key == " " && i >= (valorFinal - 1)){
        soma_adiciona();
    } else    
    if(event.key == "Enter" && i < 1){
        start();
    };
});