//Tipos de dados 
//No javascript, tudo o que armazenamos em variáveis tem um tipo. Esses tipos definem o que podemos fazer com os valores

// Principais tipo de dados
// string (textos)
//number (numeros)
// booolean (verdadeiro ou falso)
//object (objetos, que agrupam informações)
//array (listas de valores)
//null (valor vazio)
// undefined (quando algo não foi definido)

// String (texto)
// Uma string  é um texto, smpre entre aspas ('' ou "")


let nome = "Jarvis"
let mensagem = 'ola, mundo'

console.log(nome)
console.log(mensagem)

let saudacao = "ola, " + nome + "!";
console.log(saudacao); //exibe "ola,jarvis"

//typeof
//Descobre o tipo de dado de uma variável ou valor no código.

let nomeDois = "Bryan"
console.log(typeof nomeDois);

// typeof
// O typeof serve para descobrir o tipo de um valor ou variável 

// let nomeDois = "Brayan - Não pode fone de ouvido"
// let nometrês = "Vilar - Não pode celular"
// console.log(typeof nomeDois);

let soma = 10 + 5;
console.log(soma);