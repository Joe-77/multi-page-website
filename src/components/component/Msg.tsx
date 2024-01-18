import { Link } from "react-router-dom";

const Msg = () => {
  return (
    <div className="absolute w-3/4 lg:w-1/2 left-1/2 top-[-120px] px-1 lg:px-4 py-5 rounded-lg -translate-x-1/2 bg-primary">
      <div className="absolute bg-circle w-3/4 lg:w-1/2 h-full bg-cover bg-no-repeat"></div>
      <div className="relative z-50 flex gap-4 flex-col sm:flex-row items-center justify-center sm:justify-between">
        <div className="w-60 m-auto sm:m-0 text-center sm:text-start">
          <h2 className="text-sm sm:text-xl font-mono bold">
            Let’s talk about your project
          </h2>
          <p className="mt-3 text-xs leading-5 opacity-60">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div>
          <Link
            to="/contact"
            className="block bg-[#FFAD9B] px-2 py-1 cursor-pointer rounded-md duration-500 hover:scale-105 w-28"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Msg;
