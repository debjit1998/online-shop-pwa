import { FC, ReactChild } from "react";
import AuthProvider from "./AuthProvider";
import ModalProvider from "./ModalProvider";

const AppProviders: FC<{ children: ReactChild }> = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  );
};

export default AppProviders;
