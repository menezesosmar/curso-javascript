/* 
Estruturas de repetição

Na aula de hoje, aprendi como utilizar as estruturas de repetição no JavaScript. São elas:
> for
> while
> do while
*/

// Exemplo de como um for funciona
for (let i = 0; i <= 10 ; i++){
  console.log(i);
}

/*
Algo trabalhodo no loop, é o array.
Array pode ser uma lista de variáveis com mesmo tipo de variável.
*/

const frutas = ["Maçã", "Banana"];
console.log(frutas[0]);
console.log(frutas[1]);

for (let i = 0; i < 2 ; i++){
  console.log(frutas[i])
}

/*
Para o for percorrer o array, utilizaremos o .length
> .length traduz o tamanho do array para ser percorrido pelo for.
Este método traz consistência ao código, já que não terei que alterar o for para ler o array caso o array em questão seja alterado.
*/ 

for (let i = 0; i < frutas.length ; i++){
  console.log(frutas[i])
}

//While - Utilizado para quando não sabemos quando esse loop termina.

let p = 0;

while (p < 5) {
  console.log("Loop while" + p);
  p++;
}

let aleatorio = 0;

// Função Math.floor() arredonda números.
// Função Math.random() gera números de forma aleatória.

while (aleatorio != 10) {
  aleatorio = Math.floor(Math.random() *10);

  console.log("Número aleatório: "+aleatorio);
}

/*
Do While é muito incomum de usar no mercado de trabalho.
Então, foquei em aprender o for.
*/ 
var j = 0;
do {
  console.log("J: " + j);

  j++;
} while (j <= 6);

/*
Condicionais e Loops
Exercício 1: Realize a soma de números pares de 0 a 20.
Exercício 2: Conte quantas consoantes tem em uma palavra.

Lembrete: caso eu queira ver no terminal o tamanho da palavra:
> console.log(palavra.length); 
Essa forma será impresso a quantidade de letras que minha variável palavra tem.
JavaScript é Case Sensitive.
*/ 

// Resolução do Exercício 1:
let soma = 0;
for (let num = 0; num <= 20; num++){
  if (num % 2 === 0){
    soma+=num;
  }
}

console.log("Resultado da soma é: " + soma);

// Resolução do Exercício 2:
// Como o JS é case sensitive, utilizei o método .toLowerCase() para passar qualquer letra maiúscula em minúscula e assim, o JS retornar o valor da letra como true.

const palavra = "Osmar";
let consoantes = 0;
for (let l = 0; l < palavra.length; l++){
  let letra = palavra[l].toLocaleLowerCase();

  if(
    letra != 'a' &&
    letra != 'e' &&
    letra != 'o' &&
    letra != 'i' &&
    letra != 'u' 
  ) {
    consoantes++;
  }
}

console.log("Contagem total de consoantes: " + consoantes);

/*
Interpolação de Strings:
Quando quiser adicionar variáveis no string do seu console:
> Colocar entre crases ``
> ${variavel}
*/ 

console.log(`Total de ${consoantes} consoantes na palavra ${palavra}.`);