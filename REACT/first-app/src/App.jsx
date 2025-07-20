import "./App.css";
import { useState } from "react";

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("counter는", counter, "counter2 state는", counter2);
  };

  // 1. 유저가 버튼을 클릭한다
  // 2. counter+1해서 1이 됨
  // 3. setState 함수 호출
  // 4. console.log 실행됨
  // 변수 값은 1로 보이고 state값은 아직 안변했기 때문에 그 전 값이 보인다
  // 함수 끝
  // app다시 리렌더링
  // let counter = 0을 거치면서 counter 값은 다시 0으로 초기화가 된다
  // state 값은 update가 되면서 다시 랜더링을 함

  return (
    <>
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭</button>
    </>
  );
}

export default App;
