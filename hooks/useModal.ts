import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";

export default function useModal() {
  return useContext(ModalContext);
}
