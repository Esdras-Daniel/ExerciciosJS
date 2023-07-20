/*
Capítulo 5 - Funcoes

  Exercício 42: Dia da Semana: Escreva uma funcao que recebe dia, mes e ano e calcule o dia da semana
  em que caiu essa data. Para isso, basta transformar a data gregoriana em juliana (utilize a funcao
  escrita no exercicio anterior) e calcular o resto da divisao da data juliana por 7. A funcao devera
  retornar um numero entre 0 e 6. Indicando os seguintes, resultados:

    0 - Segunda-Feira
    1 - Terça-Feira
    2 - Quarta-Feira
    3 - Quinta-Feira
    4 - Sexta-Feira
    5 - Sabado
    6 - Domingo
     */

    function greg_juli(dia_temp, mes_temp, ano_temp) {
        let juliana;
      
        juliana =
          (1461 * (ano_temp + 4800 + Math.floor((mes_temp - 14) / 12))) / 4;
        juliana += (367 * (mes_temp - 2 - 12 * Math.floor((mes_temp - 14) / 12))) / 12;
        juliana -= (3 * Math.floor((ano_temp + 4900 + Math.floor((mes_temp - 14) / 12)) / 100)) / 4;
        juliana += dia_temp - 32075;
      
        return juliana;
      }
      
      function mostra_dia_semana(juliana) {
        const aux = juliana % 7;
        console.log(aux)
      
        switch (aux) {
          case 0:
            console.log("\nO dia correspondente cairá em uma Segunda-Feira.\n");
            break;
          case 1:
            console.log("\nO dia correspondente cairá em uma Terça-Feira.\n");
            break;
          case 2:
            console.log("\nO dia correspondente cairá em uma Quarta-Feira.\n");
            break;
          case 3:
            console.log("\nO dia correspondente cairá em uma Quinta-Feira.\n");
            break;
          case 4:
            console.log("\nO dia correspondente cairá em uma Sexta-Feira.\n");
            break;
          case 5:
            console.log("\nO dia correspondente cairá em um Sábado.\n");
            break;
          case 6:
            console.log("\nO dia correspondente cairá em um Domingo.\n");
            break;
        }
      }
      
      const readline = require('readline');
      
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      function obterDiaSemana() {
        rl.question("Digite a data no formato dd/mm/aaaa: ", (answer) => {
          const [dia, mes, ano] = answer.split("/").map(Number);
      
          const dataJuliana = greg_juli(dia, mes, ano);
          mostra_dia_semana(dataJuliana);
          rl.close();
        });
      }
      
      obterDiaSemana();
