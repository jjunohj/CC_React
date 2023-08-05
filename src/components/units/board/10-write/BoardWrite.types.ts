import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IMyvariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  onClickUpdate: () => void;
  onClickSubmit: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  mycolor: boolean;
  isEdit: boolean;
  data: Pick<IQuery, "fetchBoard">;
}

export interface IBlueButtonProps {
  rrr: string;
  qqq: string;
  zzz: boolean;
}
