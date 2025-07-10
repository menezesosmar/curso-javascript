const hora = 10;

if (hora < 12) {
  console.log("Bom dia!");
}

const temperatrua = 16;

if (temperatrua <=18) {
  console.log("Está frio!");
} else {
  console.log("Está quente!");
}

const velocidade = 100;

if (velocidade < 20) {
  console.log("Está muito abaixo da velocidade");
} else if(velocidade < 50){
  console.log("Recomendamos você acelerar.");
} else if (velocidade < 80){
  console.log("Velocidade ideal.");
} else {
  console.log("Velocidade excecidada. Sujeito à multa.");
}

/*
Switch - Bom para analisar casos com valores físicos (ex: dia da semana)
Geralmente com valores específicos.
*/ 

let diaDaSemana = 5;

switch (diaDaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Número inválido como dia da semana.");  
}

/*
Operadores Lógicos permitem lógicas mais complexas:

AND -> &&
OR -> || 
NOT -> !
*/ 

// exp1 && exp2 > true se as 2 forem true
// exp1 || exp2 > true se 1 for true, false se as duas forem false
// !exp1 -> inverte o resultado do boolean

// Exemplo: Verificar se o resultado pode dirigir.

let idadeUsuario = 18;
let temCarteira = true;

if (idadeUsuario == 18 && temCarteira) {
  console.log("Pode dirigir.");
} else {
  console.log("Não pode dirigir.");
}

/*
Exemplo: Usuário precisa de um cadastro em um sistema.
- Ele pode esse cadastro utilizando o RG ou Passaporte.
*/ 
const temRG = false;
const temPassaporte = false;

if (temRG || temPassaporte) {
  console.log("Pode realizar cadastro.");
} else {
  console.log("Não pode realizar cadastro.");
}

/*
Nesta situação, é redundante perguntar no if se está chovendo desta maneira:
> if (estaChovendo == false)...
Quando simplesmente podemos alterar e fazer a seguinte lógica:
> if (!estaChovendo)...
*/
const estaChovendo = true;

if (!estaChovendo){
  console.log("Não está chovendo");
}






