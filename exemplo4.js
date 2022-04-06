// Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário,
// assim como a quantidade de dias o carro foi alugado. Calcule o preço a pagar,
// sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let kmRodados = 100
let diasAlugados = 2
let kmValor = 0.15
let precoAluguel = 60 
  
let valorFinal = (diasAlugados * precoAluguel) + (kmValor * kmRodados)

console.log(valorFinal)

