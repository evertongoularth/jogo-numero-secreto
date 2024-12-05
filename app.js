let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function editarHtml(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMsgInicial(){
    editarHtml('h1','Jogo do Número Secreto');
    editarHtml('p',`Escolha um número entre 1 e ${numeroMaximo}.`);
}

exibirMsgInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let padronizaTentativa = tentativas > 1 ?  'tentativas' : 'tentativa';
        editarHtml('h1','Parabéns!');
        editarHtml('p',`Você acertou o número com ${tentativas} ${padronizaTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            editarHtml('p','O número é menor! Tente novamente.');
        } else {
            editarHtml('p','O número é maior! Tente novamente.');
        }
        tentativas++;
        limparCampo();
    }
    
}

function gerarNumeroAleatorio(){

    console.log(`No momento o array é ${listaNumerosSorteados}`)
    let numeroSecretoTemp = parseInt(Math.random() * numeroMaximo + 1);
    
    if (listaNumerosSorteados.length == (numeroMaximo - 1)){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroSecretoTemp)){
        console.log(`numero secreto gerado ${numeroSecretoTemp} já estava no array`)
        return gerarNumeroAleatorio();
    } else {
        console.log(`numero secreto gerado ${numeroSecretoTemp} não estava no array, adicionando`)
        listaNumerosSorteados.push(numeroSecretoTemp);
        return numeroSecretoTemp;
    }

}

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarjogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    numeroMaximo = 10;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}