import { useState } from "react";
import cls from "./Sort.module.scss";

import arrow_up from "../../shared/assets/svg/arrow_up.svg";

export const Sort = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [sorted, setSorted] = useState(0);
  const sortList = ["популярности", "цене", "алфавиту"];
  const sortTitle = sortList[sorted];

  const openListClick = (i: number) => {
    setSorted(i);
    setOpenPopup(false);
  };

  return (
    <div className={cls.sort}>
      <div className={cls.label}>
        <div
          onClick={() => setOpenPopup(!openPopup)}
          className={cls.sort_event}
        >
          <img src={arrow_up} alt="" />
          <span>Сортировка по:</span>
          <p>{sortTitle}</p>
        </div>

        {openPopup && (
          <ul>
            {sortList.map((value, i) => (
              <li
                key={i}
                onClick={() => openListClick(i)}
                className={sorted === i ? cls.active : ""}
              >
                {value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
