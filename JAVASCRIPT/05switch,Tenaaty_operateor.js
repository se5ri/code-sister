let menu = 8;

/* if (menu == 1) {
  console.log("물건사기");
} else if (menu == 2) {
  console.log("잔고확인");
} else if (menu == 3) {
  console.log("히스토리확인");
} else {
  console.log("홈으로 돌아가기");
} */

/* switch
조금 더 간결하고 의미가 명확해 보이는 장점이 있음
case가 값으로 딱 정해진 경우에만 사용 가능
조건이 비교식일 경우 사용 불가 */

/* switch (menu) {
  case 1:
    console.log("물건사기");
    break;
  case 2:
    console.log("잔고확인");
    break;
  case 3:
    console.log("히스토리 확인");
    break;
  default:
    console.log("홈으로 돌아가기");
} */

/* 
삼항 연산자

if문을 간단하게 표현할 수 있음
조건에 따라 실행하는 내용이 한 가지일 때 사용하기 좋음
조건에 따라 실행하는 내용을 짧고 직관적으로 표현 가능
구문: 조건식 ? 참일 때 : 거짓일 때 */

/* if (menu <= 3) {
  console.log("범위안에 숫자입니다");
} else {
  console.log("범위 밖의 숫자입니다");
} */

let answer = menu <= 3 ? "범위안에 숫자입니다" : "범위 밖의 숫자입니다";
console.log(answer);
