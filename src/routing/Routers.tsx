import { Navigate, Route, Routes } from "react-router-dom";
import Company from "../about/Company";
import Location from "../components/component/Location";
import Contact from "../components/component/Contact";
import Home from "../home/Home";
import WebApp from "../apps/WebApp";
import MobileApps from "../apps/MobileApps";
import Graphics from "../apps/Graphics";
import Error from "../components/component/Error";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<Company />} />
      <Route path="location" element={<Location />} />
      <Route path="contact" element={<Contact />} />
      <Route path="web" element={<WebApp />} />
      <Route path="app" element={<MobileApps />} />
      <Route path="graphic" element={<Graphics />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
