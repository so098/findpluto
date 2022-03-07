import React from "react";

import Modal from "../../common/components/Modal";

function DescriptionModal({ modalOpen, closeModal }) {
  return (
    <Modal open={modalOpen} close={closeModal} header="존의 위치를 찾으세요.">
      명왕성에 도착하였습니다.
      <br /> 존에게 얻은 단서를 바탕으로 명왕성의 위치를 추적하였습니다
      <br /> 존이 있을 좌표를 클릭하여 명왕성 내부로 들어가십시오
    </Modal>
  );
}

export default DescriptionModal;
