function exercicio01() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:").replace(",", "."));
    let nota2 = parseFloat(prompt("Digite a segunda nota:").replace(",", "."));
    let nota3 = parseFloat(prompt("Digite a terceira nota:").replace(",", "."));
    let notaExame, mediaFinal;

    let mediaPonderada = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

    let trabalho = prompt("Fez o trabalho extra? (Sim ou não)").toLowerCase();

    if (trabalho === "sim" && mediaPonderada >= 6.8 && mediaPonderada < 7) {
        mediaPonderada = mediaPonderada + 0.2;
    } else if (mediaPonderada > 10) {
        mediaPonderada = 10;
    }

    if (mediaPonderada >= 7) {
        alert("Aprovado.");
        console.log("Aprovado.");
    } else if (mediaPonderada >= 5 && mediaPonderada < 7) {
        notaExame = parseFloat(prompt("Digite a nota do exame:").replace(",", "."));
        mediaFinal = (mediaPonderada + notaExame) / 2;
        if (mediaFinal >= 6) {
            alert("Aprovado.");
            console.log("Aprovado.");
        } else {
            alert("Reprovado.");
            console.log("Reprovado.");
        }
    } else {
        alert("Reprovado.");
        console.log("Reprovado.");

    }





}

function exercicio02() {
    let compra = parseFloat(prompt("Digite o valor da compra:").replace(",", "."));
    let cupom = prompt("Utilize um de nossos cupons('FRETEGRATIS' ou 'DESC10' ou vazio):").toLowerCase();
    let desconto, valorComDesconto, frete, valorFinal;

    if (compra >= 500) {
        desconto = 0.15;
    } else if (compra >= 300) {
        desconto = 0.10;
    } else if (compra >= 150) {
        desconto = 0.05;
    }

    valorComDesconto = compra * (1 - desconto);

    frete = 25;

    if (cupom === "desc10") {
        valorComDesconto = valorComDesconto * 0.90;
    } else if (cupom === "fretegratis") {
        frete = 0;
    }

    if (valorComDesconto < 0) {
        valorComDesconto = 0;
    }

    valorFinal = valorComDesconto + frete;

    alert("Valor da compra original: R$ " + compra +
        "\nValor da compra com desconto: R$ " + valorFinal);

}

function exercicio03() {
    let hora = parseFloat(prompt("Digite o tempo que ficou estacionado: ").replace(",", "."));
    let pernoite = prompt("Pernoite? (sim/não)").trim().toLowerCase();
    let valor = 0;

    if (hora > 0 && hora <= 1) {
        valor = 12;
    } else if (hora <= 4) {
        valor = 12 + ((hora - 1) * 6);
    } else if (hora > 4) {
        valor = 30;
    }

    if (pernoite === "sim" && hora > 10) {
        valor = valor + 20;
    }

    alert("Total a pagar: R$ " + valor.toFixed(2));

}

function exercicio04() {
    let lado1 = parseFloat(prompt("Digite o primeiro lado:").replace(",", "."));
    let lado2 = parseFloat(prompt("Digite o segundo lado:").replace(",", "."));
    let lado3 = parseFloat(prompt("Digite o terceiro lado:").replace(",", "."));

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert("Triângulo inválido.");
    }
    else if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado2 === lado3) {
            alert("Equilátero.");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            alert("Isósceles.");
        } else {
            alert("Escaleno.");
        }
    } else {
        alert("Triângulo inválido.");
    }
}