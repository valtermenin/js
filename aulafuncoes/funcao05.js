function fatorial(n){ 
    console.log(n)  
    
        if(n==1){
            console.log(n)  
            return 1
        }else{
            
            return n * fatorial(n-1)

        }
}

//%x4 = 20
//20X 3 = 60
//60 X 2 = 120

console.log(fatorial(4))

