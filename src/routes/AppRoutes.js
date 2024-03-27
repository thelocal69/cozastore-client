import { Routes, Route } from "react-router-dom";
import NotFound from "../components/not-found/NotFound";
import Home from "../views/home/Home";
import About from "../views/about/About";
import Contact from "../views/contact/Contact";
import ShopeScreen from '../views/shop/ShopeScreen';
import ShopDetail from '../views/shop-detail/ShopDetail';
import Blog from "../views/blog/Blog";


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
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<ShopeScreen />} />
        <Route path="/Shop-detail/id" element={<ShopDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
