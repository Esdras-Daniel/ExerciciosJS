/*
  Capítulo 7 - Matrizes

  Exercicio 33 - Escreva a funçao de prototipo:

  void strnset(char[], char, int)

  que inicialize a string com n vezes o caractere ch.
  */

  const readline = require('readline');

  function strnset(str1_temp, ch_temp, n_temp) {
    let str_aux = ch_temp.repeat(n_temp);
    str1_temp = str_aux + str1_temp;
    return str1_temp;
  }
  
  function le_string() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    return new Promise((resolve) => {
      rl.question('Digite a string: ', (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }
  
  function le_caractere() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    return new Promise((resolve) => {
      rl.question('Digite o char que irá inicializar a string: ', (answer) => {
        rl.close();
        resolve(answer[0]);
      });
    });
  }
  
  function le_inteiro() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    return new Promise((resolve) => {
      rl.question('Digite quantas vezes o char deverá ser repetido: ', (answer) => {
        rl.close();
        resolve(parseInt(answer));
      });
    });
  }
  
  async function main() {
    let str1, ch1, n;
  
    str1 = await le_string();
    ch1 = await le_caractere();
    n = await le_inteiro();
  
    str1 = strnset(str1, ch1, n);
    console.log('Nova string:', str1);
  }
  
  main();