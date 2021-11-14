import { FC, ReactChild } from "react";
import ModalProvider from "./ModalProvider";

const AppProviders: FC<{ children: ReactChild }> = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default AppProviders;
