import { Link } from "react-router-dom";
import logo from "../../assets/logo-light.png";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import Msg from "./Msg";

const Footer = () => {
  return (
    <footer className="bg-black mt-40 text-white pt-7 relative px-4 lg:px-0">
      <Msg />
      <div className="container m-auto px-4 sm:px-0 pt-28 pb-5 sm:pt-14">
        <div className="flex items-center justify-between pb-5 border-b-[1px] border-b-gray-600">
          <Link to="/">
            <img className="w-20 sm:w-40" src={logo} alt="" />
          </Link>
          <ul className="flex gap-4 text-[9px] sm:text-sm">
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
        <div className="grid grid-cols-3 gap-2 flex-wrap items-end justify-between mt-5 pb-5">
          <div className="text-[7px] sm:text-sm leading-6 text-gray-500 flex flex-col gap-2">
            <p>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="text-[8px] sm:text-xs flex flex-col gap-2 text-gray-500 mb-2">
            <p>Contact Us (Central Office)</p>
            <p >P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>

          <div className="flex items-center gap-3 mb-2 ">
            <span className="text-xs sm:text-2xl text-orange-500 duration-500 hover:text-orange-800 w-fit cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="text-xs sm:text-2xl text-orange-500 duration-500 hover:text-orange-800 w-fit cursor-pointer">
              <FaYoutube />
            </span>
            <span className="text-xs sm:text-2xl text-orange-500 duration-500 hover:text-orange-800 w-fit cursor-pointer">
              <FaTwitter />
            </span>
            <span className="text-xs sm:text-2xl text-orange-500 duration-500 hover:text-orange-800 w-fit cursor-pointer">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
