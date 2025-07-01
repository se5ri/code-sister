// 함수: 일의 단위

function makeBurger(type, size, num) {
  console.log("매개변수 값은?", type);
  console.log("빵두기");
  console.log("상추두기");
  if (num < 1) {
    return "버거 개수가 0개 입니다";
  }
  if (type == "불고기") {
    console.log("고기패티두기");
  } else if (type == "새우") {
    console.log("새우패티두기");
  }

  console.log("뚜껑닫기");
  console.log(type, "버거", size, "사이즈", num, "개 준비 완료");

  return "완료되었습니다";
}

function serverCoke() {
  console.log("콜라를 선택");
  console.log("얼음담기");
  console.log("콜라담기");
}

function serverfrenchFries() {
  console.log("감튀박스선택");
  console.log("감튀 담기");
}

let result = makeBurger("새우", "M", "0");
console.log("버거 프로세스 결과", result);

function makeSet() {
  makeBurger("새우", "M", "2");
  serverfrenchFries();
  serverCoke();
}
makeSet();
