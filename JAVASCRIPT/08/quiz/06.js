/* 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오

출력예 )

12300인 경우
 50000 X 0
 10000 X 1
 5000  X 0
 1000 X 2
 500 X 0
 100 X 3 */

let unit = [50000, 10000, 5000, 1000, 500, 100];
function changeCalculate(money) {
  for (let i = 0; i < unit.length; i++) {
    let num = Math.floor(money / unit[i]);
    console.log(unit[i] + "X" + num);
    money = money - unit[i] * num;
  }
}

changeCalculate(12300);
