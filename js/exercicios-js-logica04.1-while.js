function exercicio01() {
    let desejaCadastrar = "sim";
    let total = 0;
    let quantidade = 0;
    let maiorPreco = 0;
    let nomeMaisCaro = "";

    let produtos = "";
    let precos = 0;
    while (desejaCadastrar === "sim") {
        let produto = "";
        let valor = 0;


        while (produto.length < 2) {
            produto = prompt("Digite o produto").trim();

            if (produto.length < 2) {
                alert("O minimo de digitos deve ser 2");
            }
        }

        valor = parseFloat(prompt("Digite o valor do produto").trim().replace(",", ".").replace("R$", ""));

        produtos = produtos + produto;
        precos = precos + valor;

        if (valor > maiorPreco) {
            maiorPreco = valor;
            nomeMaisCaro = produto;
        }

        total = total + valor;
        quantidade = quantidade + 1;

        desejaCadastrar = prompt("Deseja cadastrar outro produto").trim().toLowerCase().replace("ã", "a");
    }

    alert("Total: R$ " + total +
        "\nQuantidade: " + quantidade +
        "\nMeior Preço: R$ " + maiorPreco +
        "\nNome do mais caro: " + nomeMaisCaro
    )
    console.log(produtos.padEnd(20, " ") + precos + "\n");
}

function exercicio02() {
    let indice = 0;
    let invalidos = 0;
    let validos = 0;
    let idV = 0, nomeV = 0, cpfV = 0, dataV = 0;

    while (indice < 5) {
        let csv = prompt("Digite as informações (id;nome;cpf;aaaa-mm-dd)").trim();
        let csvPartes = csv.split(";");

        if (csvPartes.length === 4) {
            let id = csvPartes[0].replace(/\D/g, "");
            let nome = csvPartes[1].trim();
            let cpf = csvPartes[2];
            let data = csvPartes[3];


            if (id === "" || id <= 0) {
                idV = idV + 1;
                invalidos = invalidos + 1;
            }
            if (nome.length < 3) {
                nomeV = nomeV + 1;
                invalidos = invalidos + 1;
            }
            if (cpf.length !== 14
                || cpf.charAt(3) !== "."
                || cpf.charAt(7) !== "."
                || cpf.charAt(11) !== "-") {
                cpfV = cpfV + 1;
                invalidos = invalidos + 1;
            }
            if (data.length !== 10
                || data.charAt(4) !== "-"
                || data.charAt(7) !== "-") {
                dataV = dataV + 1;
                invalidos = invalidos + 1;
            }

        } else { alert("Quantidade de campos incorreto") };

        indice = indice + 1;
        validos = 20 - invalidos;
    }

    alert("Validos: " + validos +
        "\nInvalidos: " + invalidos +
        "\nID invalidos: " + idV +
        "\nNomes invalidos: " + nomeV +
        "\nCPF invalidos: " + cpfV +
        "\nDatas Invalidas: " + dataV
    )
}

function exercicio03(){
    
}