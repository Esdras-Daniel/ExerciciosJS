/*
 Capítulo 7 - Matrizes

  Exercicio 32 - Escreva a funçao de prototipo:

  int stricmp(char[], char[])

  que compare duas cadeias de caracteres independentemente de letras maiusculas ou minusculas e retorne
  a diferença ASCII dos primeiros caracteres diferentes, ou zero se as cadeias forem iguais
   */

  const readline = require('readline');

  function stricmp(str1_comp, str2_comp) {
    let dif_temp = 0;
    for (let i = 0; i < str1_comp.length; i++) {
      if (str1_comp[i] !== str2_comp[i]) {
        dif_temp += str1_comp[i].charCodeAt(0) - str2_comp[i].charCodeAt(0);
      } else if (str1_comp[i] === '\0' || str2_comp[i] === '\0') {
        break;
      }
    }
    return dif_temp;
  }
  
  function le_string() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    return new Promise((resolve) => {
      rl.question("Digite a string: ", (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }
  
  function strlwr(conv_palavra) {
    let result = '';
    for (let i = 0; i < conv_palavra.length; i++) {
      if (conv_palavra[i] !== '') {
        const charCode = conv_palavra[i].charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
          result += String.fromCharCode(charCode + 32);
        } else {
          result += conv_palavra[i];
        }
      }
    }
    return result;
  }
  
  function informa_dif(dif_mostra) {
    if (dif_mostra) {
      console.log("As strings não são iguais!!");
    } else {
      console.log("As strings são iguais!!");
    }
  }
  
  async function main() {
    const T = 80;
    const str1 = await le_string();
    const str2 = await le_string();
    const lowerStr1 = strlwr(str1);
    const lowerStr2 = strlwr(str2);
    const dif_ASCII = stricmp(lowerStr1, lowerStr2);
    informa_dif(dif_ASCII);
  }
  
  main();