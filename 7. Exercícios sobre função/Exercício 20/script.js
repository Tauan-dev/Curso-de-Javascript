let autoEscola = (idade) => {
  if (idade >= 18) {
    console.log("pode se matricular");
  } else {
    console.log("não pode se matricular");
  }
};
console.log(autoEscola(30));
console.log(autoEscola(16));
