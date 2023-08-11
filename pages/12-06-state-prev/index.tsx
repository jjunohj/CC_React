import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);
  function onClickCountUp() {
    // 처음에 임시 저장공간에가서 이전 State가 있는 지 확인하고, 없으면 count를 가져옴
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  }

  function onClickCountDown() {
    setCount(count - 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 내리기</button>
    </>
  );
}
