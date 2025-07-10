/*
Módulo

% -> resto da divisão.
** -> Exponenciação.
*/ 

// Resto da divisão - %.
console.log(10%2);
console.log(13%2);

// Exponenciação - **.
console.log(10**2);
console.log(2**3);

/*
Ordem matemática:

Normalmente, o cálculo matemático é realizado pela ordem de prioridade.
Assim, podemos alterar esta ordem através do ().
*/ 
// Primeira forma / sem () - resultado 26.
const operacao = 12 + 5 * 2 + 4;
console.log(operacao);

//Segunda forma / com () - resultado 38.
const operacao2 = (12 + 5) * 2 + 4;
console.log(operacao2);

/*
Outros operadores de comparação:
!= - Diferente
!== - Diferente avaliando o tipo
*/

console.log(1 !== 2);
console.log(1!=="1");

// Em JS, a comparação de strings é por == ou ===.
/*
Operadores de pós-incremento e pré-incremento:
num++ - pós-incremento
++num - pré-incremento

Operadores de pós-retirada e pré-retiradaq:
num-- - pós-retirada
--num - pré-retirada

Estes operadores são utilizados em loops (for, while)

Somar um valor á uma variável - +=
Como funciona? num atribui num soma 5 (num = num + 5).
Dessa forma seria redundante, então:
num += 5

Subtrair um valor á uma variável - -=
Como funciona? num atribui num soma 5 (num = num - 5).
Dessa forma seria redundante, então:
num -= 5

O mesmo funciona também para multiplicação e divisão
*/
let num = 1;

console.log(num++);
console.log(++num);
console.log(num--);
console.log(--num);
console.log(num+=5);
console.log(num-=5);
console.log(num*=5);
console.log(num/=5);

// Tarefa para saber se um usuário pode dirigir

const idade = 19;
const podeDirigir = idade >= 18;

console.log(podeDirigir); //Resulta em true pois ele é maior de idade

/* 
Condicionais
*/
if(idade>=18){
  console.log("Esta pessoa pode dirigir.");
}
else{
  console.log("Esta pessoa não pode dirigir.");
}


