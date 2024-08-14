import {
  ButtonHTMLAttributes,
  DialogHTMLAttributes,
  PropsWithChildren,
} from "react";

export interface DialogProps
  extends React.DetailedHTMLProps<
    DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  > {}

export interface ButtonProps
  extends React.DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    PropsWithChildren {}
