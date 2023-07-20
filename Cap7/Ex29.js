/*
Capítulo 7 - Matrizes

  Exercicio 29 - Escreva a funçao de prototipo:

  void strup(char[]);

  que converta uma string em letras maiusculas.
   */

  const readline = require('readline');

  function strup(conv_palavra) {
    let novaPalavra = "";
    for (let i = 0; i < conv_palavra.length; i++) {
      if (conv_palavra[i] === '\0') {
        break;
      }
      novaPalavra += conv_palavra[i] >= 'a' && conv_palavra[i] <= 'z' ? conv_palavra[i].toUpperCase() : conv_palavra[i];
    }
    return novaPalavra;
  }
  
  function le_string() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    return new Promise((resolve) => {
      rl.question("Digite uma palavra: ", (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }
  
  async function main() {
    const T = 80;
    console.log("*** Programa CAPSLOCK ***");
    const palavra = await le_string();
    const palavraMaiuscula = strup(palavra);
    console.log(palavraMaiuscula);
  }
  
  main();