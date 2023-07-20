/*
  Capítulo 4 - Comandos de decisao

  Exercício 20. Escreva um programa que crie um numero aleatorio x por meio da funcao rand(). O programa deve solicitar um numero n ao usuario
  e compara-lo com x. Se n for menor do que x, o programa devera imprimir "Muito Pequeno" e solicitar novamente um numero para o usuario; se n for
  maior do que x, o programa devera imprimir "Muito Grande" e solicitar numero para o usuario. O programa terminara quando o usuario adivinhar o
  numero x, tomado aleatoriamente, e devera imprimir "Correto" e o numero de tentativas ate o acerto.
*/

const readline = require('readline');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const x = getRandomInt(101);
console.log(x);

console.log("Programa de adivinhação\n");

let cont = 1;

function adivinharNumero() {
  rl.question("Digite um número entre 0 e 100: ", (answer) => {
    const n = parseInt(answer);

    if (n === x) {
      console.log(`Correto! O número aleatório é ${x}\nVocê acertou em ${cont} tentativas`);
      rl.close();
    } else if (n > x) {
      console.log("Muito Grande\n");
      cont++;
      adivinharNumero();
    } else {
      console.log("Muito Pequeno\n");
      cont++;
      adivinharNumero();
    }
  });
}

adivinharNumero();
  