// 객체초기화

/* let name = "noona";
let age = 17;
let cute = true;

let person = { name, age, cute };
// let person = {name:name,age:age,cute:cute}와 같다
 */

//Destructuring

/* let person = {
  name: "noona",
  age: 17,
  cute: true,
};
let { name, age, cute } = person;
//let name = person.name   let age = person.age   let cute = person.cute   와 같다 

let array = [1, 2, 3];
let [a, b, c] = array; */
// let a = array[0]   let b = array[1]   let c = array[2]   와 같다

//Rest destructuring

/* let person = {
  name: "noona",
  age: 17,
  cute: true,
};
let { name, ...rest } = person;
console.log(rest); // {age:17, cute:true}

let array = [1, 2, 3];
let [a, ...rest] = array;
console.log(rest); //[2,3]
 */

//Spread

/* let a = [1, 2];
let b = [3, 4];
let c = [5, 6];

let result = [...a, ...b, ...c]; // [1,2,3,4,5,6]
 */

//Template Literal

/* let name = "noona";
console.log(`제 이름은 ${name}입니다`); */
