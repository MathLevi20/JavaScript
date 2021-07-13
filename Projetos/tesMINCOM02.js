const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const A = Number(prompt('Valor 01:')); 

const B = -(2**(A-1))

console.log('número de bits menor valor',B)