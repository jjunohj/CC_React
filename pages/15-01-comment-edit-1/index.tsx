import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import type { MouseEvent } from "react";
import { useState } from "react";

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

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const [myIndex, setMyIndex] = useState(5);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARD,
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  return (
    <>
      {data?.fetchBoards.map((el, idx) => (
        <div key={el._id}>
          {idx !== myIndex && (
            <Row key={el._id}>
              <Column>{el.title}</Column>
              <Column>{el.writer}</Column>
              <Column>{el.contents}</Column>
              <button id={String(idx)} onClick={onClickEdit}>
                수정하기
              </button>
            </Row>
          )}
          {idx === myIndex && (
            <Row key={el._id}>
              수정할 내용: <input type="text" />
            </Row>
          )}
        </div>
      ))}
    </>
  );
}
