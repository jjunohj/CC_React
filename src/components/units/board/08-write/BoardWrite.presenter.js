import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  // 자바스크립트 영역

  // HTML 영역
  return (
    <>
      작성자: <S.RedInput type="text" onChange={props.onChangeWriter} /> <br />
      제목: <input type="text" onChange={props.onChangeTitle} /> <br />
      내용: <input type="text" onChange={props.onChangeContents} /> <br />
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
