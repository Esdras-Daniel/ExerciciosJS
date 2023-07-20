/*
  Capítulo 5 - Funçes

  Exercício 39. A famosa conjetura de Goldbach diz que todo inteiro par maior que 2 eh a soma de dois
  numeros primos. Testes extensivos foram feitos sem contudo ser encontrado um contra-exemplo. Escreva
  um programa que mostre que a afirmacao eh verdadeira para todo numero par entre 700 e 1100. O programa
  deve imprimir cada numero e os primos correspondentes. Use a funcao do exercicio anterior.
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
  
  function mostra_goldbach(primo1, primo2, num_teste) {
    if (primo1 + primo2 === num_teste) {
      console.log(`${primo1} + ${primo2} = ${num_teste}`);
      return true;
    } else {
      return false;
    }
  }
  
  const MIN = 700;
  const MAX = 1100;
  
  function confirma_goldbach(num) {
    for (let i = 2; i + 2 <= num; i++) {
      if (e_primo(i)) {
        for (let j = 2; j < num; j++) {
          if (e_primo(j)) {
            if (mostra_goldbach(i, j, num)) {
              return true;
            }
          }
        }
      }
    }
  
    return false;
  }
  
  for (let i = MIN; i <= MAX; i += 2) {
    if (confirma_goldbach(i)) {
      continue;
    }
  }