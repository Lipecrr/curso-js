function apresentarMensagemConsole() {
    console.log("hello world")

}


function apresentarMensagemUsuario() {
    alert ("Minha primeira mensagem no JS o usuário")
}
// padrão de nomenclatura de funções em JS camelCase
function exemploVariaveisInteriras() {
    // padrão de nomenclatura de variáveis de JS é camelCase
    let numero1 = 7; // tipo inteiro
    let numero2 = 24; // tipo inteiro
    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}

function exemploVariaveisString(){
    let nome = "John";
    let nomeComposto = "Thiago"
    let sobrenome = "Doe";
    // o "+" tem afunção de soma e concatenação
    // Concatenação juntar duas coisa "Ana" "Maria" "AnaMaria"
    // John Thiago Doe
    let nomeCompleto = nome + " " + nomeComposto + " " + sobrenome;
    alert("Nome Completo: " + nomeCompleto)
}

function exemploVariaveisFloat(){
    let precoAbacaxi = 12.39;
    let precoSwitch2 = 4500.00;

    let total = precoAbacaxi + precoSwitch2;
    alert("Total: " + total);
}

function exempoMercado(){
    let produto1nome = "Cerveja";
    let produto1Quantidade = 12;
    let produto1Preco = 5.30;
    let produto1Total = produto1Quantidade * produto1Preco;

    let produto2Nome = "Amendoim";
    let produto2Quantidade = 2;
    let produto2Preco = 8.00;
    let produto2Total = produto2Quantidade + produto2Preco;

    let totalCompra = produto1Total + produto2Total;

    alert(
        "Produto 1: " + produto1nome +
        "\nQuantidade: " + produto1Quantidade +
        "\nPreço Unitário: " + produto1Preco +
        "\nValor: " + produto1Total +
        "\n\nProduto 2: " + produto2Nome +
        "\nQuantidade: " + produto2Quantidade +
        "\nPreço Unitário: " + produto2Preco +
        "\nValor: " + produto2Total +
        "\n\nTotal: " + totalCompra
    )
}

//-------------------------------------------------------------------------------------
//Exercicios

//Exercicio 01
function exercicio01(){
    let mensagem = "SuperDev 7ª Edição"

    alert(mensagem);
}
/*
Título: Exercícios 2025-08-01
Exercício 01: Criar uma função exercicio01, apresentar a seguinte mensagem "SuperDev 7ª Edição"
Exercício 02: Criar uma função exercicio02, criar as variáveis abaixo para armazenar:
- seu nome (string)
- sua idade (int)
- seu peso 
- sua altura
Apresentar os seus dados no console.
Exercício 03: Criar uma função exercicio03, criar as variáveis abaixo para armazenar:
- personagem
- raça
- skill
- país de origem
- rota
Para 3 personagens
Exercício 04: ...., com as variáveis:
- Nome
- Peso
- Altura
Calcular IMC do paciente
Exercício 05: ...:
- Numero1
- Numero2 
Apresentar soma, subtração, multiplicação e divisão
Exercício 06: Solicitar para o usuário:
- Modelo e Preço Placa Mãe
- Modelo e Preço Placa de Vídeo
- Modelo e Preço Processador
- Modelo e Preço Memória RAM
- Modelo e Preço Fonte
Apresentar todos os dados e total do computador (soma das peças)
Exercício 07: Procurar sobre if, if else, if else if
Exercício 08: While
Exercício 09: Vetor
Exercício 10: For
*/