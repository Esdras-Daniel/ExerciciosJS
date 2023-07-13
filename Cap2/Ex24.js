/*   Capítulo 2 - Operadores

  Exercicio 24. Faca um programa que solicite um caractere. Se for uma letra minuscula, imprima-a em
  maisculo, caso contrario, imprima o proprio caractere. Use uma expressao condicional.
   */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Digite uma letra: ");
rl.on('line', function (letraInput) {
  const letra = letraInput[0];

  const letraProcessada = letra >= 'a' && letra <= 'z' ? letra.toUpperCase() : letra;

  console.log(letraProcessada);

  rl.close();
});