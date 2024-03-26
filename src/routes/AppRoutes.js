import { Routes, Route } from "react-router-dom";
import NotFound from "../components/not-found/NotFound";
import Home from "../views/home/Home";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/Product/Detail/:id" element={<ProductInfor />} />
        <Route path="/User/*" element={<PrivateRoutes Component={User} />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Category/:name" element={<CategoryInfor />} />
        <Route path="*" element={<NotFound />} /> */}
        <Route path="/Cozastore" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
