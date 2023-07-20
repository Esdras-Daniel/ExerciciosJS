/* 
  Capítulo 4 - Comandos de decisao

  Exercício 19. Escreva um programa que solicite ao usuario tres numeros inteiros a, b e c, em que a seja maior do que 1. Seu programa deve somar
  todos os inteiros entre b e c que sejam divisiveis por a;

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a, b, c, maior, menor, i, divs;

/*Entrada dos dados*/
function inputA() {
  rl.question("Digite o valor de a que seja maior do que 1: ", (answer) => {
    a = parseInt(answer);
    if (a < 1) {
      inputA();
    } else {
      inputBAndC();
    }
  });
}

function inputBAndC() {
  rl.question("Digite o valor de b e c respectivamente: ", (answer) => {
    const [inputB, inputC] = answer.split(" ").map(num => parseInt(num));
    b = inputB;
    c = inputC;

    /*Processamento dos dados*/
    if (b > c) {/*Comparacao do maior b ou c*/
      maior = b;
      menor = c;
    } else {
      maior = c;
      menor = b;
    }

    divs = 0;

    for (i = menor + 1; i < maior; i++) {/*Verificar o divisível entre b e c*/
      if (i % a === 0) {
        divs += i;
      }
    }

    /*Saida dos dados*/
    console.log("A soma é:", divs);
    rl.close();
  });
}

inputA();