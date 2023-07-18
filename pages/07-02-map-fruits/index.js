// 백엔드에서 받아온 데이터라고 가정 (컴포넌트 위에 만든 이유: 컴포넌트 리렌더링돼도 다시 안만들어지도록)
const FRUITS = [
  { number: 1, name: "레드향" },
  { number: 2, name: "샤인머스켓" },
  { number: 3, name: "산청딸기" },
  { number: 4, name: "한라봉" },
  { number: 5, name: "사과" },
  { number: 6, name: "애플망고" },
  { number: 7, name: "딸기" },
  { number: 8, name: "천혜향" },
  { number: 9, name: "과일선물세트" },
  { number: 10, name: "귤" },
];

export default function MapFruitsPage() {
  // 1. 가장 기본 예제
  //   const aaa = [
  //     <div>1 레드향</div>,
  //     <div>2 샤인머스켓</div>,
  //     <div>3 산청딸기</div>,
  //   ];

  // 2. 실무 백엔드 데이터 예제 (aaa랑 똑같음) - 1
  const bbb = [
    { number: 1, name: "레드향" },
    { number: 2, name: "샤인머스켓" },
    { number: 3, name: "산청딸기" },
  ].map((el) => (
    <div>
      {el.number} {el.name}
    </div>
  ));

  // 3. 실무 백엔드 데이터 예제 (aaa랑 똑같은) - 2
  const ccc = FRUITS.map((el) => (
    <div>
      {el.number} {el.name}
    </div>
  ));
  return (
    <>
      {FRUITS.map((el) => (
        <div>
          {el.number} {el.name}
        </div>
      ))}
    </>
  );
}
