let array = [1, 4, 6, 2];
let array2 = [9, 1, 5, 7, 1, 6, 2];

let tamanhoArray = (vetor) => {
  if (vetor.length > 5) {
    console.log("Muitos elementos");
  } else if (vetor.length < 5) {
    console.log("Poucos elementos");
  }
};

tamanhoArray(array);
tamanhoArray(array2);
