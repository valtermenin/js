var agora = new Date()
var hora = agora.getHours()


console.log(`"Agora são precisamente ${hora} horas`)

if (hora < 12) {
    console.log(`Bom Dia!!!!`)

}else if(hora <=18) {
    console.log(`Boa Tarde!!!!`)
}else{console.log(`Boa Noite!!!!`)

}



switch (hora) {

    case 8:
    console.log(`Boa Tarde!!!`)
    break

    case 13:
        console.log(`Boa Tarde!!!`)
        break

    case 19:
            console.log(`Boa Noite!!!`)
            break
        
    default:
        console.log(`Olá!!!`)
 
}

