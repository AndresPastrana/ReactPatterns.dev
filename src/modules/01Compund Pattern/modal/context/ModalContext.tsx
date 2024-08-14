import { createContext } from "react";
import { ModalContextType } from "../types";

const modalDefaultValues: ModalContextType = {
  isModalOpen: false,
  modalRef: { current: null },
  onModalOpen: () => {},
  onModalClose: () => {},
};

export const ModalContext = createContext<ModalContextType>(modalDefaultValues);
