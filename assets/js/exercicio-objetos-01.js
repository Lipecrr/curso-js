let carros = [
{
"marca": "Chevrolet",
"placa": "ABC1D23",
"modelo": "Onix",
"dataDeEmplacamento": "2022-03-15", 
"cor": "Preto"
},
{
"marca": "Volkswagen",
"placa": "XYZ4W56",
"modelo": "Gol",
"dataDeEmplacamento": "2025-07-22",
"cor": "Branco"
},
{
"marca": "Honda",
"placa": "KLM7N89",
"modelo": "Civic",
"dataDeEmplacamento": "2020-11-10",
"cor": "Prata"
},

{
"marca": "Ford",
"placa": "QRS5T67",
"modelo": "Fiesta",
"dataDeEmplacamento": "2023-02-05",
"cor": "Vermelho"
},

{
"marca": "Toyota",
"placa": "WXY9Z01",
"modelo": "Corolla",
"dataDeEmplacamento": "2019-08-30",
"cor": "Azul"
},
{
"marca": "Renault",
"placa": "VBC2M34",
"modelo": "Kwid",
"dataDeEmplacamento": "2021-05-18",
"cor": "Amarelo"
},
{
"marca": "Fiat",
"placa": "TZA3J56",
"modelo": "Argo",
"dataDeEmplacamento": "2022-09-27",
"cor": "Cinza"
}
];

let marcas = carros.map(carro => carro.marca);

let placaModelo = carros.map(carro => {
    return{
        placa: carro.placa,
        modelo: carro.modelo
    }
})

let carrosFiat = carros.filter(carro => carro.marca == "Fiat").map(carro => carro.modelo);

let carrosAzul = carros.filter(carro => carro.cor == "Azul").map(carro => {
    return {
        Marca: carro.marca,
        Modelo: carro.modelo
    }
})

let listaPorAno = carros.filter(carro =>{
    let ano = new Date(carro.dataDeEmplacamento).getFullYear();
    
    if(ano === 2025){
        return true;
    }
}
)
