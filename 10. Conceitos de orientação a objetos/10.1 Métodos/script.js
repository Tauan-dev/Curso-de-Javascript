let animal = {
  nome: "",
  raca: "",
  setNome: function (name) {
    this.nome = name;
  },
  setRaca: function (race) {
    this.raca = race;
  },
  miar: function () {
    console.log("miau");
  },
  latir: function () {
    console.log("auau");
  },
  getNome: function () {
    console.log(this.nome);
  },

  falar: function () {
    if (this.raca == "gato") {
      animal.miar();
    } else if (this.raca == "cachorro") {
      animal.latir();
    } else console.log("sem animal cadastrado");
  },
};

animal.setNome("salem");
animal.getNome();
animal.setRaca("gato");
animal.falar();

const animalNovo = Object.create(animal);
animalNovo.setNome("tapioca");
animalNovo.setRaca("cachorro");
animalNovo.getNome();
animalNovo.falar();
