class Endereço {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set atualizarRua(novaRua) {
    this.rua = novaRua;
  }
  set atualizarBairro(novoBairro) {
    this.bairro = novoBairro;
  }
  set atualizarCidade(novaCidade) {
    this.cidade = novaCidade;
  }
  set atualizarEstado(novoEstado) {
    this.estado = novoEstado;
  }
}

let cliente1 = new Endereço(
  "Clovis Santos",
  "Santo Antonio",
  "Itabuna",
  "Bahia"
);

cliente1.atualizarBairro = "São Lourenço";
cliente1.atualizarRua = "Guanabara";
cliente1.atualizarCidade = "Ilheús";
cliente1.atualizarEstado = "Minas Gerais";

console.log(cliente1);
