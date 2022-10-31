let amigo = {
    nome: "valter",
    sexo: "m", 
    peso:85.4,
    engordar(p=0){
        console.log("Engordou")
        this.peso += p
    }}
console.log(typeof amigo)
amigo.engordar(2)
console.log(amigo.peso)
