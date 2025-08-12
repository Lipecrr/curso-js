function exercicio07() {
    let numero = parseFloat(prompt("Digite um número:").replace(",", "."));
    let parImparNeutro;
    let positivoNegativo;
    let maiorQue10;
    let menorOuIguala50;
    let menorQueMenos10;
    let maiorOuIgual30;
    let diferente1;

    if (numero === 0) {
        parImparNeutro = "Neutro";
    } else if (numero % 2 === 0) {
        parImparNeutro = "Par";
    } else {
        parImparNeutro = "Impar";
    }

    if (numero >= 0) {
        positivoNegativo = "Positivo";
    } else {
        positivoNegativo = "Negativo";
    }

    if (numero > 10) {
        maiorQue10 = "Maior que 10";
    } else if (numero < 10) {
        maiorQue10 = "Menor que 10";
    } else {
        maiorQue10 = "Igual a 10";
    }

    if (numero < 50) {
        menorOuIguala50 = "Menor que 50";
    } else if (numero > 50) {
        menorOuIguala50 = "Maior que 50";
    } else {
        menorOuIguala50 = "Igual a 50";
    }

    if (numero < -10) {
        menorQueMenos10 = "Menor que -10";
    } else if (numero > -10) {
        menorQueMenos10 = "Maior que -10";
    } else {
        menorQueMenos10 = "Igual a -10";
    }

    if (numero > 30) {
        maiorOuIgual30 = "Maior que 30";
    } else if (numero === 30) {
        maiorOuIgual30 = "Igual que 30";
    } else {
        maiorOuIgual30 = "Menor a 30";
    }

    if (numero === 1) {
        diferente1 = "Igual a 1";
    } else {
        diferente1 = "Diferente de 1";
    }

    alert(parImparNeutro +
        "\n" + positivoNegativo +
        "\n" + maiorQue10 +
        "\n" + menorOuIguala50 +
        "\n" + menorQueMenos10 +
        "\n" + maiorOuIgual30 +
        "\n" + diferente1);
}

function exercicio09() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:").replace(",", "."));
    let numero2 = parseFloat(prompt("Digite o segundo número:").replace(",", "."));
    let numero3 = parseFloat(prompt("Digite o terceiro número:").replace(",", "."));
    let numero4 = parseFloat(prompt("Digite o quarto número:").replace(",", "."));

    if (numero1 === numero2 && numero1 === numero3 && numero2 === numero3 && numero2 === numero4 && numero3 === numero4) {
        alert("é um quadrado")
    } else {
        alert("não é um quadrado")
    }
}

function exercicio10() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:").replace(",", "."));
    let numero2 = parseFloat(prompt("Digite o segundo número:").replace(",", "."));
    let numero3 = parseFloat(prompt("Digite o terceiro número:").replace(",", "."));
    let numero4 = parseFloat(prompt("Digite o quarto número:").replace(",", "."));

    if (numero1 === numero2 && numero3 === numero4 && numero1 !== numero3 || numero1 === numero3 && numero2 === numero4 && numero1 !== numero2 || numero1 === numero4 && numero2 === numero3 && numero1 !== numero3) {
        alert("É um retangulo");
    } else {
        alert("Não é um retangulo");
    }
}

function exercicio14() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:").replace(",", "."));
    let numero2 = parseFloat(prompt("Digite o segundo número:").replace(",", "."));
    let numero3 = parseFloat(prompt("Digite o terceiro número:").replace(",", "."));


    if (numero1 > numero2 && numero2 > numero3) {
        alert(numero3 +
            "\n" + numero2 +
            "\n" + numero1);
    } else if (numero1 > numero3 && numero3 > numero2) {
        alert(numero2 +
            "\n" + numero3 +
            "\n" + numero1);
    } else if (numero2 > numero1 && numero1 > numero3) {
        alert(numero3 +
            "\n" + numero1 +
            "\n" + numero2);
    } else if (numero2 > numero3 && numero3 > numero1) {
        alert(numero1 +
            "\n" + numero3 +
            "\n" + numero2);
    } else if (numero3 > numero1 && numero1 > numero2) {
        alert(numero2 +
            "\n" + numero1 +
            "\n" + numero3);
    } else {
        alert(numero1 +
            "\n" + numero2 +
            "\n" + numero3);
    }
}

function exercicio17() {
    let anoNascimento = prompt("Digite o ano que nasceu:").trim();
    let partesAnonascimento = anoNascimento.split("");
    let milhar = parseInt(partesAnonascimento[0]);
    let centena = parseInt(partesAnonascimento[1]);
    let dezena = parseInt(partesAnonascimento[2]);
    let unidade = parseInt(partesAnonascimento[3]);
    let milharT, centenaT, dezenaT, unidadeT;


    if (milhar === 1) {
        milharT = "Mil "
    } else if (milhar === 2) {
        milharT = "Dois mil "
    } else if (milhar === 3) {
        milharT = "Três mil "
    } else if (milhar === 4) {
        milharT = "Quatro mil "
    } else if (milhar === 5) {
        milharT = "Cinco mil "
    } else if (milhar === 6) {
        milharT = "Seis mil "
    } else if (milhar === 7) {
        milharT = "Sete mil "
    } else if (milhar === 8) {
        milharT = "Oito mil "
    } else if (milhar === 9) {
        milharT = "Nove mil "
    } else {
        milharT = ""
    }

    if (centena === 1 && dezena === 0 && unidade === 0) {
        centenaT = "cem";
    } else if (centena === 1) {
        centenaT = "cento e ";
    }
    else if (centena === 2) {
        centenaT = "duzentos e ";
    } else if (centena === 3) {
        centenaT = "trezentos e ";
    } else if (centena === 4) {
        centenaT = "quatrocentos e ";
    } else if (centena === 5) {
        centenaT = "quinhentos e ";
    } else if (centena === 6) {
        centenaT = "seiscento e ";
    } else if (centena === 7) {
        centenaT = "setecentos e ";
    } else if (centena === 8) {
        centenaT = "oitocentos e ";
    } else if (centena === 9) {
        centenaT = "novecentos e ";
    } else if (centena === 0) {
        centena = " ";
    }

    if (dezena === 1) {
        if (unidade === 1) {
            dezenaT = "onze";
        } else if (unidade === 2) {
            dezenaT = "doze";
        } else if (unidade === 3) {
            dezenaT = "treze";
        } else if (unidade === 4) {
            dezenaT = "quatoze";
        } else if (unidade === 5) {
            dezenaT = "quinze";
        } else if (unidade === 6) {
            dezenaT = "dezeseis";
        } else if (unidade === 7) {
            dezenaT = "dezesete";
        } else if (unidade === 8) {
            dezenaT = "dezoito";
        } else if (unidade === 9) {
            dezenaT = "dezenove";
        } else {
            dezenaT = ""
        }
    }
    else if (dezena === 2) {
        dezenaT = "vinte e ";
    } else if (dezena === 3) {
        dezenaT = "trinta e ";
    } else if (dezena === 4) {
        dezenaT = "quarenta e ";
    } else if (dezena === 5) {
        dezenaT = "cinquenta e ";
    } else if (dezena === 6) {
        dezenaT = "sessenta e ";
    } else if (dezena === 7) {
        dezenaT = "setenta e ";
    } else if (dezena === 8) {
        dezenaT = "oitenta e ";
    } else if (dezena === 9) {
        dezenaT = "noventa e ";
    }
    if (unidade === 1 && dezena !== 1) {
        unidadeT = "um";
    }
    else if(unidade === 2 && dezena !== 1) {
        unidadeT = "dois";
    }
    else if (unidade === 3 && dezena !== 1) {
        unidadeT = "três";
    }
    else if (unidade === 4 && dezena !== 1) {
        unidadeT = "quatro";
    }
    else if (unidade === 5 && dezena !== 1) {
        unidadeT = "cinco";
    }
    else if (unidade === 6 && dezena !== 1) {
        unidadeT = "seis";
    }
    else if (unidade === 7 && dezena !== 1) {
        unidadeT = "sete";
    }
    else if (unidade === 8 && dezena !== 1) {
        unidadeT = "oito";
    }
    else if (unidade === 9 && dezena !== 1) {
        unidadeT = "nove";
    } else {
        unidadeT = "";
    }
    console.log(milharT + centenaT + dezenaT + unidadeT);


}
