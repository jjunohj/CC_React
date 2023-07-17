import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [mycolor, setMycolor] = useState(false);
  // 자바스크립트 영역
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables 이게 $ 역할을 해준다. 원래는 $를 써줘야함
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const onChangeWriter = (event) => {
    if (event.target.value && title && contents) {
      setMycolor(true);
    }
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    if (writer && event.target.value && contents) {
      setMycolor(true);
    }
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    if (writer && title && event.target.value) {
      setMycolor(true);
    }
    setContents(event.target.value);
  };

  // HTML 영역
  // props 객체 생성
  return (
    <BoardWriteUI
      mycolor={mycolor}
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
    />
  );
}
