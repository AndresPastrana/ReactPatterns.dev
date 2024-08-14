import { PropsWithChildren } from "react";
import { ModalProvider } from "../context/ModalProvider";
import { CloseBtn, DialogBox, OpenBtn } from ".";

const Modal = (props: PropsWithChildren) => {
  return <ModalProvider>{props.children}</ModalProvider>;
};

const ModalComponent = Object.assign(Modal, { DialogBox, CloseBtn, OpenBtn });

export default ModalComponent;
