/*
Capítulo 7 - Matrizes

  Exercicio 35 - Escreva uma função de protótipo:

  int replace(char[], char, char);

  que substitua todo caractere recebido no segundo argumento (atual) de str pelos caracteres
  recebidos no terceiro argumento (novo). A função retorna o número de substituições.
   */

  const readline = require('readline');

function replace(str, atual, novo) {
  let count = 0;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === atual) {
      newStr += novo;
      count++;
    } else {
      newStr += str[i];
    }
  }
  return [count, newStr];
}

function le_string() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('Digite a string a ser manuseada: ', (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function le_char(verificador) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(
      `Digite o caractere a ser ${
        verificador ? 'substiudo' : 'inserido'
      }: `,
      (answer) => {
        rl.close();
        resolve(answer.charAt(0));
      }
    );
  });
}

function informa_trocas(cont, str) {
  console.log(`Para esta string foram realizadas ${cont} trocas!!`);
  console.log('Nova string:', str);
}

async function main() {
  const str = await le_string();
  const atual = await le_char(true);
  const novo = await le_char(false);
  const [cont, novaString] = replace(str, atual, novo);
  informa_trocas(cont, novaString);
}

main();