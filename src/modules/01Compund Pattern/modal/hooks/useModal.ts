import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModal = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext)
    throw new Error("useModal() hook need to be used inside a ModalProviderr");
  const { modalRef, isModalOpen, onModalClose, onModalOpen } = modalContext;

  return { isModalOpen, modalRef, onModalClose, onModalOpen };
};
