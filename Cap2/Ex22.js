/*   Capítulo 2 - Operadores

  Exercicio 22. Sabendo que o latao e obtido fundindo-se sete partes de cobre com tres partes de zinco, faca um programa que
  solicite quantos quilos de latao se quer produzir e imprima quantos quilos de cobre e zinco sao necessarios.
  
  */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Informe quantos quilos de latão deseja: ");
rl.on('line', function (quilos_lataoInput) {
  const quilos_latao = parseFloat(quilos_lataoInput);

  console.log(`Para ${quilos_latao.toFixed(3)} latão, será necessário:`);
  console.log(`${(quilos_latao * 0.70).toFixed(3)} quilos de cobre.`);
  console.log(`${(quilos_latao * 0.30).toFixed(3)} quilos de zinco.`);

  rl.close();
});