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
    console.log(produtos.padEnd(20, " " ) + precos + "\n");

}