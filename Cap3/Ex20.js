/* Capítulo 3 - Laços

  Exercício 20: A sequencia de numeros de Fibonacci eh a seguinte: os dois primeiros termos tem o valor 1 e cada termo seguinte eh igual a soma dos dois
  anteriores.

  1, 1, 2, 3, 5, 8, 13, 21, ...

  Escreva um programa que solicite ao usuario o numero do termo da sequencia de Fibonacci e calcule o valor desse termo. Por exemplo, se o numero fornecido
  pelo usuario for 7, o programa devera encontrar e imprimir o valor 13

   */

  const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular o valor do termo da sequência de Fibonacci
function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  let termoAnterior = 1;
  let termoAtual = 1;
  let resultado = 0;

  for (let i = 3; i <= n; i++) {
    resultado = termoAnterior + termoAtual;
    termoAnterior = termoAtual;
    termoAtual = resultado;
  }

  return resultado;
}

console.log("Digite o número do termo da sequência de Fibonacci: ");
rl.on('line', function (nInput) {
  const n = parseInt(nInput);

  if (n <= 0) {
    console.log("Número inválido. O número deve ser maior que 0.");
    rl.close();
    return;
  }

  const resultado = fibonacci(n);
  console.log(`O valor do termo ${n} da sequência de Fibonacci é: ${resultado}`);

  rl.close();
});