import { Link } from "react-router-dom";
import { app } from "../data/data";

export default function MobileApps() {
  window.scrollTo(0, 0);
  return (
    <section className="pb-10">
      <div className="bg-primary mt-2 py-6 rounded-md text-center relative">
        <div className="relative z-50">
          <h2 className="capitalize text-2xl font-bold italic tracking-wider text-white">
            App Design
          </h2>
          <p className="text-white opacity-75 max-w-[420px] mx-auto my-4">
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </div>
        <div className="overlay w-full h-full absolute top-0 left-0 bg-circle bg-center bg-no-repeat z-30"></div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {app.map((e) => (
          <div className="cursor-pointer group" key={e.id}>
            <img className="w-full rounded-md" src={e.img} alt="" />
            <div className="bg-[#FDF3F0] py-7 px-3 duration-1000 group-hover:bg-primary rounded-md text-center ">
              <h2 className="uppercase text-orange-500 pb-5 tracking-[5px] font-mono text-xl group-hover:text-white duration-1000">
                {e.name}
              </h2>
              <p className="group-hover:text-white duration-1000 text-sm leading-7">
                {e.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 flex gap-5">
        <Link
          to="/web"
          className="bg-web bg-no-repeat h-40 sm:h-[158px] bg-cover w-full mb-3 sm:mb-1 relative flex flex-col justify-center items-center text-white "
        >
          <div className="overlay absolute top-0 w-full h-full bg-[#E7816B] opacity-50"></div>
          <div className="relative z-50">
            <h3 className="text-2xl mb-1 capitalize font-mono">web design</h3>
            <p className="italic opacity-50 text-center">view project</p>
          </div>
        </Link>
        <Link
          to="/graphic"
          className="bg-graphic bg-cover bg-no-repeat relative w-full h-40 sm:h-[155px] flex flex-col justify-center items-center text-white mt-1"
        >
          <div className="overlay absolute top-0 w-full h-full bg-[#E7816B] opacity-50"></div>
          <div className="relative z-50">
            <h3 className="text-2xl mb-1 capitalize font-mono">
              graphic design
            </h3>
            <p className="italic opacity-50 text-center">view project</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
