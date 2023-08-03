export default function Qqq() {
  let aaa = "안녕하세요";
  aaa = 3;

  let bbb: string = "반갑습니다";

  let ccc: string;
  ccc = "반가워요 !!!";
  ccc = 3;

  let ddd: number = 10;
  ddd = "안녕";

  let eee: boolean = true;
  eee = false;
  eee = "false";

  let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"];
  let ggg: string[] = ["철수", "영희", "훈이", 10];
  let hhh: (string | number)[] = ["철수", "영희", "훈이", 10];

  // 인터페이스
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
  }

  // 객체
  const profile: IProfile = {
    name: "철수",
    age: 10,
    school: "다람쥐초등학교",
  };
  profile.age = "열살";

  // 함수 타입 => 어디서 몇 번이든 호출 가능하므로, 시작부터 타입추론 불가능 (반드시 타입 명시)
  const add = (number1: number, number2: number, unit: string): string => {
    return number1 + number2 + unit;
  };
  const result = add(1000, 2000, "원"); //결과인 리턴 타입도 예측 가능

  // any 타입 (자바스크립트)
  let qqq: any = "안녕하세요";
  qqq = 3;
  qqq = true;

  return <div></div>;
}
