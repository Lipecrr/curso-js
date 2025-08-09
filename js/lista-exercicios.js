function exercicio01() {
    let nome = prompt("Digite seu nome:");
    let idade = parseInt(prompt("Digite sua idade:"));
    let altura = parseFloat(prompt("Digite sua altura:").replace(",", "."));

    console.log("Olá, meu nome é " + nome + ", " + "tenho " + idade + " anos e minha altura é " + altura + " metros.");
    alert("Olá, meu nome é " + nome + ", " + "tenho " + idade + " anos e minha altura é " + altura + " metros.");

}

function exercicio02() {
    let idade = parseInt(prompt("Digite sua idade"));
    let idadeFinal = idade + 5;

    console.log("Em 5 anos você tera " + idadeFinal + " anos");
    alert("Em 5 anos você tera " + idadeFinal + " anos");
}

function exercicio03() {
    let valorEmReal = parseFloat(prompt("Digite o valor em Real").replace(",", "."));
    let valorEmDolar = valorEmReal / 5.43;

    console.log("Seu valor convertido em dolar fica: $ " + valorEmDolar.toFixed(2) + ".");
    alert("Seu valor convertido em dolar fica: $ " + valorEmDolar.toFixed(2) + ".");
}

function exercicio04() {
    let luzAcesa = false;
    let interupitor = parseInt(prompt("Digte '1' para acender a luz ou '0' para apagar."));

    if (interupitor === 1) {
        luzAcesa = true;
        alert("A luz está acesa ")
        console.log("A luz está acesa " + luzAcesa);
    } else {
        alert("A luz está apagada")
        console.log("A luz está apagada " + luzAcesa);
    }

}

function exercicio05() {
    let largura = parseFloat(prompt("Digite a largura:").replace(",", "."));
    let altura = parseFloat(prompt("Digite a altura:").replace(",", "."));
    let area = largura * altura;

    alert("A área do retângulo é " + area.toFixed(2) + "m²" + " metros quadrados");
    console.log("A área do retângulo é " + area.toFixed(2) + "m²" + " metros quadrados");
}

function exercicio06() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:").replace(",", "."));
    let nota2 = parseFloat(prompt("Digite a segunda nota:").replace(",", "."));
    let nota3 = parseFloat(prompt("Digite a terceira nota:").replace(",", "."));
    let notaFinal = ((nota1 + nota2 + nota3) / 3).toFixed(2);

    alert("A média das notas é " + notaFinal + ".");
    console.log("A média das notas é " + notaFinal + ".");
}

function exercicio07() {
    let valor = parseFloat(prompt("Digite o valor do produto:").replace(",", "."));
    let desconto = parseInt(prompt("Digite o valor do desconto").replace(",", "."));
    let calculoDesconto = valor * (desconto / 100);
    let valorComDesconto = (valor - calculoDesconto).toFixed(2)

    alert("Valor com desconto é de: " + valorComDesconto);
    console.log("Valor com desconto é de: " + valorComDesconto);
}

function exercicio08() {
    let celsius = parseFloat(prompt("Digite a temperatura").replace(",", "."));
    let fahrenheit = celsius * 9 / 5 + 32;

    alert("Temperatura convertida em Fahrenheit: " + fahrenheit + "°F");
    console.log("Temperatura convertida em Fahrenheit: " + fahrenheit + "°F");
}

function exercicio09() {
    let numero1 = parseInt(prompt("Digite o primeiro valor:"));
    let numero2 = parseInt(prompt("Digite o segundo valor:"));
    let soma = numero1 + numero2;
    let produto = numero1 * numero2;

    alert("Soma dos valores: " + soma +
        "\nProduto dos valores: " + produto);
    console.log("Soma dos valores: " + soma +
        "\nProduto dos valores: " + produto);
}

function exercicio10() {
    let valor1 = parseFloat(prompt("Digite o primeiro valor:").replace(",", "."));
    let valor2 = parseFloat(prompt("Digite o segundo valor:").replace(",", "."));

    console.log("Valor 1: " + valor1 +
        "\nValor 2: " + valor2
    );
    alert("Valor 1: " + valor1 +
        "\nValor 2: " + valor2
    );

    let troca = valor1;
    valor1 = valor2;
    valor2 = troca;

    console.log("Valor 1: " + valor1 +
        "\nValor 2: " + valor2
    );
    alert("Valor 1: " + valor1 +
        "\nValor 2: " + valor2
    );
}