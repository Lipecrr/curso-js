let body = document.getElementsByTagName("body")[0];
let ul = document.createElement("ul");

function criarTitulo() {
    let titulo = document.createElement("h1");
    titulo.innerText = "Minhas Tarefas do Curso SuperDev";
    body.appendChild(titulo);
}

function criarInput() {
    let label = document.createElement("label");
    label.innerText = "Digite a tarefa";
    label.for = "campo-tarefa";
    let input = document.createElement("input");
    input.type = "text";
    input.id = "campo-tarefa";
    let labelData = document.createElement("label");
    labelData.innerText = "Digite a data";
    labelData.for = "campo-data";
    let inputData = document.createElement("input");
    inputData.type = "date";
    inputData.id = "campo-data";
    body.appendChild(label);
    body.appendChild(input);
    body.appendChild(labelData);
    body.appendChild(inputData);
}

function adicionarBotao() {
    let botao = document.createElement("button");
    botao.type = "button";
    botao.innerText = "Registar";
    botao.addEventListener("click", criarParagrafo)
    body.appendChild(botao);
}

function criarUl() {
    body.appendChild(ul);
}

function criarParagrafo() {
    let input = document.getElementById("campo-tarefa");
    let tarefa = input.value;
    let inputData = document.getElementById("campo-data");
    let data = inputData.value
    let dataPartes = data.split("-");
    let dia = parseInt(dataPartes[2]);
    let mes = parseInt(dataPartes[1]);
    let ano = parseInt(dataPartes[0]);
    let dataBR = dia + "/" + mes + "/" + ano;

    if (input.value === "" || isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        alert("Preencha os campos corretamente")
    } else {
        criarPnaUl(tarefa + " " + dataBR);
        input.value = "";
        inputData.value = "";
        input.focus();
    }
}

function criarPnaUl(nomeTarefa) {
    let li = document.createElement("li");
    li.innerText = nomeTarefa;
    ul.appendChild(li);
}

criarTitulo();
criarInput();
adicionarBotao();
criarUl();