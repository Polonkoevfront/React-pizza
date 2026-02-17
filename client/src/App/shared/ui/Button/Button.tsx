import { FC, ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "../../lib/classNames";

type buttonVariants = "primary" | "default" | "outline";
type buttonW = 211 | 155 | 150 | 132;
type buttonH = 55 | 50 | 40;

interface ButtonProps {
  children: ReactNode;
  variant?: buttonVariants;
  width?: buttonW;
  height?: buttonH;
  className?: string;
  disabled?: boolean;
}

const variantClasses: Record<buttonVariants, string> = {
  primary: cls.primary,
  default: cls.default,
  outline: cls.outline,
};

const widthClasses: Record<buttonW, string> = {
  211: cls.w211,
  155: cls.w155,
  150: cls.w150,
  132: cls.w132,
};

const heightClasses: Record<buttonH, string> = {
  55: cls.h55,
  50: cls.h50,
  40: cls.h40,
};

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className = "",
    variant = "default",
    width = 150,
    height = 50,
    disabled,
    ...othersProps
  } = props;

  const classes = [
    variant && variantClasses[variant],
    width && widthClasses[width],
    height && heightClasses[height],
    className,
  ];

  return (
    <button
      className={classNames(cls.btn, {}, classes)}
      disabled={disabled}
      {...othersProps}
    >
      {children}
    </button>
  );
};
