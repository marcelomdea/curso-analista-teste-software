const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("**** MÉDIA ARITIMÉTICA DE 2 NOTAS ****")
input.question("Qual a primeira nota? ", function(nota1) {
    input.question("Qual a segunda nota? ", function(nota2) {
        let media = (parseInt(nota1)+parseInt(nota2))/2;
        console.log(`Média das notas é ${media}`);
        if(media > 6){
            console.log("APROVADO(A)");
        }else if(media < 6){
            console.log("REPROVADO(A)");
        }else{
            /*
            Crie um algoritmo para efetuar a leitura de duas notas para um determinado aluno. 
            Realize o cálculo da média aritmética, exiba a nota obtida na tela e verifique se
             a nota é maior ou menor que 6. Se for maior, exiba o texto “Aprovado”, se for menor, exiba “Reprovado”.
            */
            console.log("ALUNO NOTA 6, NÃO SEI O QUE FAZER CONTIGO!!! COMO ESTOU DE BOM HUMOR VOU CONSIDERA-LO(A) APROVADO(A) ;)");
        }
        input.close();
    });
});

input.on("close", function() {
    console.log("\nBORA BILLL !!!");
    process.exit(0);
});