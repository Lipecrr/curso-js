function exercicio01() {
    let indice = 0;
    let soma = 0;
    let media = 0;

    while (indice < 4) {
        let produto = parseFloat(prompt("Digite o valor do produto:").replace(",", "."));

        soma = soma + produto;
        media = soma / indice;

        indice = indice + 1;
    }

    alert("Valor total da compra: R$ " + soma.toFixed(2) +
        "\nMedia da compra: R$ " + media.toFixed(2))
}

function exercicio02() {
    let indice = 0;
    let palavrasComA = 0;

    while (indice < 5) {
        let palavra = prompt("Digite um palavra").trim();

        if (palavra.toLowerCase().startsWith("a")) {
            palavrasComA = palavrasComA + 1;
        }
        indice = indice + 1;
    }
    let palavrasSemA = indice - palavrasComA;
    alert("Palavras com A: " + palavrasComA +
        "\nPalavras sem A: " + palavrasSemA
    )
}

function exercicio03() {
    let idade = 0;
    while (idade < 1 || idade > 120) {
        idade = parseInt(prompt("Digite a idade"));
        if (idade >= 1 && idade <= 120) {
            alert("Idade cadastrada " + idade)
        } else
            alert("Idade não aceita");
    }
}

function exercicio04() {
    let indice = 0;
    let maiorAltura = 0;
    while (indice < 3) {
        let altura = parseFloat(prompt("Digite a altura").replace(",", "."));

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
        indice = indice + 1;
    }
    alert(maiorAltura.toFixed(2));
}

function exercicio05() {
    let menu = `
    1 - Saudação
    2 - Par ou ímpar
    100 - sair
    `
    let nome, numero;
    let opcaoEscolhida = 0;

    while (opcaoEscolhida !== 100) {
        opcaoEscolhida = parseInt(prompt(menu));

        if (opcaoEscolhida === 1) {
            nome = prompt("Digite seu nome").trim();
            alert("Olá, " + nome + "!");
        } else if (opcaoEscolhida === 2) {
            numero = parseInt(prompt("Digite um numero"));
            if (numero % 2 === 0) {
                alert("O número " + numero + " é par!");
            } else {
                alert("O número " + numero + " é ímpar");
            }
        } else if (opcaoEscolhida !== 100) {
            alert("Opção inválida");
        } else {
            alert("Sistema encerrado");
        }
    }
}

function exercicio06() {
    let nome = "";
    let nomes = "";
    let quantidadeNomes = 0;

    while (nome.toLowerCase() !== "fim") {
        nome = prompt("Digite seu nome").trim();

        if (nome.toLowerCase !== "fim") {
            nomes = nomes + nome + "\n"

            quantidadeNomes = quantidadeNomes + 1;
        } else {
        }
    }

    alert("Quantidade de nomes cadastrado: " + "\n" + nomes +
        "\nQuantidade de nomes cadastrados: " + quantidadeNomes)
}

function exercicio07() {
    let indice = 0;
    let soma = 0;
    let media = 0;

    while (indice < 4) {
        let preco = parseFloat(prompt("Digite o valor").toLowerCase.replace(",", ".").replace("R$", ""));

        soma = soma + preco;
        media = soma / indice;

        indice = indice + 1;
    }

    alert("Valor total: R$ " + soma.toFixed(2) +
        "\nMedia do valor: R$ " + media.toFixed(2))
}

function exercicio08() {
    let indice = 0;
    let pergunta = 0;
    let naoPergunta = 0;

    while (indice < 5) {
        let frase = prompt("Digite uma frase").trim();

        if (frase.toLowerCase().endsWith("?")) {
            pergunta = pergunta + 1;
        } else {
            naoPergunta = naoPergunta + 1;
        }
        indice = indice + 1;
    }
    alert("Perguntas: " + pergunta +
        "\nNão perguntas: " + naoPergunta
    )
}

function exercicio09() {
    let indice = 0;
    let quantidadeVip = 0;
    let quantidadeOff = 0;
    let semAcesso = 0;

    while (indice < 5) {
        let acesso = prompt("Qual seu cupom").trim().toLowerCase();

        if (acesso.startsWith("vip")) {
            quantidadeVip = quantidadeVip + 1;
        } else if (acesso.endsWith("off")) {
            quantidadeOff = quantidadeOff + 1;
        } else {
            semAcesso = semAcesso + 1;
        }

        indice = indice + 1;
    }
    alert("Quantidade de acessos VIP: " + quantidadeVip +
        "\nQuantidade de acesso OFF: " + quantidadeOff +
        "\nQuantidade sem acesso: " + semAcesso
    )
}

function exercicio10() {
    let indice = 0;
    let nomes = "";
    let iniciais = "";
    while (indice < 3) {
        let nomeCompleto = prompt("Digite o nome completo").trim();
        let partesNome = nomeCompleto.split(" ");
        let primeiraLetra = partesNome[0].split("");
        nomes = nomes + partesNome[0] + "\n";
        iniciais = iniciais + primeiraLetra[0] + "\n"

        indice = indice + 1;
    }

    alert("Lista de primeiro nome: \n" + nomes +
        "\nIniciais: \n" + iniciais
    )
}