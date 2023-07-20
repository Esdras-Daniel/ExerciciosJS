/*   Capítulo 5 - Funçoes

  Exercício 38: Um numero primo eh qualquer inteiro positivo divisivel apenas por si proprio e por 1. Escreva uma funcao que
  receba um inteiro positivo e, se este numero for primo, retorne 1, caso contrario, 0.

  Resolução comentada em: https://www.youtube.com/watch?v=tjsegCBwds0
*/

function e_primo(num_teste) {
    let cont_div = num_teste === 1 ? 1 : 2;
  
    for (let i = 2; i <= Math.floor(num_teste / 2); i++) {
      if (num_teste % i === 0) {
        cont_div++;
        break;
      }
    }
  
    return cont_div === 2 ? true : false;
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function verificarPrimo() {
    rl.question("Digite um número inteiro positivo: ", (answer) => {
      const num = parseInt(answer);
  
      if (num <= 0) {
        verificarPrimo();
      } else {
        console.log(`${num}${e_primo(num) ? " é primo" : " não é primo"}`);
        rl.close();
      }
    });
  }
  
  verificarPrimo();