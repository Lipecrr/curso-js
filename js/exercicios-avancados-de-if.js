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

function exercicio05() {
    let x = parseFloat(prompt("Digite o valor de X:").replace(",", "."));
    let y = parseFloat(prompt("Digite o valor de Y:").replace(",", "."));

    if (x === 0 && y === 0) {
        alert("Origem");
    } else if (x === 0) {
        alert("Eixo Y");
    } else if (y === 0) {
        alert("Eixo X");
    } else if (x > 0 && y > 0) {
        alert("Quadrante 1");
    } else if (x < 0 && y > 0) {
        alert("Quadrante 2");
    } else if (x < 0 && y < 0) {
        alert("Quadrante 3");
    } else if (x > 0 && y < 0) {
        alert("Quadrante 4");
    }
}

function exercicio06() {
    let media = parseFloat(prompt("Digite sua média:").replace(",", "."));
    let renda = parseFloat(prompt("Digite sua renda Familiar:").replace(",", "."));
    let moradores = parseInt(prompt("Digite quantas pessoas moram em sua casa:"));
    let capita = renda / moradores;

    if (media >= 8 && capita <= 1320) {
        alert("Bolsa integral");
    } else if (media >= 7 && capita <= 1980) {
        alert("Bolsa parcial");
    } else {
        alert("Sem bolsa")
    }
}

function exercicio07() {
    let salario = parseFloat(prompt("Digite o salário:").replace(",", "."));
    let tempoEmprego = parseInt(prompt("Digite em meses quantos tempo tem de emprego:"));
    let valorParcela = parseFloat(prompt("Digite o valor da parcela:").replace(",", "."));
    let negativado = prompt("Esta negativado (Sim ou Não):").toLowerCase().replace("ã", "a");

    if (negativado === "nao" && tempoEmprego >= 6 && valorParcela <= 0.3 * salario) {
        alert("Empréstimo aprovado.");
    } else {
        if (negativado === "sim") {
            if (tempoEmprego >= 6 && valorParcela <= 0.3 * salario) {
                alert("Empréstimo recusado por motivo de estar negativado.");
            } else if (tempoEmprego < 6 && valorParcela <= 0.3 * salario) {
                alert("Empréstimo recusado por motivo de estar negativado e tempo de empresa inferior a 6 meses.");
            } else if (tempoEmprego >= 6 && valorParcela > 0.3 * salario) {
                alert("Empréstimo recusado por motivo de estar negativado e valor da parcela maior que 30% do salario.");
            } else if (tempoEmprego < 6 && valorParcela > 0.3 * salario) {
                alert("Empréstimo recusado por motivo de estar negativado, tempo de empresa inferior a 6 meses e valor da parcela maior que 30% do salario.");
            }
        } else if (tempoEmprego < 6) {
            if (negativado === "não" && valorParcela <= 0.3 * salario) {
                alert("Empréstimo recusado por motivo de tempo de empresa inferior a 6 meses.");
            } else if (negativado === "não" && valorParcela > 0.3 * salario) {
                alert("Empréstimo recusado por motivo de tempo de empresa inferior a 6 meses e valor da parcela maior que 30% do salario.");
            }
        } else if (valorParcela > 0.3 * salario) {
            alert("Empréstimo recusado por motivo de valor da parcela maior que 30% do salario.")
        }
    }
}

function exercicio08() {
    let velocida = parseInt(prompt("Em qual velocidade o veiculo esta:"));
    let limteVia = parseInt(prompt("Qual o limite da via:"));

    if (velocida <= limteVia) {
        alert("Dentro do limite.");
    } else if (velocida <= limteVia * 1.20) {
        alert("Infração leve.");
    } else if (velocida <= limteVia * 1.50) {
        alert("Infração grave");
    } else {
        alert("Infração gravíssima.");
    }
}

function exercicio09() {
    let hora = parseInt(prompt("Digite a hora (0 - 23):"));

    if (hora >= 5 && hora <= 11) {
        alert("Bom dia.");
    } else if (hora >= 12 && hora <= 17) {
        alert("Bom tarde.");
    } else if (hora >= 18 && hora <= 23 || hora >= 0 && hora <= 4) {
        alert("Boa noite.");
    } else {
        alert("Hora inválida.");
    }
}

function exercicio10() {
    let plano = prompt("Digite qual plano quer adquirir (Basic, Plus ou Pro):").trim().toLowerCase();
    let extra;
    let valor = 0;
    let valorExtra = 0;
    let valorTotal;

    if (plano === "basic") {
        valor = 39;
        extra = prompt("Quer internet extra (sim ou não):").trim().toLowerCase().replace("ã", "a");
        if (extra === "sim") {
            alert("Internet extra indisponivel para plano Basic.");
        }
    } else if (plano === "plus") {
        valor = 59;
        extra = prompt("Quer internet extra (sim ou não):").trim().toLowerCase().replace("ã", "a");
        if (extra === "sim") {
            valorExtra = 15;
        }
    } else if (plano === "pro") {
        valor = 79;
        extra = prompt("Quer internet extra (sim ou não):").trim().toLowerCase().replace("ã", "a");
        if (extra === "sim") {
            valorExtra = 15;
        }
    }

    valorTotal = valor + valorExtra;
    plano = plano.toUpperCase();

    alert("Você escolheu o plano " + plano +
        "\nValor total do plano: R$ " + valorTotal + ",00"
    );
}

function exercicio11() {
    let data = prompt("Verifique se a data é valida (DD/MM/AAAA):").trim();
    let partesData = data.split("/");
    let dia = parseInt(partesData[0]);
    let mes = parseInt(partesData[1]);
    let ano = parseInt(partesData[2]);
    let valido;

    if (mes >= 1 && mes <= 12) {
        if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
            if (dia >= 1 && dia <= 31) {
                valido = "Data válida";
            } else {
                valido = "Data inválida";
            }
        } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
            if (dia >= 1 && dia <= 30) {
                valido = "Data válida";
            } else {
                valido = "Data inválida";
            }
        } else if (mes === 2) {
            if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
                if (dia >= 1 && dia <= 29) {
                    valido = "Data válida";
                } else {
                    valido = "Data inválida";
                }
            } else {
                if (dia >= 1 && dia <= 28) {
                    valido = "Data válida";
                } else {
                    valido = "Data inválida";
                }
            }
        }
    } else {
        valido = "Data inválida.";
    }
    alert(valido);
}

function exercicio12() {
    let kWH = parseFloat(prompt("Digite o KWh:").replace(",", "."));
    let tarifaSocial = prompt("Tem tarifa social (Sim ou Não):").trim().toLowerCase().replace("ã", "a");
    let valor = 0;

    if (kWH <= 0) {
        alert("Você digitou valor zerado.");
    } else {
        if (kWH <= 100) {
            valor = kWH * 0.60;
        } else if (kWH > 100 && kWH < 200) {
            valor = kWH * 0.75;
        } else if (kWH >= 200) {
            valor = kWH * 0.90;
        }
    }

    if (tarifaSocial === "sim" && kWH <= 150) {
        valor = valor * 0.85;
    }

    alert("O valor da sua conta é: R$ " + valor.toFixed(2));
}

function exercicio13() {
    let idade = parseInt(prompt("Digite sua idade:"));
    let estudante = prompt("É estudante (Sim ou não):").trim().toLowerCase().replace("ã", "a");
    let ingresso;

    if (idade > 0 && idade < 12 || idade >= 60 || estudante === "sim") {
        if (idade > 0 && idade < 12 && estudante === "sim") {
            ingresso = "Meia entrada por ter menos que 12 anos e ser estudante."
        } else if (idade >= 60) {
            ingresso = "Meia entrada por ter 60 ou mais anos.";
        } else if (estudante === "sim") {
            ingresso = "Meia entrada por ser estudante.";
        } else if (idade > 0 && idade < 12) {
            ingresso = "Meia entrada por ter menos que 12 anos.";
        }
    } else {
        ingresso = "Entrada inteira.";
    }

    alert(ingresso);
}

function exercicio14() {
    let numero1 = parseInt(prompt("Digite o primeiro número (1 a 6):"));
    let numero2 = parseInt(prompt("Digite o segundo número (1 a 6):"));
    let numero3 = parseInt(prompt("Digite o terceiro número (1 a 6):"));

    if (numero1 < 1 || numero1 > 6 ||
        numero2 < 1 || numero2 > 6 ||
        numero3 < 1 || numero3 > 6) {
        alert("Números inválidos! Digite apenas de 1 a 6.");
    } else if (numero1 === numero2 && numero2 === numero3) {
        alert("Trinca!");
    } else if (numero1 === numero2 && numero1 !== numero3 ||
        numero1 === numero3 && numero1 !== numero2 ||
        numero2 === numero3 && numero2 !== numero1) {
        alert("Par!");
    } else if (numero1 > numero2 && numero2 > numero3 ||
        numero1 > numero3 && numero3 > numero2 ||
        numero2 > numero1 && numero1 > numero3 ||
        numero2 > numero3 && numero3 > numero1 ||
        numero3 > numero1 && numero1 > numero2 ||
        numero3 > numero2 && numero2 > numero1) {
        alert("Sequência!");
    } else {
        alert("Sem combinação!");
    }
}

function exercicio15() {
    let estoque = parseInt(prompt("Digite a quantidade em estoque:"));
    let minimo = parseInt(prompt("Digite o estoque minimo:"));

    if (estoque < 0) {
        alert("Estoque negativo!");
    } else if (estoque = 0) {
        alert("Esgotado!");
    } else if (estoque > 0 && estoque <= minimo) {
        alert("Crítico.");
    } else if (estoque > minimo && estoque < minimo * 2) {
        alert("Baixo.");
    } else if (estoque >= minimo * 2) {
        alert("Ok.");
    }
}

function exercicio16() {
    let valor = parseFloat(prompt("Digite o valor da conta:").replace(",", "."));
    let qualidade = prompt("Digite a qualidade do serviço (Ruim, Ok ou Ótimo):").trim().toLowerCase().replace("ó", "o");
    let nPessoas = parseInt(prompt("Digite a quantidade de pessoas:"));
    let taxaServiço = prompt("Deseja pagar a taxa de serviço (Sim ou Não):").trim().toLowerCase().replace("ã", "a");
    let gorjeta, valorTotal, valorTotalPorPessoa;
    let valorTaxaServiço = 0;

    if (nPessoas < 1) {
        alert("Informe pelo menos umas pessoa.")
    }

    if (qualidade === "ruim") {
        gorjeta = 0.05;
    } else if (qualidade === "ok") {
        gorjeta = 0.10;
    } else if (qualidade === "otimo") {
        gorjeta = 0.15;
    }

    if (taxaServiço === "sim") {
        valorTaxaServiço = 0.10;
    }

    valorTotal = valor + (valor * gorjeta) + (valor * valorTaxaServiço);
    valorTotalPorPessoa = valorTotal / nPessoas;

    alert("Valor Total: R$" + valorTotal.toFixed(2) +
        "\nValor por pessoa: R$" + valorTotalPorPessoa.toFixed(2)
    )

}

function exercicio17() {
    let peso = parseFloat(prompt("Digite o pesdo do frete:").replace(",", "."));
    let distancia = parseFloat(prompt("Digite a distancia:").replace(",", "."));
    let valorPeso, valorDistancia, valorFrete;

    if (peso > 30) {
        alert("Carga não aceita");
    }
    else if (peso <= 2) {
        valorPeso = 12;
    } else if (peso <= 10) {
        valorPeso = 25;
    } else if (peso > 10) {
        valorPeso = 40;
    }

    if (distancia <= 100) {
        valorDistancia = 0;
    } else if (distancia > 100 && distancia <= 500) {
        valorDistancia = 15;
    } else {
        valorDistancia = 30;
    }

    valorFrete = valorPeso + valorDistancia;

    alert("Valor do frete: R$" + valorFrete);
}

function exercicio18() {
    let diaSemana = prompt("Digite o dia da semana (1-Domingo ... 7-Sabado)").trim().toLowerCase();
    let hora = parseFloat(prompt("Digite a hora de funcionamento:").trim().replace(",", ".").replace(":", ".").replace("/", "."));
    let feriado = prompt("É feriado (Sim ou Não):").trim().toLowerCase().replace("ã", "a");
    let diaSemanaN, estado;

    if (diaSemana === "domingo" || diaSemana === "1") {
        diaSemanaN = 1;
    } else if (diaSemana === "segunda" || diaSemana === "2") {
        diaSemanaN = 2;
    } else if (diaSemana === "terca" || diaSemana === "terça" || diaSemana === "3") {
        diaSemanaN = 3;
    } else if (diaSemana === "quarta" || diaSemana === "4") {
        diaSemanaN = 4;
    } else if (diaSemana === "quinta" || diaSemana === "5") {
        diaSemanaN = 5;
    } else if (diaSemana === "sexta" || diaSemana === "6") {
        diaSemanaN = 6;
    } else if (diaSemana === "sabado" || diaSemana === "7") {
        diaSemanaN = 7;
    }

    if (diaSemanaN >= 2 && diaSemanaN <= 6 && hora >= 9 && hora <= 18) {
        if (feriado === "sim") {
            estado = "Fechado";
        } else {
            estado = "Aberto";
        }
    } else if (diaSemanaN === 7 && hora >= 9 && hora <= 13) {
        if (feriado === "sim") {
            estado = "Fechado";
        } else {
            estado = "Aberto";
        }
    } else if (diaSemanaN === 1) {
        estado = "Fechado";
    }

    alert(estado);
}

function exercicio19() {
    let nota1 = parseFloat(prompt("Digite a primeira nota (1-10):").replace(",", "."));
    let nota2 = parseFloat(prompt("Digite a segunda nota (1-10):").replace(",", "."));
    let nota3 = parseFloat(prompt("Digite a terceira nota (1-10):").replace(",", "."));
    let media = (nota1 + nota2 + nota3) / 3;

    if (nota1 < 1 || nota1 > 10 || nota2 < 1 || nota2 > 10 || nota3 < 1 || nota3 > 10) {
        alert("Nota inválida");
    } else {
        if (media >= 7) {
            alert("Aprovado");
        } else if (media >= 5 && media <= 6.9) {
            alert("Recuperação")
        } else {
            alert("Reprovado");
        }
    }
}

function exercicio20() {
    let pedirPerfil = prompt("Digite seu nivel de acesso(1-Usuário; 2-Gestor; 3-Admin):").trim().toLowerCase().replace("á", "a");
    let chave = parseInt(prompt("Digite sua chave de segurança:").trim());
    let perfil;

    if (pedirPerfil === "usuario" || pedirPerfil === "1") {
        perfil = 1;
    } else if (pedirPerfil === "gestor" || pedirPerfil === "2") {
        perfil = 2;
    } else if (pedirPerfil === "admin" || pedirPerfil === "3") {
        perfil = 3;
    }

    if (perfil === 1) {
        alert("Acesso liberado");
    } else if (perfil === 2) {
        if (chave % 2 === 0) {
            alert("Acesso liberado");
        } else {
            alert("Acesso negado" +
                "\nA chave deve ser par!"
            );
        }
    } else if (perfil === 3) {
        if (chave % 5 === 0 && chave > 100) {
            alert("Acesso liberado");
        } else {
            alert("Acesso negado" +
                "\nA chave deve ser multiplo de 5 e maior que 100!"
            );
        }
    }
}

function exercicio21() {
    let etanol = parseFloat(prompt("Digite o valor do Etanol:").replace(",", "."));
    let gasolina = parseFloat(prompt("Digite o valor do Gasolina:").replace(",", "."));
    let razao = etanol / gasolina;

    if (etanol <= 0.7 * gasolina) {
        alert("Vale a pena abastecer com ETANOL! " + "R$ " + razao.toFixed(2));
    } else {
        alert("Vale a pena abastecer com GASOLINA! " + "R$ " + razao.toFixed(2))
    }
}

function exercicio22() {
    let senha = prompt("Digite a senha (Mínimo 6 dígitos):").trim().toLowerCase();
    let confirmarSenha = prompt("Confirme sua senha:").trim().toLowerCase();

    if (senha === "" || confirmarSenha === "") {
        alert("Senha inválida.");
    } else if (senha !== confirmarSenha) {
        alert("Senhas não coincidem.");
    } else if (senha.length < 6) {
        alert("Senha dever ter pelo menos 6 dígitos.");
    } else {
        alert("Senha cadastrada.");
    }
}

function exercicio23() {
    let temperatura = parseFloat(prompt("Digite a temperatura:").trim().replace(",", "."));
    if (temperatura < 0) {
        alert("Congelante");
    } else if (temperatura >= 0 && temperatura <= 14) {
        alert("Frio");
    } else if (temperatura >= 15 && temperatura <= 25) {
        alert("Agradável");
    } else if (temperatura >= 26 && temperatura <= 35) {
        alert("Quente");
    } else {
        alert("Muito quente");
    }
}

function exercicio24() {
    let horaProva = parseFloat(prompt("Digite a hora de entrada (0–23):").trim().replace(",", ".").replace(":", "."));
    let tempoProva = parseFloat(prompt("Digite o tempo de prova (em minutos):").trim().replace(",", ".").replace(":", "."));

    if (horaProva >= 8 && horaProva <= 10) {
        alert("Entrada permitida.");
    } else if (horaProva === 10) {
        if (tempoProva <= 120) {
            alert("Entrada permitida.");
        } else {
            alert("Entrada negada.");
        }
    } else {
        alert("Entrada negada.");
    }
}

function exercicio25() {
    let idade = parseInt(prompt("Digite sua idade:"));
    let cNH = parseInt(prompt("Digite quantos anos tem CNH:"));
    let sinistro = prompt("Ouve sinistro nos ultimos 12 meses (Sim ou Não):").trim().toLowerCase().replace("ã", "a");
    let franquia = 1500;

    if (idade >= 21 && cNH >= 2 && sinistro === "nao") {
        if (idade < 25 || cNH < 3) {
            sinistro = sinistro * 0.20;
        }
        alert("Condutor elegível. Valor da franquia: R$ " + franquia);
    } else {
        alert("Condutor não elegível para o seguro.");
    }
}