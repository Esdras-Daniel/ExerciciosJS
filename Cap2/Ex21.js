/* Capítulo 2 - Operadores

  Exercicio 21. A importancia de R$ 780.000,00 sera dividia entre os tres primeiros colocados de um concurso,
  em partes diretamente proporcionais aos pontos conseguidos por eles. Construa um programa que solicite os pontos
  dos tres primeiros colocados e imprima a importancia que cabera a cada um.

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Digite a pontuação do primeiro colocado: ");
rl.on('line', function (ponto_p1Input) {
  const ponto_p1 = parseInt(ponto_p1Input);

  console.log("Digite a pontuação do segundo colocado: ");
  rl.on('line', function (ponto_p2Input) {
    const ponto_p2 = parseInt(ponto_p2Input);

    console.log("Digite a pontuação do terceiro colocado: ");
    rl.on('line', function (ponto_p3Input) {
      const ponto_p3 = parseInt(ponto_p3Input);

      const total_pontos = ponto_p1 + ponto_p2 + ponto_p3;

      const prop_p1 = ponto_p1 / total_pontos;
      const prop_p2 = ponto_p2 / total_pontos;
      const prop_p3 = ponto_p3 / total_pontos;

      const premio = 780000.00;

      console.log(`Primeiro: R$ ${(prop_p1 * premio).toFixed(2)}`);
      console.log(`Segundo: R$ ${(prop_p2 * premio).toFixed(2)}`);
      console.log(`Terceiro: R$ ${(prop_p3 * premio).toFixed(2)}`);

      rl.close();
    });
  });
});