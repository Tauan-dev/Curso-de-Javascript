let imprimiNumeros = (...args) => {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
};
let numer1 = 19;
let numer2 = 16;
let numer3 = 31;
imprimiNumeros(4, 12, 63, 6, 1);
imprimiNumeros(numer1, numer2);
imprimiNumeros(numer3, numer1);
