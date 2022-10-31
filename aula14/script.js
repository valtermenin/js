function contar() {

    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
   
    if (ini.value.length==0 || fim.value.length==0 || passo.value.length==0) {
        res.innerHTML = `Algum dado vazio... Verifique!`
    }else{
        
      
        res.innerHTML = `Contando...! <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(p<=0){
            res.innerHTML += `${p}: passo inválido. Assumindo 1 para o passo automaticamente \u{1F449}`
            p=1
        }
        if(i<f){
            for(let c=i;c<=f;c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(let c=i;c>=f;c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }    

}
