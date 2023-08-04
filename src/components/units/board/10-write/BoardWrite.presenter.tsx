import { ChangeEvent } from "react";
import * as S from "./BoardWrite.styles";

interface Iprops {
  onClickUpdate: () => void;
  onClickSubmit: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  mycolor: boolean;
  isEdit: boolean;
  data: any;
}

export default function BoardWriteUI(props: Iprops) {
  // 자바스크립트 영역

  // HTML 영역
  return (
    <>
      작성자:{" "}
      <S.RedInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />{" "}
      <br />
      제목:{" "}
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />{" "}
      <br />
      내용:{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />{" "}
      <br />
      <S.BlueButton
        rrr="15px"
        qqq="blue"
        zzz={props.mycolor}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </S.BlueButton>
      ;
    </>
  );
}
