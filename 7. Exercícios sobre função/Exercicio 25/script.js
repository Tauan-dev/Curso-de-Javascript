let decrement = (number) => {
  for (let i = 0; i < number; number--) {
    if (number % 2 == 0) {
      console.log(`${number} é um numero par`);
    }
  }
};
console.log(decrement(100));
