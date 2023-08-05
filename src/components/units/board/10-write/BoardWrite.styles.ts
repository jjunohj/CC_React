import styled from "@emotion/styled";
import { IBlueButtonProps } from "./BoardWrite.types";

export const RedInput = styled.input`
  border: 1px solid red;
`;

export const BlueButton = styled.button`
  font-size: ${(props: IBlueButtonProps) => props.rrr};
  background-color: ${(props: IBlueButtonProps) =>
    props.zzz === true ? "yellow" : "default"};
`;
