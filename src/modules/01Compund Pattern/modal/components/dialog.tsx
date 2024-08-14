import { useModal } from "../hooks/useModal";
import { DialogProps } from "../modal.interfaces";

export const DialogBox = ({ children, ...rest }: DialogProps) => {
  const { modalRef } = useModal();
  return (
    <dialog ref={modalRef} {...rest}>
      {children}
    </dialog>
  );
};
