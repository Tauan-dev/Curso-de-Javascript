let humano = {
  pes: 2,
  nome: "Kraudio",
  cpf: "234.512.512-92",
};

const novoHumano = Object.create(humano);
novoHumano.nome = "Antonio";
novoHumano.trabalho = "pedreiro";
console.log(novoHumano.nome);
console.log(novoHumano.trabalho);
console.log("\n");
// contrutor

function criarFelino(raca) {
  let felino = Object.create({});
  felino.raca = raca;
  return felino;
}

let gato = criarFelino("gato");
console.log(gato.raca);
console.log("\n");
// new
function Cachorro(raca) {
  this.raca = raca;
}

let doberman = new Cachorro("doberman");
console.log(doberman.raca);
console.log("\n");
// classe com metódo

Cachorro.prototype.uivar = function () {
  console.log("auuuuuuu");
};
doberman.uivar();
console.log("\n");
// construtor com classe (es6)

class contribuinte {
  constructor(nome, cargo, salário) {
    this.nome = nome;
    this.salário = salário;
    this.cargo = cargo;
  }
}

let professor = new contribuinte("Aurizio", "professor", 4100);
console.log(professor.nome);
console.log(professor.cargo);
console.log(professor.salário);
console.log("\n");

//

class Lobo {
  constructor(tamanho, cor) {
    this.tamanho = tamanho;
    this.cor = cor;
  }
  uivar() {
    console.log("AUUUUUUUUUUUUUU");
  }
}
Lobo.prototype.patas = 4;
let lobisomen = new Lobo("2 metros", "cinza");
let husky = new Lobo("50 cm", "preto");

console.log(lobisomen.patas);
lobisomen.uivar();
let dentes = Symbol();
Lobo.prototype[dentes] = 30;

console.log(Lobo.prototype[dentes]);
console.log(lobisomen[dentes]);
console.log(husky[dentes]);
