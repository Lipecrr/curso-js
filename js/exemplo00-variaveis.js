function apresentarMensagemConsole() {
    console.log("hello world")

}


function apresentarMensagemUsuario() {
    alert("Minha primeira mensagem no JS o usuário")
}
// padrão de nomenclatura de funções em JS camelCase
function exemploVariaveisInteriras() {
    // padrão de nomenclatura de variáveis de JS é camelCase
    let numero1 = 7; // tipo inteiro
    let numero2 = 24; // tipo inteiro
    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}

function exemploVariaveisString() {
    let nome = "John";
    let nomeComposto = "Thiago"
    let sobrenome = "Doe";
    // o "+" tem afunção de soma e concatenação
    // Concatenação juntar duas coisa "Ana" "Maria" "AnaMaria"
    // John Thiago Doe
    let nomeCompleto = nome + " " + nomeComposto + " " + sobrenome;
    alert("Nome Completo: " + nomeCompleto)
}

function exemploVariaveisFloat() {
    let precoAbacaxi = 12.39;
    let precoSwitch2 = 4500.00;

    let total = precoAbacaxi + precoSwitch2;
    alert("Total: " + total);
}

function exempoMercado() {
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

//Título: Exercícios 2025-08-01

//Exercício 01: Criar uma função exercicio01, apresentar a seguinte mensagem "SuperDev 7ª Edição"
function exercicio01() {
    let mensagem1 = "SuperDev 7ª Edição"

    console.log(mensagem1)
    alert(mensagem1);
}

/*Exercício 02: Criar uma função exercicio02, criar as variáveis abaixo para armazenar:
- seu nome (string)
- sua idade (int)
- seu peso 
- sua altura
Apresentar os seus dados no console. 
*/

function exercicio02() {
    let nome = "Felipe";
    let idade = 26;
    let peso = 66.00;
    let altura = 1.67;

    console.log(
        "Nome: " + nome +
        "\nIdade: " + idade +
        "\nPeso: " + peso +
        "\nAltura: " + altura
    )
    alert(
        "Nome: " + nome +
        "\nIdade: " + idade +
        "\nPeso: " + peso +
        "\nAltura: " + altura
    )
}

/*Exercício 03: Criar uma função exercicio03, criar as variáveis abaixo para armazenar:
- personagem
- raça
- skill
- país de origem
- rota
Para 3 personagens
*/

function exercicio03() {

    let personagem1 = "Udyr";
    let raca1 = "Humano";
    let skill1 = "Xamanismo";
    let pais1 = "Freljord";
    let rota1 = "Jungle/Top"

    let personagem2 = "Ornn";
    let raca2 = "Semideus"
    let skill2 = "Deus do fogo e da forja"
    let pais2 = "Freljord";
    let rota2 = "top";

    let personagem3 = "Rakan";
    let raca3 = "vastaya";
    let skill3 = "Suporte com alta mobilidade";
    let pais3 = "Ionia";
    let rota3 = "Suporte"

    console.log(
        "Nome: " + personagem1 +
        "\nRaça: " + raca1 +
        "\nskill: " + skill1 +
        "\nPais: " + pais1 +
        "\nRota: " + rota1 +

        "\n\nNome: " + personagem2 +
        "\nRaça: " + raca2 +
        "\nskill: " + skill2 +
        "\nPais: " + pais2 +
        "\nRota: " + rota2 +

        "\n\nNome: " + personagem3 +
        "\nRaça: " + raca3 +
        "\nskill: " + skill3 +
        "\nPais: " + pais3 +
        "\nRota: " + rota3
    )

    alert(
        "Nome: " + personagem1 +
        "\nRaça: " + raca1 +
        "\nskill: " + skill1 +
        "\nPais: " + pais1 +
        "\nRota: " + rota1 +

        "\n\nNome: " + personagem2 +
        "\nRaça: " + raca2 +
        "\nskill: " + skill2 +
        "\nPais: " + pais2 +
        "\nRota: " + rota2 +

        "\n\nNome: " + personagem3 +
        "\nRaça: " + raca3 +
        "\nskill: " + skill3 +
        "\nPais: " + pais3 +
        "\nRota: " + rota3
    )
}

/*
Exercício 04: ...., com as variáveis:
- Nome
- Peso
- Altura
Calcular IMC do paciente
*/

function exercicio04() {
    let nome = "Ana"
    let peso = 50.00 //KG
    let altura = 1.61 //Metros

    //let alturaX2 = altura * altura;
    let resultadoIMC = peso / (altura * altura);
    let resultado04 = resultadoIMC.toFixed(2);

    console.log(
        "Nome: " + nome +
        "\npeso: " + peso +
        "\naltura: " + altura +
        "\n\nIMC do paciente: " + resultado04);
    alert(
        "Nome: " + nome +
        "\npeso: " + peso +
        "\naltura: " + altura +
        "\n\nIMC do paciente: " + resultado04);

}

/*
Exercício 05: ...:
- Numero1
- Numero2 
Apresentar soma, subtração, multiplicação e divisão
*/

function exercicio05() {
    let numero1 = 13;
    let numero2 = 5;

    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    console.log(
        "Primeiro número: " + numero1 +
        "\nSegundo número: " + numero2 +
        "\n\nSoma: " + soma +
        "\nSubtração: " + subtracao +
        "\nmultiplicação: " + multiplicacao +
        "\nDivisão: " + divisao
    )
    alert(
        "Primeiro número: " + numero1 +
        "\nSegundo número: " + numero2 +
        "\n\nSoma: " + soma +
        "\nSubtração: " + subtracao +
        "\nmultiplicação: " + multiplicacao +
        "\nDivisão: " + divisao
    )
}

/*
Exercício 06: Solicitar para o usuário:
- Modelo e Preço Placa Mãe
- Modelo e Preço Placa de Vídeo
- Modelo e Preço Processador
- Modelo e Preço Memória RAM
- Modelo e Preço Fonte
Apresentar todos os dados e total do computador (soma das peças)
*/

function exercicio06() {
    let placaMaeModelo = document.getElementById("placaMaeModelo").value;
    let placaMaePreco = parseFloat(document.getElementById("placaMaePreco").value);

    let placaVideoModelo = document.getElementById("placaVideoModelo").value;
    let placaVideoPreco = parseFloat(document.getElementById("placaVideoPreco").value);

    let processadorModelo = document.getElementById("processadorModelo").value;
    let processadorPreco = parseFloat(document.getElementById("processadorPreco").value);

    let ramModelo = document.getElementById("ramModelo").value;
    let ramPreco = parseFloat(document.getElementById("ramPreco").value);

    let fonteModelo = document.getElementById("fonteModelo").value;
    let fontePreco = parseFloat(document.getElementById("fontePreco").value);

    let valorTotal = placaMaePreco + placaVideoPreco + processadorPreco + ramPreco + fontePreco;

    document.getElementById("resultado06").innerHTML =
        "<strong>Informações sobre o PC:</strong>" +
        "<span>" + "Placa Mãe: " + placaMaeModelo + "</span>" +
        "<p>" + "Valor: " + "R$ " + placaMaePreco.toFixed(2) + "</p>" +
        "<span>" + "Placa de vídeo: " + placaVideoModelo + "</span>" +
        "<p>" + "Valor: " + "R$ " + placaVideoPreco.toFixed(2) + "</p>" +
        "<span>" + "Processador: " + processadorModelo + "</span>" +
        "<p>" + "Valor: " + "R$ " + processadorPreco.toFixed(2) + "</p>" +
        "<span>" + "Memória RAM: " + ramModelo + "</span>" +
        "<p>" + "Valor: " + "R$ " + ramPreco.toFixed(2) + "</p>" +
        "<span>" + "Fonte: " + fonteModelo + "</span>" +
        "<p>" + "Valor: " + "R$ " + fontePreco.toFixed(2) + "</p>" +
        "<strong>Valor total do PC:</strong>" + "</strong>" +
        "<span>" + "R$ " + valorTotal.toFixed(2) + "</span>";

    console.log(
        "Informações sobre o PC" +
        "\n\nPlaca Mãe: " + placaMaeModelo +
        "\nValor: " + "R$ " + placaMaePreco.toFixed(2) +
        "\n\nPlaca de video: " + placaVideoModelo +
        "\nValor: " + "R$ " + placaVideoPreco.toFixed(2) +
        "\n\nProcessador: " + processadorModelo +
        "\nValor: " + "R$ " + processadorPreco.toFixed(2) +
        "\n\nMemoria RAM: " + ramModelo +
        "\nValor: " + "R$ " + "R$" + ramPreco.toFixed(2) +
        "\n\nFonte: " + fonteModelo +
        "\nValor: " + "R$ " + fontePreco.toFixed(2) +
        "\n\n\nValor total do PC: " + "R$ " + valorTotal.toFixed(2)
    )

    alert(
        "Informações sobre o PC" +
        "\n\nPlaca Mãe: " + placaMaeModelo +
        "\nValor: " + "R$ " + placaMaePreco.toFixed(2) +
        "\n\nPlaca de video: " + placaVideoModelo +
        "\nValor: " + "R$ " + placaVideoPreco.toFixed(2) +
        "\n\nProcessador: " + processadorModelo +
        "\nValor: " + "R$ " + processadorPreco.toFixed(2) +
        "\n\nMemoria RAM: " + ramModelo +
        "\nValor: " + "R$ " + ramPreco.toFixed(2) +
        "\n\nFonte: " + fonteModelo +
        "\nValor: " + "R$ " + fontePreco.toFixed(2) +
        "\n\n\nValor total do PC: " + "R$ " + valorTotal.toFixed(2)
    )

}

//Exercício 07: Procurar sobre if, if else, if else if

function exercicio07If() {
    let idade1 = parseFloat(document.getElementById("idade1").value);


    if (idade1 >= 18) {
        document.getElementById("resultadoIf").innerHTML = "Maior de idade";
        console.log("Maior de idade");
    }
}

function exercicio07IfElse() {
    let idade2 = parseFloat(document.getElementById("idade2").value);
    let maiorOuMenor;

    if (idade2 >= 18) {
        maiorOuMenor = "Maior de idade";
    } else {
        maiorOuMenor = "Menor de idade";
    }

    document.getElementById("resultadoIfElse").innerHTML = maiorOuMenor;
    console.log(maiorOuMenor);
}

function exercicio07IfElseIf() {
    let idade3 = parseFloat(document.getElementById("idade3").value);
    let faseDaVida;

    if (idade3 >= 0 && idade3 <= 11) {
        faseDaVida = "Criança";
    } else if (idade3 >= 12 && idade3 <= 17) {
        faseDaVida = "Adolescente";
    } else if (idade3 >= 18 && idade3 <= 59) {
        faseDaVida = "Adulto";
    } else if (idade3 >= 60) {
        faseDaVida = "Idoso";
    } else {
        faseDaVida = "Idade inválida";
    }

    document.getElementById("resultadoIfElseIf").innerHTML = faseDaVida;
}

//Exercício 08: While

function exercicio08() {
    let idade = 26;
    let chute;

    while (chute != idade) {
        chute = prompt("Acerte a idade do Felipe entre 0 à 60 anos");

        if (chute == idade) {
            alert(`Você acertou a idade do Felipe, ${idade} anos`);
        } else {
            if (chute > idade) {
                alert(`A idade é menor que ${chute}`);
            } else {
                alert(`A idade é maior que ${chute}`);
            }
        }
    }
}




//Exercício 09: Vetor

//Vetor inicial.
let nomes = ["Ana", "Felipe", "João"];

//Mostra os nomes na tela.
function mostrarNomes() {
    //nomes.join(", "): transforma o vetor em uma string separada por vírgulas.
    //textContent: coloca essa string no parágrafo com id resultado.
    document.getElementById("resultado09").textContent = nomes.join(", ");
}

//Adiciona um novo nome ao vetor.
function adicionarNome() {
    let input = document.getElementById("novoNome");
    //pega o que o usuário digitou. /remove espaços extras.
    let nome = input.value.trim();

    if (nome !== "") {
        //adiciona o nome ao vetor.
        nomes.push(nome);
        //limpa o campo de texto.
        input.value = "";
        //atualiza os nomes mostrados na tela.
        mostrarNomes();
    }
}

//Chama a função ao final para garantir que os nomes iniciais apareçam assim que a página abrir.
mostrarNomes();




//Exercício 10: For

function exercicio10() {
    //Pega o elemento <ul> do HTML e armazena na variável.
    let lista = document.getElementById("lista-numeros");

/*
Início do loop for.
Começa com i = 1.
Executa enquanto i for menor ou igual a 5.
A cada repetição, incrementa i em 1.
*/
    for (let i = 1; i <= 5; i++) {
        //Cria um novo elemento <li>.
        const item = document.createElement("li");
        item.textContent = `Número ${i}`;
        //Adiciona o novo <li> como filho da lista <ul>
        lista.appendChild(item);
    }
}