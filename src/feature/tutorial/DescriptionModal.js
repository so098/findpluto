import React from "react";

import Modal from "../../common/components/Modal";

function DescriptionModal({ modalOpen, closeModal, check }) {
  return (
    <Modal
      open={modalOpen}
      close={closeModal}
      header="존을 설득해 단서를 얻으세요."
      check={check}
    >
      존은 명왕성을 태양계 행성으로 되돌리기 위해
      <br /> 나사 기밀문서를 빼돌려 명왕성으로 갔습니다.
      <br /> 명왕성에서 존의 위치를 알아야 기간 내에 존을 찾을 수 있습니다.
      <br /> 존의 호감을 얻어 존의 위치에 대한 단서를 얻으세요.
      <br /> 얻을 수 있는 최대 단서 갯수 : 3개
    </Modal>
  );
}

export default DescriptionModal;
