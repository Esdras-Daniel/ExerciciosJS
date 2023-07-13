/* Capítulo 2 - Operadores

  Exercício 18: Escreva um programa que solicite ao usuario a altura e o raio de um cilindro circular e imprima o volume do cilindro. O volume
  de um cilindro circular eh calculado por meio da seguinte formula:

  Vol = 3.141592 * raio * raio * altura
   */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Digite o valor do raio e da altura: ");
rl.on('line', function (input) {
  const valores = input.split(" ");
  const raio = parseFloat(valores[0]);
  const altura = parseFloat(valores[1]);
  const pi = 3.141592;
  
  const vol = pi * raio * raio * altura;

  console.log(`Um cilindro de raio = ${raio.toFixed(2)} e altura = ${altura.toFixed(2)} tem o volume de ${vol.toFixed(4)} u.v`);
  
  rl.close();
});