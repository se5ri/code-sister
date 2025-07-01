/* if (조건문) {
  조건이 충족하면 할일들
} */

// 조건문에서 참이 나오면 그 상태로 종료해버림 (그래서 범위를 작은 것 -> 큰 것 순서대로 해주는 것이 좋음)
/* let age = 21;

if (age >= 18) {
  console.log("오토바이 운전이 가능합니다");
} else if (age > 20) {
  console.log("운전이 가능합니다");
} else {
  console.log("운전 불가능합니다");
} */

let age = 21;
let licence = false;
// &&: 그리고
// 18~20
if (18 <= age && age < 20) {
  console.log("오토바이 운전이 가능합니다");
} else if (age > 20) {
  console.log("운전이 가능합니다");
} else {
  console.log("운전 불가능합니다");
}

// || (or): 또는
// 18~20
if (18 <= age || age < 20) {
  console.log("오토바이 운전만 가능합니다");
} else if (age > 20) {
  console.log("운전이 가능합니다");
} else {
  console.log("운전 불가능합니다");
}

if (age > 20) {
  if (licence != true) {
    console.log("운전이 가능합니다");
  } else {
    console.log("면허를 따세용");
  }
} else {
  console.log("운전 불가능합니다");
}

// ==과 ===의 차이
/* 자바스크립트코드를 보다보면 어떤이는 ==만 쓰고 어떤이는 ===를 쓴걸 볼 수 있다.
둘의 차이는 자료형까지 일치해야하는가? 이다.
a==b 의 경우 둘의 값만 같으면 장땡
a===b의 경우 둘의 값 + 자료형까지 같아야함 (좀더 엄격한 비교) */

// 문제 풀이
// 1.유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는 프로그램을 만드시오.
let num = -1;
if (num < 0) {
  console.log("음수입니다");
} else if ((num = 0)) {
  console.log("0입니다");
} else {
  console.log("양수입니다");
}

/* 문제 2

나는 대학교 교수다. 레포트 점수에 따라 등급을 매기는 프로그램을 만드시오.

90~100 : A
80~89 : B
70~79 : C
60~69 : D
less than 59 : F */

let score = 90;
let grade;
if (90 <= score && score <= 100) {
  grade = "A";
} else if (80 <= score && score < 90) {
  grade = "B";
} else if (70 <= score && score < 80) {
  grade = "C";
} else if (60 <= score && score < 70) {
  grade = "D";
} else if (0 <= score && score < 60) {
  grade = "F";
} else {
  console.log("잘못된 범위의 점수입니다");
}
console.log("등급: " + grade);

/* 문제 3

한 지원자가 우리 회사에 지원을 했다. 지원자가 사용 가능한 스킬은 배열에 제공이 된다.

let skills = ["HTML","CSS","Javascript","React"]

Javascript와 React 둘 다 할 줄 안다면 "합격!" Javascript와 React 둘 중 하나만 할 줄 안다면 "예비", 두 스킬이 없다면 "탈락"을 보여주는 프로그램을 짜시오. */

let skills = ["HTML", "CSS", "Javascript", "React"];

if (skills.includes("Javascript") && skills.includes("React")) {
  console.log("합격!");
} else if (skills.includes("Javascript") || skills.includes("React")) {
  console.log("예비");
} else {
  console.log("탈락!");
}
