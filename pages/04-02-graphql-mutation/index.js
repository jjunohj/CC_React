import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "수호", title: "첫 제목", contents: "첫 내용") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
    alert(result.data.createBoard.message);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
