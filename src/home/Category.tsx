import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link to="/web" className="bg-web bg-cover bg-no-repeat h-40 sm:h-80 relative ">
          <div className="overlay absolute top-0 w-full h-full bg-[#E7816B] opacity-50"></div>

          <div className="relative z-50 flex flex-col justify-center items-center h-full text-white">
            <h3 className="text-2xl mb-1 capitalize font-mono">web design</h3>
            <p className="italic opacity-50">view project</p>
          </div>
        </Link>
        <div>
          <Link
            to="/app"
            className="bg-appDesign bg-no-repeat h-40 sm:h-[158px] bg-cover w-full mb-3 sm:mb-1 relative flex flex-col justify-center items-center text-white "
          >
            <div className="overlay absolute top-0 w-full h-full bg-[#E7816B] opacity-50"></div>
            <div className="relative z-50">
              <h3 className="text-2xl mb-1 capitalize font-mono">app design</h3>
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
      </div>
    </section>
  );
};

export default Category;
