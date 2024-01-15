import { Link } from "react-router-dom";
import logo from "../../assets/logo-dark.png";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [hideMenu, setHideMenu] = useState(false);

  window.onscroll = () => {
    document.querySelector(".menu")?.classList.add("right-[-500px]");
    setTimeout(() => {
      setHideMenu(true);
    }, 1000);
  };

  return (
    <nav className={`w-full ${hideMenu && `overflow-hidden`}`}>
      <div className="flex justify-between items-center py-5">
        <Link to="/" className="logo w-36 sm:w-52">
          <img src={logo} alt="" />
        </Link>

        <div className="relative">
          <span
            onClick={() => setHideMenu(false)}
            className="text-2xl cursor-pointer sm:hidden"
          >
            <RiMenu3Line />
          </span>
          <ul
            className={`menu absolute first-letter: z-50 top-[-20px] sm:static sm:top-0 bg-black text-white sm:bg-white sm:text-black min-h-[200vh] sm:min-h-5  w-40 sm:w-auto ${
              hideMenu ? "right-[-500px]" : "right-[-16px]"
            } px-3 py-2 leading-8 sm:leading-6 duration-700 sm:flex items-center gap-4 capitalize text-sm`}
          >
            <span
              onClick={() => setHideMenu(true)}
              className="flex justify-end text-xl pb-3 cursor-pointer sm:hidden"
            >
              <MdClose />
            </span>
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
      </div>
    </nav>
  );
};

export default Header;
