import { gql } from "@apollo/client";

// 컴포넌트가 아님, 그냥 변수임
export const CREATE_BOARD = gql`
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

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      _id
      number
      message
    }
  }
`;
