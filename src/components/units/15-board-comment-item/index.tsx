import { useState } from "react";
import styled from "@emotion/styled";
import type { IBoard } from "../../../commons/types/generated/types";

interface IProps {
  el: IBoard;
}

export default function BoardCommentItem(props: IProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const Row = styled.div`
    display: flex;
  `;

  const Column = styled.div`
    width: 25%;
  `;

  return (
    <div>
      {!isEdit && (
        <Row>
          <Column>{props.el.title}</Column>
          <Column>{props.el.writer}</Column>
          <Column>{props.el.contents}</Column>
          <button onClick={onClickEdit}>수정하기</button>
        </Row>
      )}
      {isEdit && (
        <Row>
          수정할 내용: <input type="text" />
          <button onClick={onClickEdit}>나가기</button>
        </Row>
      )}
    </div>
  );
}
