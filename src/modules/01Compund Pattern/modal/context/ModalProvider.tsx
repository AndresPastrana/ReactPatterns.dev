import { PropsWithChildren, useRef, useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = (props: PropsWithChildren) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onModalClose = () => {
    if (modalRef.current?.open) {
      setIsModalOpen(false);
      modalRef.current.close();
      return;
    }
  };
  const onModalOpen = () => {
    if (!modalRef.current?.open) {
      setIsModalOpen(true);
      modalRef.current?.showModal();
      return;
    }
  };

  return (
    <ModalContext.Provider
      value={{
        modalRef,
        isModalOpen,
        onModalClose,
        onModalOpen,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
