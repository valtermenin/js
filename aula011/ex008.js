var vel = 80
var per = 80
console.log(`A velocidade do carro é de ${vel} km/h`)

if (vel==per) { 
    console.log(`Alerta, Você chegou à velocidade MÁXIMA permitida que +e de ${per} km/h!!!!`)
} else if (vel > per) { 
    console.log(`Multado!!`)
}else{
    console.log(`Use o cinto de segurança!!`)
}