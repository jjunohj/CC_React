export default function TypescriptUtilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 1. Pick 타입 (원하는 타입만 뽑아서 사용)
  type aaa = Pick<IProfile, "name" | "age">;

  // 2. Omit 타입 (원하는 타입만 제외하고 사용)
  type bbb = Omit<IProfile, "school">;

  // 3. Partial 타입 (다 물음표 붙여줌)
  type ccc = Partial<IProfile>;

  // 4. Required 타입 (전부 다 필수로 바꿔줌)
  type ddd = Required<IProfile>;

  // 5. Union 타입 (합집합)
  type eee = "a" | "b" | "c";
  let abc: eee;
  abc = "a";

  // 6. Record 타입 (객체를 만들어줌)
  type fff = Record<eee, IProfile>;

  // type VS interface 차이: 선언병합

  interface IProfile {
    candy: number;
  }

  // hobby를 제외한 모든 것들은 초기값이 필요함
  let profile: Partial<IProfile> = {};
  profile.candy = 10;
}
