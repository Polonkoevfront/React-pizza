import { Route, Routes } from "react-router";
import { HomePage } from "../pages";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/cart" element={<CartPage/>}/> */}
    </Routes>
  );
};
