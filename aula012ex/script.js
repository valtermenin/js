function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()+10
    msg.innerHTML = `Agora sâo ${hora} horas!`

    if(hora >= 0 && hora < 12){
        img.src = "amanhecer.jpg" 
        document.body.style.background="yellow"
    }else if(hora >=12 && hora < 18){
        img.src = "entardecer.jpg" 
        document.body.style.background="blue"
    }else{
        img.src = "anoitecer.jpg" 
        document.body.style.background="black"
    }
    
}
