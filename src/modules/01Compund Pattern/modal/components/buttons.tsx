import { useModal } from "../hooks/useModal";
import { ButtonProps } from "../modal.interfaces";

export const CloseBtn = (props: ButtonProps) => {
  const { onModalClose } = useModal();
  const { onClick, ...rest } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    onModalClose();
  };

  return (
    <button onClick={handleClick} {...rest}>
      Close
    </button>
  );
};

export const OpenBtn = (props: ButtonProps) => {
  const { onModalOpen } = useModal();
  const { onClick, ...rest } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    onModalOpen();
  };

  return (
    <button onClick={handleClick} {...rest}>
      Open
    </button>
  );
};
