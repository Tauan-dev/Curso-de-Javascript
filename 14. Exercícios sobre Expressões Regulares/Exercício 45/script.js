const nickname = /^(?=,{3,16}$)[a-z 0-9-_]/;

console.log(nickname.test("tauan"));
console.log(nickname.test("@Milvoltas"));
console.log(nickname.test("a"));
console.log(
  nickname.test(
    "hiasjisdjaijsdijdiajsidjiadjidajdsijdaidijaisjdijaisdjiajsdijdijasdjiajsidjiajsidjiajidaji"
  )
);
console.log(nickname.test("Tauan198"));
console.log(nickname.test("tauan198-miranha"));
