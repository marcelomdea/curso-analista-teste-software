//1. Crie um array com 10 elementos e mostre-os na tela usando cada uma das estruturas de repetição: while, do-while, for e foreach.
let array = [1,2,3,4,5,6,73,8,9,10]

let index = 0;
console.log("---- laço while ----")
while(index < array.length){
    console.log(array[index]);
    index++;
}

index = 0;
console.log("---- laço do while ----")
do{
    console.log(array[index]);
    index++
}while(index < array.length)

console.log("---- laço for ----")
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

console.log("---- laço for each ----")
array.forEach((n, i) => {
    console.log(`index=${i} - number=${n}`);
})