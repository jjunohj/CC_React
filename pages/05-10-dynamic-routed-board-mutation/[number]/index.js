import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const router = useRouter();
  console.log(router);
  console.log(router.query.number);

  //선언하고 사용해야 실행되는 useMutation과는 다르게 useQuery는 그냥 바로 실행된다.
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  console.log(data);

  // useQuery는 실행하자마자 바로 호출이 되는데, useQuery로 불러온 result를
  // 바로 사용할 수는 없다. 백엔드에서 가져와야하니까.
  // 그렇다고 기다리고 사용해버리면 다른 웹사이트의 요소들이 렌더링되지 않을테니까 문제가 발생한다.
  // 따라서 일단 undefined로 해놓고 싹 실행하고, 받아왔을 경우, 한 번 더 렌더링 한다.
  // 그래서 오류 방지 차원에서 data && data.fetchBoard.writer라고 하는 것.

  return (
    <>
      <div>1번 페이지 이동이 완료되었습니다.</div>
      <div>작성자 : {data ? data.fetchBoard.writer : "로딩중입니다..."}</div>
      <div>제목 : {data && data.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
    </>
  );
}
