import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import BoardCommentItem from "../../src/components/units/15-board-comment-item";

const FETCH_BOARD = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARD,
  );

  return (
    <>
      {data?.fetchBoards.map((el, idx) => (
        // 이렇게 컴포넌트 별로 나누어서 작성하면, 각 컴포넌트가 각자의 state를 가지게 되므로,
        // 각 컴포넌트의 state가 변하더라도 다른 컴포넌트에 영향을 주지 않는다.
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </>
  );
}
