function exercicio01() {
    let idade = parseInt(prompt("Digite sua idade:"));

    if (idade >= 18) {
        alert("Você é maior de idade.");
        console.log("Você é maior de idade.");
    } else {
        alert("Você é menor de idade.");
        console.log("Você é menor de idade.");
    }
}
function exercicio02() {
    let numero = parseInt(prompt("Digite um numero:"));

    if (numero % 2 === 0) {
        alert("O número é par.");
        console.log("O número é par.");
    } else {
        alert("O número é ímpar.");
        console.log("O número é ímpar.");
    }
}

function exercicio03() {
    let nota = parseFloat(prompt("Digite a nota da prova:").replace(",", "."));

    if (nota >= 7) {
        alert("Aprovado.");
        console.log("Aprovado.");
    } else {
        alert("Reprovado.");
        console.log("Reprovado.");
    }
}

function exercicio04() {
    let senha = prompt("Digite a senha:");

    if (senha === "1234") {
        alert("Acesso permitido.");
        console.log("Acesso permitido.");
    } else {
        alert("Senha incorreta.");
        console.log("Senha incorreta.");
    }
}
function exercicio05() {
    let valor = parseFloat(prompt("Digite o valor da compra").replace(",", "."));

    if (valor >= 100) {
        alert("Você ganhou um desconto de 10%.");
        console.log("Você ganhou um desconto de 10%.");
    } else {
        alert("Sem desconto disponível.");
        console.log("Sem desconto disponível.");
    }
}
function exercicio06() {
    let idade = parseInt(prompt("Digite sua idade:"));

    if (idade <= 12) {
        alert("Criança");
        console.log("Criança");
    } else if (idade >= 13 && idade <= 17) {
        alert("Adolescente");
        console.log("Adolescente");
    } else if (idade >= 18 && idade <= 59) {
        alert("Adulto");
        console.log("Adulto");
    } else {
        alert("Idoso");
        console.log("Idoso");
    }
}
function exercicio07() {
    let numero1 = parseFloat(prompt("Digite o primeiro numero:").replace(",", "."));
    let numero2 = parseFloat(prompt("Digite o segundo' numero:").replace(",", "."));

    if (numero1 === numero2) {
        alert("Os numeros são iguais.");
        console.log("Os numeros são iguais.");
    } else if (numero1 > numero2) {
        alert("Primeiro numero é maior que o segundo.");
        console.log("Primeiro numero é maior que o segundo.");
    } else {
        alert("Segundo numero é maior que o primeiro.");
        console.log("Segundo numero é maior que o primeiro.");
    }

}
function exercicio08() {
    let numero = parseFloat(prompt("Digite um numero:").replace(",", "."));

    if (numero === 0) {
        alert("Zero");
        console.log("Zero");
    } else if (numero > 0) {
        alert("Positivo");
        console.log("Positivo");
    } else {
        alert("Negativo");
        console.log("Negativo");
    }
}
function exercicio09() {
    let nota1 = parseFloat(prompt("Digite a primeira nota: ").replace(",", "."));
    let nota2 = parseFloat(prompt("Digite a segunda nota: ").replace(",", "."));
    let nota3 = parseFloat(prompt("Digite a terceira nota: ").replace(",", "."));
    let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

    if (media >= 7) {
        alert("Sua media: " + media +
            "\nAprovado");
        console.log("Sua media: " + media +
            "\nAprovado");
    } else if (media >= 5 && media <= 6.9) {
        alert("Sua media: " + media +
            "\nRecuperação.");
        console.log("Sua media: " + media +
            "\nRecuperação.");
    } else {
        alert("Sua media: " + media +
            "\nReprovado.");
        console.log("Sua media: " + media +
            "\nReprovado.");
    }
}
function exercicio10() {
    let numero = parseInt(prompt("Digite um numero:"));

    if (numero % 3 === 0 && numero % 5 === 0) {
        alert("Múltiplo de 3 e 5.");
        console.log("Múltiplo de 3 e 5.");
    } else if (numero % 3 === 0) {
        alert("Múltiplo de 3.");
        console.log("Múltiplo de 3.");
    } else if (numero % 5 === 0) {
        alert("Múltiplo de 5.");
        console.log("Múltiplo de 5.");
    } else {
        alert("Não é múltiplo de 3 nem de 5.");
        console.log("Não é múltiplo de 3 nem de 5.");
    }
}
function exercicio11() {
    let idade = parseInt(prompt("Digite sua idade:"));
    let ingresso = prompt("Tem ingresso: sim ou não").toLocaleLowerCase();

    if (idade >= 18 && ingresso === "sim") {
        alert("Entrada permitida");
    } else {
        alert("Entrada negada");
    }
}
function exercicio12() {
    let compra = parseFloat(prompt("Digite o valor da compra:").replace(",", "."));
    let vip = prompt("Cliente VIP: sim ou não").toLowerCase();

    if (compra > 200 || vip === "sim") {
        alert("Você ganhou um brinde!");
        console.log("Você ganhou um brinde!");
    } else {
        alert("Sem bônus disponível.");
        console.log("Sem bônus disponível.");
    }
}
function exercicio13() {
    let login = prompt("Usuário:").toLowerCase();
    let senha = prompt("Senha:");

    if (login === "admin" && senha === "1234") {
        alert("Login bem-sucedido.");
        console.log("Login bem-sucedido.");
    } else {
        alert("Usuário ou senha inválidos.");
        console.log("Usuário ou senha inválidos.");
    }
}
function exercicio14() {
    let numero1 = parseFloat(prompt("Digite o primeiro numero:").replace(",", "."));
    let numero2 = parseFloat(prompt("Digite o segundo numero:").replace(",", "."));
    let numero3 = parseFloat(prompt("Digite o terceiro numero:").replace(",", "."));

    if (numero1 + numero2 > numero3 && numero1 + numero3 > numero2 && numero2 + numero3 > numero1) {
        alert("Triângulo válido.");
        console.log("Triângulo válido.");
    } else {
        alert("Triângulo inválido.");
        console.log("Triângulo inválido.");
    }
}
function exercicio15() {
    let ano = parseInt(prompt("Digite o ano:"));

    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        alert("Ano bissexto.");
        console.log("Ano bissexto.");
    } else {
        alert("Ano comum.");
        console.log("Ano comum.");
    }
}