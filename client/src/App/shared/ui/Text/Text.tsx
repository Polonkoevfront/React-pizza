import { FC, ReactNode } from "react";
import cls from "./Text.module.scss";
import { classNames } from "../../lib/classNames";

type AsType = "h1" | "h2";
type fontSize = 24 | 32;
type fontWeight = 400 | 500 | 600 | 700 | 800;

interface TextProps {
  children: ReactNode;
  as: AsType;
  fz?: fontSize;
  fw?: fontWeight;
  className?: string;
}

const fzClasses: Record<fontSize, string> = {
  24: cls.fz24,
  32: cls.fz32,
};

const fwClasses: Record<fontWeight, string> = {
  400: cls.fw400,
  500: cls.fw500,
  600: cls.fw600,
  700: cls.fw700,
  800: cls.fw800,
};

export const Text: FC<TextProps> = (props) => {
  const { children, className = "", as = "h1", fz = 32, fw = 400 } = props;

  const classes = [fz && fzClasses[fz], fw && fwClasses[fw], className];

  const getAs = {
    h1: <h1 className={classNames("", {}, classes)}>{children}</h1>,
    h2: <h2 className={classNames("", {}, classes)}>{children}</h2>,
  };

  return getAs[as];
};
