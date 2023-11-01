var numeroSorteado;

function loadDefault() {
    const bttGerar = document.getElementById("bttInicio");
    bttGerar.addEventListener("click", iniciarJogo);

    const bttLimpar = document.getElementById("bttLimpar");
    bttLimpar.addEventListener("click", limparCampos);
}

function iniciarJogo() {
    const qtdBlocos = parseInt(document.getElementById("iptQtd").value);
    numeroSorteado = Math.floor(Math.random() * qtdBlocos);

    const container = document.getElementById("container");
    container.innerHTML = ''; // Limpa o conteúdo anterior do container

    for (let k = 0; k < qtdBlocos; k++) {
        var bloco = document.createElement("div");
        bloco.setAttribute("class", "box");
        bloco.textContent = k; // Adiciona o número ao interior da caixa
        bloco.setAttribute("data-numero", k); // Armazena o número da caixa como um atributo de dados
        bloco.addEventListener("click", verificarNumero); // Adiciona um evento de clique à caixa
        container.appendChild(bloco);
    }

    document.getElementById("resultado").textContent = ''; // Limpa o resultado anterior
}

function verificarNumero(event) {
    const numeroClicado = parseInt(event.target.getAttribute("data-numero"));
    const resultado = document.createElement("div");
    resultado.textContent = `Número clicado: ${numeroClicado}`;

    if (numeroClicado === numeroSorteado) {
        resultado.textContent += " - Você acertou!";
    } else {
        resultado.textContent += " - Você errou!";
    }

    document.getElementById("resultado").appendChild(resultado);
}

function limparCampos() {
    document.getElementById("container").innerHTML = '';
    document.getElementById("iptQtd").value = '';
    document.getElementById("resultado").textContent = '';
}

document.addEventListener("DOMContentLoaded", loadDefault);
