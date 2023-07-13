/* Capítulo 3 - Laços

  Exercício 19: O numero de combinacoes de n objetos diferentes, em que r objetos sao escolhidos de cada vez, eh dado pela seguinte formula:

  nCr = fatorial de n / (fatorial de r * fatorial de (n-r)) ==> nCr = n! / (r! * (n-r)!).

  Escreva um programa que calcule o numero de combinacoes de n objetos tomados r de cada vez. Os valores n e r devem ser solicitados ao usuario.
   */

  const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular o fatorial de um número
function fatorial(num) {
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

// Função para calcular o número de combinações de n objetos tomados r de cada vez
function combinacoes(n, r) {
  const numerador = fatorial(n);
  const denominador = fatorial(r) * fatorial(n - r);
  const resultado = numerador / denominador;
  return resultado;
}

console.log("Digite o valor de n: ");
rl.on('line', function (nInput) {
  const n = parseInt(nInput);

  console.log("Digite o valor de r: ");
  rl.on('line', function (rInput) {
    const r = parseInt(rInput);

    if (n < 0 || r < 0 || r > n) {
      console.log("Valores inválidos. Certifique-se de que n >= 0, r >= 0 e r <= n.");
      rl.close();
      return;
    }

    const resultado = combinacoes(n, r);
    console.log(`O número de combinações de ${n} objetos tomados ${r} de cada vez é: ${resultado}`);

    rl.close();
  });
});