function exercicio01() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:").replace(",", "."));
    let nota2 = parseFloat(prompt("Digite a segunda nota:").replace(",", "."));
    let nota3 = parseFloat(prompt("Digite a terceira nota:").replace(",", "."));

    let mediaPonderada = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / (2 + 3 + 5);
    let notaExame, trabalho;

    if (mediaPonderada >= 7) {
        console.log("Aprovado.");
    } else if (mediaPonderada >= 6.8 && mediaPonderada <= 6.99) {
        trabalho = prompt("Fez o trabalho?(Sim ou Não):").toLowerCase;
        if(trabalho === "sim"){
            console.log("Aprovado, sua media foi: " + mediaPonderada + 0.2);
        } else if (trabalho === "não" || trabalho === "nao") {
            if (mediaPonderada >= 5 || mediaPonderada < 7) {
                notaExame = parseFloat(prompt("Digite a nota do exame:"));
                if ((mediaPonderada + notaExame) / 2 >= 6) {
                    console.log("Aprovado em exame");
                } else {
                    console.log("Reprovado");
                }
            }
        }
    }
}