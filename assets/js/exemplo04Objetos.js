function exemploDadosPaciente() {
    // Utilizando multiplas variáveis
    let tipoSanguineo = "A+";
    let cpf = "102.123.129-20";
    let idade = 20;
    let nome = "Maria";
    console.log(
        `Nome: ${nome}
        Tipo Sanguineo: ${tipoSanguineo}
        Idade: ${idade}
        CPF: ${cpf}`);

    // Criando um objeto para armazenar várias caracteristicas
    let pacienteMaria = {
        tipoSanguineo: "A+",
        cpf: "102.123.129-20",
        idade: 20,
        nome: "Maria"
    };

    // Alterar a idade da Maria
    pacienteMaria.idade = 21;
    console.log(`Nome: ${pacienteMaria.nome},
        Tipo Sanguineo: ${pacienteMaria.tipoSanguineo},
        Idade: ${pacienteMaria.idade},
        CPF: ${pacienteMaria.cpf}`)
}

function exercicioDadosJogo() {
    let nome = "The Witcher 3";
    let genero = "RPG";
    let dataLancaemtno = "18/05/2015";

    console.log(`Nome: ${nome}
        Genero: ${genero}
        Data de lançamento: ${dataLancaemtno}`);

    let jogo = {
        nome: "The Witcher 3",
        genero: "RPG",
        dataLancaemtno: "18/05/2015"
    };
    console.log(`Nome: ${jogo.nome}
        Genero: ${jogo.genero}
        Data de lançamento: ${jogo.dataLancaemtno}`);

    jogo.publisher = "CD Projekt";
    jogo.preco = 129.99;

    console.log(`Nome: ${jogo.nome}
        Genero: ${jogo.genero}
        Data de lançamento: ${jogo.dataLancaemtno}
        Publicadora: ${jogo.publisher}
        Preço: R$ ${jogo.preco}`); 
}

function exemploObjetoEmVetor() {
    let alunos = [];

    let aluno1 = {};
    aluno1.nome = prompt("Digite o nome do aluno");
    aluno1.nota1 = parseFloat(prompt("Digite o nota 1"));
    aluno1.nota2 = parseFloat(prompt("Digite o nota 2"));
    aluno1.nota3 = parseFloat(prompt("Digite o nota 3"));
    aluno1.media = calcularMedia(aluno1);
    alunos.push(aluno1);

    let aluno2 = {};
    aluno2.nome = prompt("Digite o nome do aluno");
    aluno2.nota1 = parseFloat(prompt("Digite o nota 1"));
    aluno2.nota2 = parseFloat(prompt("Digite o nota 2"));
    aluno2.nota3 = parseFloat(prompt("Digite o nota 3"));
    aluno2.media = calcularMedia(aluno2);
    alunos.push(aluno2);

    console.table(alunos);
}

function calcularMedia(aluno) {
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    return media;
}

function exercicioDadosColaboradores() {
    let colaboradores = [];

    let colaboradore1 = {};
    colaboradore1.nome = prompt("Digite o nome do colaborador");
    colaboradore1.valorHR  = parseFloat(prompt("Digite o valor ganho por hora"));
    colaboradore1.horas = parseInt(prompt("Digite quantas horas trabalhadas"));
    colaboradore1.salarioBruto = calcularSalarioBruto(colaboradore1);
    colaboradores.push(colaboradore1);
    
    let colaboradore2 = {};
    colaboradore2.nome = prompt("Digite o nome do colaborador");
    colaboradore2.valorHR  = parseFloat(prompt("Digite o valor ganho por hora"));
    colaboradore2.horas = parseInt(prompt("Digite quantas horas trabalhadas"));
    colaboradore2.salarioBruto = calcularSalarioBruto(colaboradore2);
    colaboradores.push(colaboradore2);

    let colaboradore3 = {};
    colaboradore3.nome = prompt("Digite o nome do colaborador");
    colaboradore3.valorHR  = parseFloat(prompt("Digite o valor ganho por hora"));
    colaboradore3.horas = parseInt(prompt("Digite quantas horas trabalhadas"));
    colaboradore3.salarioBruto = calcularSalarioBruto(colaboradore3);
    colaboradores.push(colaboradore3);

    let colaboradore4 = {};
    colaboradore4.nome = prompt("Digite o nome do colaborador");
    colaboradore4.valorHR  = parseFloat(prompt("Digite o valor ganho por hora"));
    colaboradore4.horas = parseInt(prompt("Digite quantas horas trabalhadas"));
    colaboradore4.salarioBruto = calcularSalarioBruto(colaboradore4);
    colaboradores.push(colaboradore4);


    let colaboradore5 = {};
    colaboradore5.nome = prompt("Digite o nome do colaborador");
    colaboradore5.valorHR  = parseFloat(prompt("Digite o valor ganho por hora"));
    colaboradore5.horas = parseInt(prompt("Digite quantas horas trabalhadas"));
    colaboradore5.salarioBruto = calcularSalarioBruto(colaboradore5);
    colaboradores.push(colaboradore5);
    
    console.table(colaboradores)
}

function calcularSalarioBruto(colaborador) {
    const salarioBruto = colaborador.horas * colaborador.valorHR;
    return salarioBruto;
}

