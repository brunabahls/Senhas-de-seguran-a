const senha = document.getElementById("senha");
const gerar = document.getElementById("gerarSenha");

const tamanhoTexto = document.getElementById("tamanho");

const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

const barra = document.getElementById("forca");
const textoForca = document.getElementById("textoForca");

let tamanho = 12;

aumentar.onclick = () => {
    if (tamanho < 30) {
        tamanho++;
        tamanhoTexto.textContent = tamanho;
    }
};

diminuir.onclick = () => {
    if (tamanho > 4) {
        tamanho--;
        tamanhoTexto.textContent = tamanho;
    }
};

function gerarSenha() {

    let caracteres = "";

    if (maiusculas.checked)
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (minusculas.checked)
        caracteres += "abcdefghijklmnopqrstuvwxyz";

    if (numeros.checked)
        caracteres += "0123456789";

    if (simbolos.checked)
        caracteres += "!@#$%&*()-_=+?/";

    if (caracteres === "") {
        alert("Selecione pelo menos uma opção.");
        return;
    }

    let novaSenha = "";

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        novaSenha += caracteres[indice];
    }

    senha.value = novaSenha;

    atualizarForca();
}

function atualizarForca(){

    let pontos = 0;

    if(tamanho >= 8) pontos++;
    if(tamanho >= 12) pontos++;
    if(maiusculas.checked) pontos++;
    if(minusculas.checked) pontos++;
    if(numeros.checked) pontos++;
    if(simbolos.checked) pontos++;

    if(pontos <=2){
        barra.style.width="30%";
        barra.style.background="red";
        textoForca.textContent="Fraca";
    }

    else if(pontos <=4){
        barra.style.width="60%";
        barra.style.background="orange";
        textoForca.textContent="Média";
    }

    else{
        barra.style.width="100%";
        barra.style.background="limegreen";
        textoForca.textContent="Forte";
    }

}

gerar.onclick = gerarSenha;

gerarSenha();
