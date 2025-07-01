// let fruit = "banana";
// let fruit2 = "apple";
// let fruit3 = "grape";
// let fruit4 = "mango";

// 베열: 관련있는 데이터들을 하나로 묶어서 하나의 변수 아래에 저장하는 것
let fruit = ["banana", "apple", "grape", "mango"];
console.log(fruit);
console.log(fruit[0]); // banana
console.log(fruit[3]); // mango

fruit[0] = "cherry";
console.log(fruit); // [ 'cherry', 'apple', 'grape', 'mango' ]

// 배열 관련 함수
// pop(): 마지막에 있는 아이템을 뺌
fruit.pop();
console.log(fruit); // [ 'cherry', 'apple', 'grape' ]

// push(): 마지막에 아이템을 넣어줌
fruit.push("pineapple");
console.log(fruit); //[ 'cherry', 'apple', 'grape', 'pineapple' ]

// includes(): 해당 아이템을 배열이 포함하고 있는지 알려줌
console.log(fruit.includes("apple")); // true
console.log(fruit.includes("pear")); // false

// indexOf(): 아이템의 인덱스를 찾아줌
console.log(fruit.indexOf("apple")); // 1

// 잘라주는 함수
// 2번째 부터 값을 잘라준다
// slice는 기존의 배열을 건들이지않고, 새로운 배열을 만듦
/* console.log(fruit.slice(2)); // ["grape", "pineapple"];
console.log(fruit.slice(1, 3)); // 1번부터 3이전까지 [ 'apple', 'grape' ] */

// splice(): 시작점으로 부터 몇개의 아이템을 제거하고 싶은지
// splice는 기존의 배열을 배열을 건든다
console.log(fruit); //[ 'cherry', 'apple', 'grape', 'pineapple' ]

fruit.splice(0, 2);
console.log(fruit); // [ 'grape', 'pineapple' ]

// 배열함수 정리
// pop() : 배열 끝에 있는 아이템을 제거, 그 아이템 값을 리턴
// push('아이템'): 배열 끝에 아이템 추가, 배열의 최종 길이 리턴
// includes('아이템'): 배열에 아이템이 포함되어 있으면 true 리턴, 아니면 false 리턴
// indexOf('아이템'): 아이템의 인덱스 번호를 리턴
// slice(시작점, 끝점): 시작점~끝점(미포함) 까지 배열을 복사해서 리턴
// splice(시작점, 개수): 시작점부터 개수만큼 실제 배열에서 아이템 제거
// length : 배열 함수는 아니지만 배열의 크기를 리턴해주는 속성
