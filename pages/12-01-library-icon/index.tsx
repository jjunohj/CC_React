import styled from "@emotion/styled";
import { PlayCircleOutlined } from "@ant-design/icons";

const MyIcon = styled(PlayCircleOutlined)`
  color: yellow;
  font-size: 50px;
`;

export default function LibraryIconPage() {
  return (
    <>
      <MyIcon />
    </>
  );
}
