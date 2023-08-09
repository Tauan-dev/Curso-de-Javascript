class Pessoa {
  constructor(nome, cpf, idade) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
  }
}

class Trabalhador extends Pessoa {
  constructor(cargo, nome, idade, cpf) {
    super(nome, cpf, idade);
    // super(nome, nome);
    // super(idade, idade);
    this.cargo = cargo;
  }
}

let advogado = new Trabalhador("advogado", "Kleber", 47, "913.414.123-79");
let medico = new Trabalhador("medico", "Eduardo", 35, "029.124.623-86");
console.log(advogado);
console.log(medico);

console.log(new Trabalhador() instanceof Pessoa);
