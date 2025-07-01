let fruit = ["apple", "mango", "strawberry", "pineapple"];
for (let i = 0; i < fruit.length; i++) {
  console.log("누나가 좋아하는 과일은", fruit[i]);
}

// for... of : 아이템 전체를 읽어오고 싶을 때
for (let item of fruit) {
  console.log("누나가 좋아하는 과일은 of", item);
}

let sentence = "누나는 코딩을 너무 좋아해";
for (let char of sentence) {
  console.log("char", char);
}

// for ... in: 객체의 키값이 동적일 때 사용
let person = {
  name: "누나",
  age: 25,
  cute: true,
};

for (let key in person) {
  console.log("key", key);
  if (key === "cute") {
    console.log("누나는 귀엽니?", person[key]);
  }
}

for (let key in fruit) {
  console.log("key", key);
}
