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

    if (numero1 >= numero2 && numero2 >= numero3) {
        alert(numero3 +
            "\n" + numero2 +
            "\n" + numero1);
    } else if (numero1 >= numero3 && numero3 >= numero2) {
        alert(numero2 +
            "\n" + numero3 +
            "\n" + numero1);
    } else if (numero2 >= numero1 && numero1 >= numero3) {
        alert(numero3 +
            "\n" + numero1 +
            "\n" + numero2);
    } else if (numero2 >= numero3 && numero3 >= numero1) {
        alert(numero1 +
            "\n" + numero3 +
            "\n" + numero2);
    } else if (numero3 >= numero1 && numero1 >= numero2) {
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
    else if (unidade === 2 && dezena !== 1) {
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
    alert(milharT + centenaT + dezenaT + unidadeT);

}

function exercicio18() {
    let pegarHora = prompt("Digite a hora (hh:mm:ss):");
    let partesHora = pegarHora.split(":");
    let hora = parseInt(partesHora[0]);
    let minuto = parseInt(partesHora[1]);
    let segundo = parseInt(partesHora[2]);
    let horaT, minutoT, segundoT;

    if (hora === 0) {
        horaT = "Meia noite, "
    } else if (hora === 1) {    
        hora = "Uma hora, "
    }
    else if (hora === 2) {
        horaT = "Duas horas, "
    }
    else if (hora === 3) {
        horaT = "Três horas, "
    }
    else if (hora === 4) {
        horaT = "Quatro horas, "
    }
    else if (hora === 5) {
        horaT = "Cinco horas, "
    }
    else if (hora === 6) {
        horaT = "Seis horas, "
    }
    else if (hora === 7) {
        horaT = "Sete horas, "
    }
    else if (hora === 8) {
        horaT = "Oito horas, "
    }
    else if (hora === 9) {
        horaT = "nove horas, "
    }
    else if (hora === 10) {
        horaT = "Dez horas, "
    }
    else if (hora === 11) {
        horaT = "Onze horas, "
    }
    else if (hora === 12) {
        horaT = "Doze horas, "
    }
    else if (hora === 13) {
        horaT = "Treze horas, "
    }
    else if (hora === 14) {
        horaT = "Quatorze horas, "
    }
    else if (hora === 15) {
        horaT = "Quinze horas, "
    }
    else if (hora === 16) {
        horaT = "Dezeseis horas, "
    }
    else if (hora === 17) {
        horaT = "Dezesete horas, "
    }
    else if (hora === 18) {
        horaT = "Dezoito horas, "
    }
    else if (hora === 19) {
        horaT = "Dezenove horas, "
    }
    else if (hora === 20) {
        horaT = "Vinte horas, "
    }
    else if (hora === 21) {
        horaT = "Vinte e uma horas, "
    }
    else if (hora === 22) {
        horaT = "Vinte e duas horas, "
    }
    else if (hora === 23) {
        horaT = "Vinte e três horas, "
    }  else {
        horaT = "(Hora inválida), ";
    }

    if (minuto === 0) {
        minutoT = "zero minutos e ";
    } else if (minuto === 1) {
        minutoT = "um minuto e ";
    } else if (minuto === 2) {
        minutoT = "dois minutos e ";
    } else if (minuto === 3) {
        minutoT = "três minutos e ";
    } else if (minuto === 4) {
        minutoT = "quatro minutos e ";
    } else if (minuto === 5) {
        minutoT = "cinco minutos e ";
    } else if (minuto === 6) {
        minutoT = "seis minutos e ";
    } else if (minuto === 7) {
        minutoT = "sete minutos e ";
    } else if (minuto === 8) {
        minutoT = "oito minutos e ";
    } else if (minuto === 9) {
        minutoT = "nove minutos e ";
    } else if (minuto === 10) {
        minutoT = "dez minutos e ";
    } else if (minuto === 11) {
        minutoT = "onze minutos e ";
    } else if (minuto === 12) {
        minutoT = "doze minutos e ";
    } else if (minuto === 13) {
        minutoT = "treze minutos e ";
    } else if (minuto === 14) {
        minutoT = "quatorze minutos e ";
    } else if (minuto === 15) {
        minutoT = "quinze minutos e ";
    } else if (minuto === 16) {
        minutoT = "dezesseis minutos e ";
    } else if (minuto === 17) {
        minutoT = "dezessete minutos e ";
    } else if (minuto === 18) {
        minutoT = "dezoito minutos e ";
    } else if (minuto === 19) {
        minutoT = "dezenove minutos e ";
    } else if (minuto === 20) {
        minutoT = "vinte minutos e ";
    } else if (minuto === 21) {
        minutoT = "vinte e um minutos e ";
    } else if (minuto === 22) {
        minutoT = "vinte e dois minutos e ";
    } else if (minuto === 23) {
        minutoT = "vinte e três minutos e ";
    } else if (minuto === 24) {
        minutoT = "vinte e quatro minutos e ";
    } else if (minuto === 25) {
        minutoT = "vinte e cinco minutos e ";
    } else if (minuto === 26) {
        minutoT = "vinte e seis minutos e ";
    } else if (minuto === 27) {
        minutoT = "vinte e sete minutos e ";
    } else if (minuto === 28) {
        minutoT = "vinte e oito minutos e ";
    } else if (minuto === 29) {
        minutoT = "vinte e nove minutos e ";
    } else if (minuto === 30) {
        minutoT = "trinta minutos e ";
    } else if (minuto === 31) {
        minutoT = "trinta e um minutos e ";
    } else if (minuto === 32) {
        minutoT = "trinta e dois minutos e ";
    } else if (minuto === 33) {
        minutoT = "trinta e três minutos e ";
    } else if (minuto === 34) {
        minutoT = "trinta e quatro minutos e ";
    } else if (minuto === 35) {
        minutoT = "trinta e cinco minutos e ";
    } else if (minuto === 36) {
        minutoT = "trinta e seis minutos e ";
    } else if (minuto === 37) {
        minutoT = "trinta e sete minutos e ";
    } else if (minuto === 38) {
        minutoT = "trinta e oito minutos e ";
    } else if (minuto === 39) {
        minutoT = "trinta e nove minutos e ";
    } else if (minuto === 40) {
        minutoT = "quarenta minutos e ";
    } else if (minuto === 41) {
        minutoT = "quarenta e um minutos e ";
    } else if (minuto === 42) {
        minutoT = "quarenta e dois minutos e ";
    } else if (minuto === 43) {
        minutoT = "quarenta e três minutos e ";
    } else if (minuto === 44) {
        minutoT = "quarenta e quatro minutos e ";
    } else if (minuto === 45) {
        minutoT = "quarenta e cinco minutos e ";
    } else if (minuto === 46) {
        minutoT = "quarenta e seis minutos e ";
    } else if (minuto === 47) {
        minutoT = "quarenta e sete minutos e ";
    } else if (minuto === 48) {
        minutoT = "quarenta e oito minutos e ";
    } else if (minuto === 49) {
        minutoT = "quarenta e nove minutos e ";
    } else if (minuto === 50) {
        minutoT = "cinquenta minutos e ";
    } else if (minuto === 51) {
        minutoT = "cinquenta e um minutos e ";
    } else if (minuto === 52) {
        minutoT = "cinquenta e dois minutos e ";
    } else if (minuto === 53) {
        minutoT = "cinquenta e três minutos e ";
    } else if (minuto === 54) {
        minutoT = "cinquenta e quatro minutos e ";
    } else if (minuto === 55) {
        minutoT = "cinquenta e cinco minutos e ";
    } else if (minuto === 56) {
        minutoT = "cinquenta e seis minutos e ";
    } else if (minuto === 57) {
        minutoT = "cinquenta e sete minutos e ";
    } else if (minuto === 58) {
        minutoT = "cinquenta e oito minutos e ";
    } else if (minuto === 59) {
        minutoT = "cinquenta e nove minutos e ";
    } else {
        minutoT = "(minutos inválidos) e ";
    }

    if (segundo === 0) {
        segundoT = "zero segundos.";
    } else if (segundo === 1) {
        segundoT = "um segundo.";
    } else if (segundo === 2) {
        segundoT = "dois segundos.";
    } else if (segundo === 3) {
        segundoT = "três segundos.";
    } else if (segundo === 4) {
        segundoT = "quatro segundos.";
    } else if (segundo === 5) {
        segundoT = "cinco segundos.";
    } else if (segundo === 6) {
        segundoT = "seis segundos.";
    } else if (segundo === 7) {
        segundoT = "sete segundos.";
    } else if (segundo === 8) {
        segundoT = "oito segundos.";
    } else if (segundo === 9) {
        segundoT = "nove segundos.";
    } else if (segundo === 10) {
        segundoT = "dez segundos.";
    } else if (segundo === 11) {
        segundoT = "onze segundos.";
    } else if (segundo === 12) {
        segundoT = "doze segundos.";
    } else if (segundo === 13) {
        segundoT = "treze segundos.";
    } else if (segundo === 14) {
        segundoT = "quatorze segundos.";
    } else if (segundo === 15) {
        segundoT = "quinze segundos.";
    } else if (segundo === 16) {
        segundoT = "dezesseis segundos.";
    } else if (segundo === 17) {
        segundoT = "dezessete segundos.";
    } else if (segundo === 18) {
        segundoT = "dezoito segundos.";
    } else if (segundo === 19) {
        segundoT = "dezenove segundos.";
    } else if (segundo === 20) {
        segundoT = "vinte segundos.";
    } else if (segundo === 21) {
        segundoT = "vinte e um segundos.";
    } else if (segundo === 22) {
        segundoT = "vinte e dois segundos.";
    } else if (segundo === 23) {
        segundoT = "vinte e três segundos.";
    } else if (segundo === 24) {
        segundoT = "vinte e quatro segundos.";
    } else if (segundo === 25) {
        segundoT = "vinte e cinco segundos.";
    } else if (segundo === 26) {
        segundoT = "vinte e seis segundos.";
    } else if (segundo === 27) {
        segundoT = "vinte e sete segundos.";
    } else if (segundo === 28) {
        segundoT = "vinte e oito segundos.";
    } else if (segundo === 29) {
        segundoT = "vinte e nove segundos.";
    } else if (segundo === 30) {
        segundoT = "trinta segundos.";
    } else if (segundo === 31) {
        segundoT = "trinta e um segundos.";
    } else if (segundo === 32) {
        segundoT = "trinta e dois segundos.";
    } else if (segundo === 33) {
        segundoT = "trinta e três segundos.";
    } else if (segundo === 34) {
        segundoT = "trinta e quatro segundos.";
    } else if (segundo === 35) {
        segundoT = "trinta e cinco segundos.";
    } else if (segundo === 36) {
        segundoT = "trinta e seis segundos.";
    } else if (segundo === 37) {
        segundoT = "trinta e sete segundos.";
    } else if (segundo === 38) {
        segundoT = "trinta e oito segundos.";
    } else if (segundo === 39) {
        segundoT = "trinta e nove segundos.";
    } else if (segundo === 40) {
        segundoT = "quarenta segundos.";
    } else if (segundo === 41) {
        segundoT = "quarenta e um segundos.";
    } else if (segundo === 42) {
        segundoT = "quarenta e dois segundos.";
    } else if (segundo === 43) {
        segundoT = "quarenta e três segundos.";
    } else if (segundo === 44) {
        segundoT = "quarenta e quatro segundos.";
    } else if (segundo === 45) {
        segundoT = "quarenta e cinco segundos.";
    } else if (segundo === 46) {
        segundoT = "quarenta e seis segundos.";
    } else if (segundo === 47) {
        segundoT = "quarenta e sete segundos.";
    } else if (segundo === 48) {
        segundoT = "quarenta e oito segundos.";
    } else if (segundo === 49) {
        segundoT = "quarenta e nove segundos.";
    } else if (segundo === 50) {
        segundoT = "cinquenta segundos.";
    } else if (segundo === 51) {
        segundoT = "cinquenta e um segundos.";
    } else if (segundo === 52) {
        segundoT = "cinquenta e dois segundos.";
    } else if (segundo === 53) {
        segundoT = "cinquenta e três segundos.";
    } else if (segundo === 54) {
        segundoT = "cinquenta e quatro segundos.";
    } else if (segundo === 55) {
        segundoT = "cinquenta e cinco segundos.";
    } else if (segundo === 56) {
        segundoT = "cinquenta e seis segundos.";
    } else if (segundo === 57) {
        segundoT = "cinquenta e sete segundos.";
    } else if (segundo === 58) {
        segundoT = "cinquenta e oito segundos.";
    } else if (segundo === 59) {
        segundoT = "cinquenta e nove segundos.";
    } else {
        segundoT = "(segundos inválidos).";
    }

    console.log(horaT + minutoT + segundoT);
    alert(horaT + minutoT + segundoT);
}