function somar() {
    // Pegar um elemento dea tela por id
    // <elemento id="numero1"
    let campoNumero1 = document.getElementById("numero1");
    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero2");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    console.log(numero1);
    console.log(numero2);

    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}

function subtrair() {
    let campoNumero1 = document.getElementById("numero1");
    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero2");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    let subtrair = numero1 - numero2;

    alert("Subtração: " + subtrair);
}

function multiplicar() {
    let campoNumero1 = document.getElementById("numero1");
    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero2");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    let multiplicar = numero1 * numero2;
    alert("Multiplicação: " + multiplicar);
}

function dividir() {
    let campoNumero1 = document.getElementById("numero1");
    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero2");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    let dividir = numero1 / numero2;
    alert("Divisão: " + dividir);
}

//function definirCorPreto() {
//    let itens = document.getElementsByClassName("item");/
//
//    for (let i = 0; i < itens.length; i = i + 1) {
//        let item = itens[i];
//        item.style.backgroundColor = "#000000ff";
//    }
//    console.log(itens);
//}

function definirCor(nomeCor) {
    let itens = document.getElementsByClassName("item");
    let cor = "";
    if (nomeCor === "azul") {
        cor = "#1191b8ff";
    } else if (nomeCor === "roxo") {
        cor = "#a50db9ff";
    } else if (nomeCor === "preto") {
        cor = "#000";
    } else if (nomeCor === "vermelho") {
        cor = "#db1010ff";
    } else if (nomeCor === "verde") {
        cor = "#25a50bff";
    }
    for (let i = 0; i < itens.length; i = i + 1) {
        let item = itens[i];
        item.style.backgroundColor = cor;
    }
    console.log(itens);
}

function alterarVisibilidade() {
    let iframe = document.getElementsByTagName("iframe");
    //Sei que na nosa tela só tem um iframe, n vou fazer um for,
    //porem se tiver mais do que é necessário utilizar for
    if (iframe[0].style.display === "inline") {
        iframe[0].style.display = "none";
    } else {
        iframe[0].style.display = "inline";
    }
}

function apresentarNomeCompleto() {
    let campoNome = document.getElementsByName("nome")[0];
    let campoSobrenome = document.getElementsByName("sobrenome")[0];

    let nome = campoNome.value;
    let sobrenome = campoSobrenome.value;

    let nomeCompleto = `${nome} ${sobrenome}`;

    let resultado = document.getElementById("resultadoNomes")
    resultado.innerText = `Nome completo: ${nomeCompleto}`;

}

function limparCampos() {
    let campoNome = document.getElementsByName("nome")[0];
    campoNome.value = "";
    let campoSobrenome = document.getElementsByName("sobrenome")[0];
    campoSobrenome.value = "";
    let resultado = document.getElementById("resultadoNomes")
    resultado.innerText = "";
}

function exemploQuerySelector() {
    let paragrafo = document.querySelector("div#jogos p");
    // Adicionar uma classe ao elemtno
    paragrafo.classList.add("alternativo");
}

function exemploQuerySelectorAll() {
    let paragrafos = document.querySelectorAll("div#jogos p");

    for (let i = 0; i < paragrafos.length; i += 1) {
        let paragrafo = paragrafos[i];
        if (i % 2 == 0) {
            // Adicionar uma clase 'destaque' ao elemento
            paragrafo.classList.add("destaque");
        } else {
            paragrafo.classList.add("elegante");
        }
    }
}

function reset() {
    let paragrafos = document.querySelectorAll("div#jogos p");

    for (let i = 0; i < paragrafos.length; i += 1) {
        let paragrafo = paragrafos[i];
        // Aqui, o ... (spread) expande todas as classes atuais do elemento, removendo todas de uma vez.
        paragrafo.classList.remove(...paragrafo.classList);
    }
}