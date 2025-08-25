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

function exercicio03() {
    let interrogacao = 0;
    let exclamacao = 0;
    let neutro = 0;
    let total = 0;

    let indice = 0;
    while (indice < 6) {
        let frase = prompt("Digite uma frase").trimEnd()
        let pontuacao = frase.substring(frase.length - 1);

        if (pontuacao === "?") {
            interrogacao = interrogacao + 1;
        } else if (pontuacao === "!") {
            exclamacao = exclamacao + 1;
        } else {
            neutro = neutro + 1;
        }
        indice = indice + 1;
    }

    total = interrogacao + exclamacao + neutro;
    alert("Perguntas: " + interrogacao + ", " + ((interrogacao / total) * 100).toFixed(1) + "%" +
        "\nExclamações: " + exclamacao + ", " + (((exclamacao / total) * 100).toFixed(1)) + "%" +
        "\nNeutras: " + neutro + ", " + (((neutro / total) * 100).toFixed(1)) + "%"
    )
}

function exercicio04() {
    let maisAntiga = 0;
    let maisRecente = 0;
    let chaveMaisAntiga = 999999999;
    let chaveMaisRecente = 0;
    let marco = 0;
    let dezembro = 0;

    let indice = 0;
    while (indice < 5) {
        let data = prompt("Digite data (dd/mm/aaaa)");
        let partes = data.split("/");
        let dia = partes[0].padStart(2, "0");
        let mes = partes[1].padStart(2, "0");
        let ano = partes[2];
        let chave = ano + mes + dia;
        chave = parseInt(chave);

        if (chave < chaveMaisAntiga) {
            maisAntiga = dia + "/" + mes + "/" + ano;
            chaveMaisAntiga = chave;
        }

        if (chave > chaveMaisRecente) {
            maisRecente = dia + "/" + mes + "/" + ano;
            chaveMaisRecente = chave;
        }

        if (mes === "03") {
            marco = marco + 1;
        } else if (mes === "12") {
            dezembro = dezembro + 1;
        }

        indice = indice + 1;
    }

    alert("Data mais antiga: " + maisAntiga +
        "\nData mais recente: " + maisRecente +
        "\nQuantidade em março: " + marco +
        "\nQuantidade em dezembro: " + dezembro);
}

function exercicio05() {
    let formatado = "";
    let invalido = 0;

    let indice = 0;
    while (indice < 4) {
        let telefone = prompt("Digite o numero de telefone").replaceAll(" ", "").replaceAll("(", "").replaceAll(")", "").replaceAll("-", "");
        let ddd, parte1, parte2;
        if (telefone.length === 10) {
            ddd = telefone.substring(0, 2);
            parte1 = telefone.substring(2, 6);
            parte2 = telefone.substring(6);
            formatado = formatado + "(" + ddd + ") " + parte1 + "-" + parte2 + "\n";
        } else if (telefone.length === 11) {
            ddd = telefone.substring(0, 2);
            parte1 = telefone.substring(2, 7);
            parte2 = telefone.substring(7);

            formatado = formatado + "(" + ddd + ") " + parte1 + "-" + parte2 + "\n";
        } else {
            invalido = invalido + 1;
        }
        indice = indice + 1;
    }
    console.log
        ("Numeros formatado: \n" + formatado +
            "Numeros invalidos: " + invalido
        )
}

function exercicio06() {
    let email = "";
    let gmail = 0;
    let outlook = 0;
    let yahoo = 0;
    let invalidos = 0;

    while (email !== "fim") {
        email = prompt("Digite seu email").trim().toLowerCase();

        if (email.includes("@")) {
            let partes = email.split("@");

            if (partes.length === 2 & partes[1].includes(".")) {
                let dominio = partes[1];

                if (dominio === "gmail.com") {
                    gmail = gmail + 1;
                } else if (dominio === "outlook.com") {
                    outlook = outlook + 1;
                } else if (dominio === "yahoo.com") {
                    yahoo = yahoo + 1;
                } else {
                    invalidos = invalidos + 1;
                }
            } else {
                invalidos = invalidos + 1;
            }
        } else {
            invalidos = invalidos + 1;
        }
    }
    alert(
        "Gmail:   " + gmail +
        "\nOutlook: " + outlook +
        "\nYahoo:   " + yahoo +
        "\nInválidos:" + invalidos);
}

function exercicio07() {
    let menorLen = 999999999;
    let menorFrase = "";
    let maiorLen = 0;
    let maiorFrase = "";

    let indice = 0;
    while (indice < 5) {
        let frase = prompt("Digite uma frase").trim()

        if (frase.length < menorLen) {
            menorLen = frase.length;
            menorFrase = frase;
        }

        if (frase.length > maiorLen) {
            maiorLen = frase.length;
            maiorFrase = frase;
        }

        indice = indice + 1;
    }

    alert("Menor frase: " + menorLen +
        "\n" + menorFrase +
        "\nMaior frase: " + maiorLen +
        "\n" + maiorFrase
    )
}

function exercicio08() {
    
}