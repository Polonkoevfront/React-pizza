import cls from "./HomePage.module.scss";
import { Category, NavBar, Sort } from "../../widgets";
import { useState } from "react";

export const HomePage = () => {
  const [categoryId, setCategoryId] = useState(0);
  return (
    <div>
      <div>
        <NavBar />

        <div className={cls.sort_bar}>
          <Category
            value={categoryId}
            toogleCategoryClick={(id) => setCategoryId(id)}
          />
          <Sort />
        </div>
      </div>
    </div>
  );
};
