import { FC, useState } from "react";
import cls from "./Category.module.scss";

type CategoryProps = {
  value: number;
  toogleCategoryClick: (index: number) => void;
};

export const Category: FC<CategoryProps> = ({ value, toogleCategoryClick }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <ul className={cls.category_bar}>
      {categories.map((item, i) => (
        <li
          onClick={() => toogleCategoryClick(i)}
          key={item}
          className={value === i ? cls.active : ""}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
