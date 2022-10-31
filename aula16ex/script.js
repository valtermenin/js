let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let valores = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n,l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function finalizar() {
    if(valores.length==0){
        res.innerHTML = `<p>Adicione valores à sua lista</p>`
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let vsoma=0
        let vmedia =0

        for (let pos in valores) {
            vsoma+=valores[pos]
            vmedia+=valores[pos] / valores.length  // ou vsoma / tot

            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} elementos cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valoresd informados é de ${vsoma}.</p>`
        res.innerHTML += `<p>A média dos valores informadfos é de ${vmedia}.</p>`
    }
}

function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) { 
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = `<p>Tudo certo!!! Valor ${num.value} adicionado</p>`
    }else{
        res.innerHTML = `<p>Valor inválido ou já encontrado na lista...</p>`
            
    }
    num.value = ""
    num.focus()
}
