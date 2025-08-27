function exercicio13() {
    let maiorNome = "";
    let menorNome = "ksjajsiajiasiajsjasjasjaijsajsa";

    let maiorIdade = 0;
    let jogadorMaiorIdade = 0;

    let menorIdade = 9999999999;
    let jogadorMenorIdade = 9999999999;


    let maiorPeso = 0;
    let jogadorMaiorPeso = 0;

    let menorPeso = 99999999999;
    let jogadorMenorPeso = 99999999;

    let quantidadeMasculino = 0;
    let quantidadeFeminino = 0;

    let maiorAltura = 0;
    let menorAltura = 9999999999;

    let maiorQuantidadeGols = 0;
    let jogadorMaisGols = "";

    let maiorCartoesAmarelos = 0;
    let jogadorMaiorAmarelo = "";

    let menorCartoesAmarelos = 9999999999999;
    let jogadorMenorAmarelo = "";

    let maiorCartoesVermelho = 0;
    let jogadorMaiorVermelho = "";

    let menorCartoesVermelho = 9999999999999;
    let jogadorMenorVermelho = "";

    let indice = 0;
    while (indice < 22) {
        let nome = prompt("Digite o nome do jogador").trim();
        let idade = parseInt(prompt("Digite a idade do jogador"));
        let peso = parseFloat(prompt("Digite o peso do jogador").replace(",", "."));
        let sexo = prompt("Digite o sexo do jogador").trim();
        let altura = parseFloat(prompt("Digite a altura do jogador").replace(",", "."));
        let golsMarcados = parseInt(prompt("Digite a quantidade de gols marcados"));
        let cartoesAmarelos = parseInt(prompt("Digite a quantidade de cartões amarelos recebidos"));
        let cartoesVermelhos = parseInt(prompt("Digite a quantidade de cartões vermelhos"));

        if (nome.length > maiorNome.length) {
            maiorNome = nome;
        }
        if (nome.length < menorNome.length) {
            menorNome = nome;
        }
        if (idade > maiorIdade) {
            maiorIdade = idade;
            jogadorMaiorIdade = nome;
        }
        if (idade < menorIdade) {
            menorIdade = idade;
            jogadorMenorIdade = nome;
        }
        if (peso > maiorPeso) {
            maiorPeso = peso;
            jogadorMaiorPeso = nome;
        }
        if (peso < menorPeso) {
            menorPeso = peso;
            jogadorMenorPeso = nome;
        }
        if (sexo.toLowerCase() === "masculino") {
            quantidadeMasculino = quantidadeMasculino + 1;
        }
        if (sexo.toLowerCase() === "feminino") {
            quantidadeFeminino = quantidadeFeminino + 1;
        }
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
        if (altura < menorAltura) {
            menorAltura = altura;
        }
        if (golsMarcados > maiorQuantidadeGols) {
            maiorQuantidadeGols = golsMarcados;
            jogadorMaisGols = nome;
        }
        if (cartoesAmarelos > maiorCartoesAmarelos) {
            maiorCartoesAmarelos = cartoesAmarelos;
            jogadorMaiorAmarelo = nome;
        }
        if (cartoesAmarelos < menorCartoesAmarelos) {
            menorCartoesAmarelos = cartoesAmarelos;
            jogadorMenorAmarelo = nome;
        }
        if (cartoesVermelhos > maiorCartoesVermelho) {
            maiorCartoesVermelho = cartoesVermelhos;
            jogadorMaiorVermelho = nome;
        }
        if (cartoesVermelhos < menorCartoesVermelho) {
            menorCartoesVermelho = cartoesVermelhos;
            jogadorMenorVermelho = nome;
        }

        indice = indice + 1;
    }
    console.log(
        "Jogador com maior nome: " + maiorNome + "." +
        "\nJagador com menor nome: " + menorNome + "." +
        "\n\nJogador com maior idade: " + jogadorMaiorIdade + ", Com " + maiorIdade + " anos." +
        "\nJagador com menor idade: " + jogadorMenorIdade + ", Com " + menorIdade + " anos." +
        "\n\nJogador com maior peso: " + jogadorMaiorPeso + ", Com " + maiorPeso.toFixed(2) + "kg." +
        "\nJagador com menor peso: " + jogadorMenorPeso + ", Com " + menorPeso.toFixed(2) + "kg." +
        "\n\nQuantidade de jogadores Masculinos: " + quantidadeMasculino +
        "\nQuantidade de jogadores Femininos: " + quantidadeFeminino +
        "\n\nJogador com a maior altura: " + maiorAltura.toFixed(2) +
        "\nJagador com a menor altura: " + menorAltura.toFixed(2) +
        "\n\nJagador com a maior quantidade de gols: " + jogadorMaisGols + ", Com " + maiorQuantidadeGols + " gols." +
        "\n\nJagador com  a maior quantidade de cartões amarelo: " + jogadorMaiorAmarelo + ", Com " + maiorCartoesAmarelos + " cartões." +
        "\nJagador com  a menor quantidade de cartões amarelo: " + jogadorMenorAmarelo + ", Com " + menorCartoesAmarelos + " cartões." +
        "\n\nJagador com  a maior quantidade de cartões vermelho: " + jogadorMaiorVermelho + ", Com " + maiorCartoesVermelho + " cartões." +
        "\nJagador com  a menor quantidade de cartões vermelho: " + jogadorMenorVermelho + ", Com " + menorCartoesVermelho + " cartões."
    );

}