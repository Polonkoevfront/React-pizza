import cls from "HomePage.module.scss";
import { Category, NavBar } from "../../widgets";
import { useState } from "react";

export const HomePage = () => {
  const [categoryId, setCategoryId] = useState(0);
  return (
    <div>
      <div>
        <NavBar />
        <Category
          value={categoryId}
          toogleCategoryClick={(id) => setCategoryId(id)}
        />
      </div>
    </div>
  );
};
