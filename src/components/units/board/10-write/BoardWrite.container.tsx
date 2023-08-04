import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

interface IProps {
  isEdit: boolean;
  data?: any;
}

export default function BoardWrite(props: IProps) {
  const router = useRouter();
  const [mycolor, setMycolor] = useState(false);
  // 자바스크립트 영역
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

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
    router.push(`/10-01-typescript-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    interface IMyvariables {
      number: number;
      writer?: string;
      title?: string;
      contents?: string;
    }
    const myvariables: IMyvariables = {
      number: Number(router.query.number),
    };
    if (writer) myvariables.writer = writer;
    if (title) myvariables.title = title;
    if (contents) myvariables.contents = contents;

    //1. 수정하기 뮤테이션 날리기
    const result = await updateBoard({
      variables: myvariables,
    });

    //2. 상세페이지로 이동하기.
    console.log(result);
    alert(result.data.updateBoard.message);
    router.push(`/10-01-typescript-boards/${result.data?.updateBoard.number}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value && title && contents) {
      setMycolor(true);
    }
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    if (writer && event.target.value && contents) {
      setMycolor(true);
    }
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    if (writer && title && event.target.value) {
      setMycolor(true);
    }
    setContents(event.target.value);
  };

  // HTML 영역
  // props 객체 생성
  return (
    <>
      {BoardWriteUI({
        onClickSubmit: onClickSubmit,
        onClickUpdate: onClickUpdate,
        onChangeWriter: onChangeWriter,
        onChangeTitle: onChangeTitle,
        onChangeContents: onChangeContents,
        mycolor: mycolor,
        isEdit: props.isEdit,
        data: props.data,
      })}
    </>
  );
}
