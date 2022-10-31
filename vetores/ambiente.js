let num = [7,1,8,3]
console.log(num[3])
num[3] = 7  // adiciona na posiçâo indicada
num.push(9) // adiciona automaticamente no primeiro indice disponìvel
console.log(num.length)
num.sort(function(a, b){return a-b});  //tem que usar essa função para ordenar corretamente
console.log(num)
/*
for(c=0;c<num.length;c++){
    console.log(num[c])
}

for(c in num){ //versão mais recente acma script
    console.log(num[c])
}
// busca 1 valor em um array
console.log(num.indexOf(7))
console.log(num.lastIndexOf(7))

*/
for(c in num){ //versão mais recente acma script
    if(num[c] == 7){
        console.log(`${c},${num[c]}`) 
    }
}

