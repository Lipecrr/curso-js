let alunos = [
    {
        "id": crypto.randomUUID(),
        "nome": "Felipe",
        "sobrenome": "Corrêa",
        "numero_matricula": "2025091701",
        "turma": "Sup 05",
        "notas": [8.5, 7.0, 9.2]
    },
    {
        "id": crypto.randomUUID(),
        "nome": "Ana",
        "sobrenome": "Silva",
        "numero_matricula": "2025091702",
        "turma": "Sup 06",
        "notas": [6.8, 8.0, 7.5]
    }
];

let nome1 = "Vanderlei";
let sobrenome1 = "Bandeira";
let notas1 = [];
alunos.push({
    "id": crypto.randomUUID(),
    "nome": nome1,
    "sobrenome": sobrenome1,
    "notas": notas1
})

let nome2 = "João";
let sobrenome2 = "Martins";
let numeroMatricula2 = 7025012091;
let tuma2 = "Sup 07";
let notas2 = [];
let nota11 = 5.5;
let nota22 = 4.7;
let nota33 = 5.2;
notas2.push(nota11);
notas2.push(nota22);
notas2.push(nota33);
alunos.push({
    "id": crypto.randomUUID(),
    "nome": nome2,
    "sobrenome": sobrenome2,
    "numero_matricula": numeroMatricula2,
    "turma": tuma2,
    "notas": notas2
})

let nome3 = "Yago";
let sobrenome3 = "Mota";
let numeroMatricula3 = 1270250091;
let notas3 = [];
let nota111 = 9.9;
let nota222 = 5.7;
let nota333 = 5.3;
notas3.push(nota111);
notas3.push(nota222);
notas3.push(nota333);
alunos.push({
    "id": crypto.randomUUID(),
    "nome": nome3,
    "sobrenome": sobrenome3,
    "numero_matricula": numeroMatricula3,
    "notas": notas3
})

let nome4 = "Lucas";
let sobrenome4 = "Bene";
let notas4 = [];
let nota1111 = 3.9;
let nota2222 = 5.5;
let nota3333 = 5.2;
notas4.push(nota1111);
notas4.push(nota2222);
notas4.push(nota3333);
alunos.push({
    "id": crypto.randomUUID(),
    "nome": nome4,
    "sobrenome": sobrenome4,
    "notas": notas4
})

let idAlunos = alunos.map(aluno => aluno.id);

let idAlunosTurma07 = alunos.filter(aluno => aluno.turma == "Sup 07").map(aluno => {
    return {
        id: aluno.id
    }
});

let alunosMenos10caracteris = alunos.filter(aluno => aluno.nome.length < 10);

let listarPorNumeroMatricula = alunos.filter(aluno => aluno.numero_matricula);

let      = alunos.filter(aluno => aluno.numero_matricula === undefined);