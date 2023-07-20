/*   
    Capítulo 5 - Funcoes

  Exercício 40: Escreva uma funcao que receba o ano como argumento e retorne 1 se for um
  ano bissexto e 0 se nao for. Um ano e' bissexto se for divisivel por 4, mas nao por 100.
  Um ano tambem e' bissexto se for divisivel por 400.
  
*/

function e_bissexto(ano_teste) {
    return (ano_teste % 4 === 0 && ano_teste % 100 !== 0) || ano_teste % 400 === 0;
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function verificarBissexto() {
    rl.question("Digite um ano no formato aaaa: ", (answer) => {
      const ano = parseInt(answer);
  
      console.log(`${ano}${e_bissexto(ano) ? " é bissexto" : " não é bissexto"}`);
      rl.close();
    });
  }
  
  verificarBissexto();