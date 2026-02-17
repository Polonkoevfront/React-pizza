import { Button, Text } from "../../shared/ui";
import cls from "./NavBar.module.scss";

import logo from "../../shared/assets/png/logo.png";
import cart_icon from "../../shared/assets/svg/cart.svg";

export const NavBar = () => {
  return (
    <nav>
      <div className={cls.nav_logo_bar}>
        <img src={logo} alt="" />
        <div>
          <Text as="h2" fz={24} fw={800}>
            REACT PIZZA
          </Text>
          <span>самая вкусная пицца в вселенной</span>
        </div>
      </div>
      <Button>
        <p>520 ₽</p>
        <hr />
        <div>
          <img src={cart_icon} alt="" />
          <p>3</p>
        </div>
      </Button>
    </nav>
  );
};
