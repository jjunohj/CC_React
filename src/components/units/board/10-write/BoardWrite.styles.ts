import styled from "@emotion/styled";

export const RedInput = styled.input`
  border: 1px solid red;
`;

interface Iprops {
  rrr: string;
  qqq: string;
  zzz: boolean;
}

export const BlueButton = styled.button`
  font-size: ${(props: Iprops) => props.rrr};
  background-color: ${(props: Iprops) =>
    props.zzz === true ? "yellow" : "default"};
`;
