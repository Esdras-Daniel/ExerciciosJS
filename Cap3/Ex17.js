/*  Capítulo 3 - Laços

  Exercício 17: Elabore um programa que solicite um numero inteiro ao usuario e crie um novo numero inteiro com os digitos
  em ordem inversa. Por exemplo, uma execucao do programa eh:

  Digite um numero inteiro:     5382
  Seu numero invertido eh:      2835

  5382 = 5000 + 300 + 80 + 2
  5000 = 5 * 1000 == 1000 = 10^3
   300 = 3 * 100  ==  100 = 10^2
    80 = 8 * 10   ==   10 = 10^1
     2 = 2 * 1    ==    1 = 10^0

    5000 / 10^3 = * 10^0 ==    5
     300 / 10^2 = * 10^1 ==   30
      80 / 10^1 = * 10^2 ==  800
       2 / 10^0 = * 10^3 == 2000
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Digite um número inteiro: ");
rl.on('line', function (numInput) {
  let num = parseInt(numInput);
  let numInvertido = 0;

  while (num !== 0) {
    const digito = num % 10;
    numInvertido = numInvertido * 10 + digito;
    num = (num - digito) / 10;
  }

  console.log(`Seu número invertido é: ${numInvertido}`);

  rl.close();
});