let idade = 19;
let cnh = true;
if (idade >= 18 && cnh == true) {
  console.log("pode dirigir");
} else if (idade >= 18 && cnh == false) {
  console.log("veiculo apreendido");
} else if (idade < 18) {
  console.log("de menor");
}
