// Variáveis
/*temos 3 formas de criar variáveis:
- var
  É uma forma antiga de declarar variáveis, que pode ser reatribuída e redeclarada.
- let
  É a forma moderna de declarar variáveis, que pode ser reatribuída, mas não redeclarada no mesmo escopo. Pode substituir o var em códigos novos.
- const
  É a forma de declarar constantes, que não podem ser reatribuídas nem redeclaradas no mesmo escopo.

  Sintaxe:
  TIPO(var, let e const) NOME = VALOR;

Run code: CTRL + ALT + N ou "Run Code" no menu superior
*/

var nome = "Osmarzinho";
console.log(nome);
console.log("Osmaaar");

// O var contamina o escopo do código, então o let é mais recomendado pois ele não contamina o escopo.
let nome = "Pedro";
let idade = 20;
console.log(nome, idade);

// Variável para valores constantes:
const pi = 3.14;

// Tipos de Dados

let num1 = 41;
let num2 = 41.5;

console.log(num1, num2);

// JS não há diferença entre inteiros e números com casas decimais

let umTexto = "12";
const exemploNum = 34.2;
const exemploNum2 = 30;

/*
Ferramenta para verificar tipo:

O "typof" é um operador de avaliação de tipo
*/
console.log(typeof exemploNum);
console.log(typeof num1);

/*
Operações básicas
- Concatenar textos
- Operações aritméticas
- Comparações matemáticas
*/ 

// Concatenação de textos
let primeiroNome = "Osmar";
let sobrenome = "Menezes";

let nomeCompleto = primeiroNome + " " +sobrenome;
console.log(nomeCompleto);

// Operações aritméticas
console.log(10+5);
console.log(10-5);
console.log(10/5);
console.log(10*5);

// Comparações retornam booleans (true or false)
console.log(10 > 5);
console.log(10 < 5);

/*
 >=, <= (maior ou igual, menor ou igual)
 ==, === (igual ou triple equal se é idêntico o tipo e o valor)
*/
// O valor e o tipo são iguais
console.log(10 === "10");
