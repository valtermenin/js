function tabuada() {

    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")

    if (num.value.length==0) {
        msg.innerHTML = `<p>Digite um número...</p>`
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=""
        while (c<=10){
            let item = document.createElement("option")
            item.text= `${n} * ${c} = ${n*c}`
            item.value = c
            tab.appendChild(item)
            //msg.innerHTML = item.value  - pega o índice do select
            c++
            
        }
        msg.innerHTML = `<p>Cálculo efetuado. Digite o novo Número</p>`
    }    

}
