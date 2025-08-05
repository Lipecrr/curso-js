function converterStringParaInt(){
    const anoFabricacaoEntradaUsuario = "2024"; //String
    const anoFabricacao = parseInt(anoFabricacaoEntradaUsuario);
    alert("Ano Fabricação: " + anoFabricacao);
}

function converterStringParaFloat(){
    const precoDoCarro = "299800.10";
    const preco = parseFloat(precoDoCarro);
    alert("Preço: " + preco);
}

converterStringParaFloat();