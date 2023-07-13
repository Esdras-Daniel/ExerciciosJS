/*  Capítulo 3 - Laços

  Exercício 18: Escreva um programa que solicite um numero entre 3 e 18 e calcule a propabilidade que esse numero tem de sair ao se jogar tres dados
  ao mesmo tempo. A probabilidade e calculada por meio da seguinte formula:

  P = (n1 / n2) * 100.0

  em que n1 eh o numero no qual a soma dos dados eh igual ao numero de dado pelo usuario, e n2 eh o numero total de casos possiveis. Por exemplo, se o
  numero inserido for 6, o programa imprimira:

  "A probabilidade de sair 6 e de 4.63%"
   */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Digite um número entre 3 e 18: ");
rl.on('line', function (numeroInput) {
  const numero = parseInt(numeroInput);

  if (numero < 3 || numero > 18) {
    console.log("Número inválido. O número deve estar entre 3 e 18.");
    rl.close();
    return;
  }

  let contagem = 0;
  for (let d1 = 1; d1 <= 6; d1++) {
    for (let d2 = 1; d2 <= 6; d2++) {
      for (let d3 = 1; d3 <= 6; d3++) {
        if (d1 + d2 + d3 === numero) {
          contagem++;
        }
      }
    }
  }

  const probabilidade = (contagem / 216) * 100.0;
  console.log(`A probabilidade de sair ${numero} é de ${probabilidade.toFixed(2)}%`);

  rl.close();
});