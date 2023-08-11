import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

const MyStar = styled(Rate)`
  color: yellow;
  font-size: 50px;
`;

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  // (value) => setValue(value) -> setValue
  return (
    <>
      <MyStar onChange={setValue} />
    </>
  );
}
