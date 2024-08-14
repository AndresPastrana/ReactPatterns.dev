import { RefObject } from "react";

export type ModalContextType = {
  modalRef: RefObject<HTMLDialogElement> | { current: null };
  isModalOpen: boolean;
  onModalOpen: () => void;
  onModalClose: () => void;
};
