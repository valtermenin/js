function fatorial(n){ //muito útil para quando não receber algum parâmetro
        
        let fat=1
        for(c=n;c>1;c--){
            fat *= c  
        }
        return fat
}

console.log(fatorial(5))

