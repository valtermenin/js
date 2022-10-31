function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if (fano.value.length==0 || fano.value > ano ){
        document.write("verifique os dados")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        var genero = ''
        var img=document.createElement("img")
        img.setAttribute("id","foto")

        if(fsex[0].checked){
            genero = "Homem"
            
            if(idade>=0 && idade<=10){
                img.setAttribute("src","homembebe.jpg")
            }else if (idade<30){
                img.setAttribute("src","homemjovem.jpg")
            }else if(idade<50){
                img.setAttribute("src","homemadulto.jpg")
            }else{
                img.setAttribute("src","homemvelho.jpg")
                res.innerHTML =`erro`
            }
        }else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >=0 && idade <10){
                img.setAttribute("src","mulherbebe.jpg")
            }else if (idade<30){
                img.setAttribute("src","mulherjovem.jpg")
            }else if(idade <50){
                img.setAttribute("src","mulheradulta.jpg")
            }else{
                img.setAttribute("src","mulhervelha.jpg")                
            }
        }
        res.innerHTML =`Detectamos ${genero}, ${idade} anos!!!`
        res.appendChild(img)
    }
    

}
