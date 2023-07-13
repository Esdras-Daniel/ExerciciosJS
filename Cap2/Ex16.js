/* Capítulo 2 - Operadores

  Exercício 16: Escreva uma expressao logica que resulte 1 se o ano for bissexto e 0 se nao for.
  Um ano eh bissexto se for divisivel por 4, mas nao por 100. Um ano tambem eh bissexto se for dividido
  por 400

  */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o ano para saber se é bissexto: ", function (ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log("O ano é bissexto.");
  } else {
    console.log("O ano não é bissexto.");
  }

  rl.close();
});