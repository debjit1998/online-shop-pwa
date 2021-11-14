import ReactDOM from "react-dom";
import useModal from "../../hooks/useModal";
import { ModalContainer } from "./styles";

const Modal = () => {
  const { show, content, toggleModal, closable } = useModal();

  const handleClose = () => {
    if (closable) toggleModal();
  };

  if (!show) return null;

  return ReactDOM.createPortal(
    <ModalContainer onClick={handleClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </ModalContainer>,
    document.querySelector("#modal-root")!
  );
};

export default Modal;
