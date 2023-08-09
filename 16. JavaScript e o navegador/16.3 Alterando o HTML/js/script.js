console.log("insertBefore");
let novoElemento = document.createElement("p"); // elemento a ser inserido
let texto = document.createTextNode("lorem ipsum dolor sit amet");
novoElemento.appendChild(texto); // insere um texto dentro do elemento no qual o metódo está sendo utilizado

let elementoAlvo = document.querySelector("#titulo-principal"); // elemento no qual o novoElemento será inserido antes
let elementoPai = document.querySelector("#conteiner-principal"); // elemento que vai ser utilizado para inserir o método (div principal)
elementoPai.insertBefore(novoElemento, elementoAlvo);

console.log("\n");
console.log("appendChild");

let novoElemento2 = document.createElement("li");
let text = document.createTextNode("lista pelo DOM appendChild");
novoElemento2.appendChild(text);
let x = document.querySelector("#lista");
let pai = x.parentNode;

pai.appendChild(novoElemento2);

console.log("\n");

let novoElemento3 = document.createElement("h1");
let text2 = document.createTextNode("trocando element");

novoElemento3.appendChild(text2);

let titulo = document.querySelector("#titulo-principal");
let paiTitulo = titulo.parentNode;

paiTitulo.replaceChild(novoElemento3, titulo);

console.log("replaceChild");
