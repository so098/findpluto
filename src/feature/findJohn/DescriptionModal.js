import React from "react";

import Modal from "../../common/components/Modal";

function DescriptionModal({ modalOpen, closeModal }) {
  return (
    <Modal open={modalOpen} close={closeModal} header="존의 위치를 찾으세요.">
      명왕성에 도착하였습니다. 이제 존에게 얻은 단서를 통해 존의 위치를 추정하여
      클릭해보세요. 존의 위치를 클릭하면 그 위치로 이동합니다.
    </Modal>
  );
}

export default DescriptionModal;
