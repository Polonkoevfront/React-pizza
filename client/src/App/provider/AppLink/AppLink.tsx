import { Link, LinkProps } from "react-router";
import { classNames } from "../../shared/lib/classNames";

interface AppLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const AppLink: React.FC<AppLinkProps> = ({
  children,
  to,
  className = "",
  ...rest
}) => {
  return (
    <Link to={to} className={classNames("", {}, [className])}>
      {children}
    </Link>
  );
};
