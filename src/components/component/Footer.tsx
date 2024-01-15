import { Link } from "react-router-dom";
import logo from "../../assets/logo-light.png";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import Msg from "./Msg";

const Footer = () => {
  return (
    <footer className="bg-black mt-40 text-white pt-7 relative">
      <Msg/>
      <div className="container m-auto px-4 sm:px-0 pt-28 pb-5 sm:pt-14">
        <div className="flex items-center justify-between pb-5 border-b-[1px] border-b-gray-600">
          <Link to="/">
            <img className="w-40" src={logo} alt="" />
          </Link>
          <ul className="flex gap-4">
            <li>
              <Link to="/about">our company</Link>
            </li>
            <li>
              <Link to="/location">location</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-3 justify-between items-end mt-5 pb-5">
          <div>
            <p className="text-xs leading-6 text-gray-500">
              Designo Central Office <br /> 3886 Wellington Street
              <br /> Toronto, Ontario M9C 3J5
            </p>
          </div>
          <div className="text-xs flex flex-col gap-2 text-gray-500">
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl text-orange-500 duration-500 hover:text-orange-800 w-fit cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="text-2xl text-orange-500 duration-500 hover:text-orange-800 w-fit cursor-pointer">
              <FaYoutube />
            </span>
            <span className="text-2xl text-orange-500 duration-500 hover:text-orange-800 w-fit cursor-pointer">
              <FaTwitter />
            </span>
            <span className="text-2xl text-orange-500 duration-500 hover:text-orange-800 w-fit cursor-pointer">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
