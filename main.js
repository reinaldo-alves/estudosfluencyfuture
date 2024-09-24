import { boasVindas, ateLogo } from "./messages.mjs";
// import * as messages from "./messages.mjs";
// Nesse caso, para chamar, messages.boasVindas() e messages.ateLogo();

// Tipo de dado: BOOLEANO
let estaChovendo = false;

console.log("Qual o tipo da variável estaChovendo? " + typeof estaChovendo);

// Tipo de dado: NÚMEROS / NUMBER
let numero = 25;
console.log(typeof numero);

// Tipo de dado: BIGINT
let numeroGrande = 23434345897458973496056566n
console.log(typeof numeroGrande);

// Tipo de dado: NULL
let usuario = {
    nome: 'João',
    sobrenome: null
}
console.log(usuario.sobrenome);

// Tipo de dado: UNDEFINED
console.log(usuario.idade);

// Tipo de dado: STRING
console.log("Olá\", \nmundo")

// Tipo de dado: SYMBOL
let email = Symbol();
usuario[email] = "joao@joao.com"
console.log(usuario[email]);

// Objetos
const livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoPublicacao: 1943,
    genero: "Ficção"
};

function saudacao() {
    console.log('Olá!')
}

saudacao();
saudacao.idioma = 'Português';
console.log(`O livro ${livro.titulo}, escrito por ${livro.autor}, foi publicado no ano de ${livro.anoPublicacao}`);

// Arrays
const filmes = ["Titanic", "Vingadores", "Matrix"];
console.log(filmes);
console.log(filmes[1]);

// Método forEach
const arr = ["uva", "banana", "abacaxi", "pera"];
arr.forEach(function(item, index){
    console.log(index, item);
})

// Método map
const listaCompras = arr.map(function(){
    return "Comprado"
})
const listaCompras2 = arr.map(function(item){
    if (item === 'abacaxi') {
        return "Comprado"
    }
    return item
})
console.log(listaCompras);
console.log(listaCompras2);

let temDesconto = true;
let freteGratis = false;
console.log(`Tem desconto: ${temDesconto} \nTem frete grátis: ${freteGratis}`);

// Operador E (&&)
if (temDesconto && freteGratis) {
    console.log("Vou comprar!");
} else {
    console.log("Vou esperar!");
}

// Operador OU (||)
if (temDesconto || freteGratis) {
    console.log("Acho que vou comprar!");
} else {
    console.log("Não está valendo a pena!");
}

// Operador NÃO (!)
if (!freteGratis) {
    console.log("Vou ter que pagar o frete!");
} else {
    console.log("Frete grátis, que bom!");
}

// getElementById
console.log(document.getElementById("titulo").textContent);

// getElementsByClassName
let elementosPorClasse = document.getElementsByClassName("item");
console.log(elementosPorClasse[0].textContent);

// getElementsByClassName
let elementosPorTag = document.getElementsByTagName("p");
console.log(elementosPorTag[1].textContent);

// querySelector
console.log(document.querySelector(".subtitulo-sec").textContent);

// getElementsByClassName
let itens = document.querySelectorAll(".item");
itens.forEach(i => console.log(i.textContent));

// Eventos (Events)
document.getElementById("meuBotao").addEventListener('click', function() {alert('Botão clicado!')});

boasVindas();
ateLogo();

