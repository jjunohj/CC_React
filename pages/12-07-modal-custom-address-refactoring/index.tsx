import { Modal } from "antd";
import { useState } from "react";
import type { Address } from "react-daum-postcode";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    console.log(address);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기</button>

      {/* 모달 종료 방식 - 1. 모달 숨기는 방법(ex. 이력서 등) */}
      {/* <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 2. 모달 삭제하는 방법(ex. 신용카드, 비밀번호 등) */}
      {/* state가 바뀜으로써 리렌더링되는 방식 사용 */}
      {isOpen && (
        <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
