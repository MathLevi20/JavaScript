const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main() {
    const Inicio = Number(prompt("Inicio:"))
    const Fim = Number(prompt("Fim:"))
    // Trabalho anterior
    let atual = Inicio
    while (atual <= Fim){ // condição de parada/continuidade   
    //trabalho
    if (atual%2!=0 && atual % 7 ==0)    
    console.log(`${atual}`)
        //convergencia de dados
   atual =atual +1}
}

main()