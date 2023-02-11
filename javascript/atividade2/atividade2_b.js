//2. Faça um algoritmo para exibir a tabuada de 2. O resultado na tela deve ser algo parecido com isso:
function tabuada(number){
    for(let i = 1; i < 11; i++){
        const n = parseInt(number);
        console.log(`${n} x ${i} = ${n*i}`);
    }
}

tabuada(2);