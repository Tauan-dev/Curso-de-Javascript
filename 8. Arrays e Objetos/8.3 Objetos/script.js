let heroi = {
  HP: 120,
  MP: "fogo",
  nome: "Superhero",
  voar: function () {
    console.log("heroi voando");
  },
};

console.log(heroi.HP);
heroi.MP = "agua";
console.log(heroi.MP);
heroi.voar();
// adicionando e deletando caracteristicas no objeto
heroi.vilao = "Supermalvado";
console.log(heroi.vilao);
delete heroi.HP;
console.log(heroi.HP);
// copiando propiedades de um objeto
objeto1 = {
  propriedade1: "Textando",
  propriedade2: "textinho",
};
console.log(objeto1);
objeto2 = {
  propriedade3: "aoba",
};

Object.assign(objeto1, objeto2);
console.log(objeto1);
