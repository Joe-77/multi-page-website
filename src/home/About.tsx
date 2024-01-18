import frame from "../assets/frame.png";
import circle from "../assets/bg-pattern-small-circle.svg";

const About = () => {
  return (
    <div className="w-full h-[650px] sm:h-80 bg-primary px-5 overflow-hidden mt-4 relative">
      <div className=" absolute right-[170px] top-10 z-20 w-60 h-60">
        <img className="w-full h-full" src={circle} alt="" />
      </div>
      <div className="flex flex-col sm:flex-row justify-center pt-4 overflow-hidden mt-5 sm:h-[640px] relative z-40">
        <div>
          <h2 className="text-white font-bold text-2xl w-7/12 sm:w-3/4 text-center leading-9  m-auto sm:m-0 sm:text-start">
            Award-winning custom designs and digital branding solutions
          </h2>
          <p className="m-auto text-xs text-white opacity-60 w-3/4 lg:w-1/2 text-center sm:m-0 sm:text-justify pt-3 leading-5">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <div className="flex items-center justify-center sm:justify-start mt-5">
            <button className="bg-white px-2 py-1 rounded-md capitalize duration-500">
              learn more
            </button>
          </div>
        </div>
        <div>
          <img className="relative top-[-60px] sm:top-0 md:top-[-70px] lg:h-[500px]" src={frame} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
