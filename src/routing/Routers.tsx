import { Navigate, Route, Routes } from "react-router-dom";
import Company from "../components/Company";
import Location from "../components/Location";
import Contact from "../components/Contact";
import Home from "../components/home/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home/>} />
      <Route path="about" element={<Company />} />
      <Route path="location" element={<Location />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
