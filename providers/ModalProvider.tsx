import { createContext, FC, ReactChild, ReactNode, useState } from "react";
import Modal from "../components/modal";

export const ModalContext = createContext<{
  show: boolean;
  toggleModal: (content?: ReactNode, closable?: boolean) => void;
  content: ReactNode;
  closable: boolean;
}>({ show: false, toggleModal: () => {}, content: null, closable: true });

const ModalProvider: FC<{ children: ReactChild }> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [closable, setClosable] = useState(true);
  const [content, setContent] = useState<ReactNode>(null);

  const toggleModal = (content?: ReactNode, closable = true) => {
    setShow(!!content);
    setContent(content || null);
    setClosable(closable);
  };
  return (
    <ModalContext.Provider value={{ show, toggleModal, content, closable }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
