function exercicio01() {
    let frase = prompt("Digite uma frase:");
    let palavraAntiga = prompt("Qual palavra você quer trocar?");
    let palavraNova = prompt("Qual palavra você quer colocar no lugar?");
    let fraseModificada = frase.replace(palavraAntiga, palavraNova);

    alert("Frase modificada: " + fraseModificada);
    console.log("Frase modificada: " + fraseModificada);
}

function exercicio02() {
    let frase = prompt("Digite uma frase:");
    let palavra = prompt("Digite a palavra que deseja remover:");
    let resultado = frase.replaceAll(palavra, "");

    alert("Frase após remoção: " + resultado);
}

function exercicio03() {
    let nome = prompt("Digite seu nome completo:");
    let nomePartes = nome.trim().split(" ");
    let primeiroNome = nomePartes[0];
    let ultimoNome = nomePartes[nomePartes.length - 1];

    alert("Primeiro nome: " + primeiroNome + "\nÚltimo nome: " + ultimoNome);
}

function exercicio04() {
    let frase = prompt("Digite uma frase:");
    let parte = frase.substring(3, 8);

    alert("Parte extraída: " + parte);
}

function exercicio05() {
    let frase = prompt("Digite uma frase:").trim();

    alert("Frase com espaços extras retirados: " + frase);
}

function exercicio06() {
    let frase = prompt("Digite uma frase com espaços antes da primeira palavra:").trimStart();

    alert("Frase com espaço extra do inicio retirado: " + frase);
}

function exercicio07() {
    let frase = prompt("Digite uma frase com espaços depois da última palavra:").trimEnd();

    alert("Frase com espaço extra do final retirado: " + frase);
}

function exercicio08(){
    let telefone = prompt("Digite o número do seu telefone sem o 'DDD':").padStart(11, "D");

    alert(telefone);
}

function exercicio09(){
    let contaBancaria = prompt("Digite o número de usa conta bancaria:").padEnd(10, 0);

    alert(contaBancaria);
}

function exercicio10(){
    let valor = parseFloat(prompt("Digite o valor desejado: ").replace("," , "."));

    alert("Valor em Real: R$ " + valor.toFixed(2));
}