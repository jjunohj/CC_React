import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 타입
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 변수
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables 이게 $ 역할을 해준다. 원래는 $를 써줘야함
        writer: "수호",
        title: "첫 제목",
        contents: "첫 게시글",
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
