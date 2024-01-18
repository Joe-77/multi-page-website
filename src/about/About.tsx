import about1 from "../assets/image-about-hero.jpg";
const About = () => {
  return (
    <div className="flex flex-col-reverse items-center sm:flex-row mt-10 ">
      <div className="bg-primary h-auto p-8 lg:px-20 sm:py-0 sm:h-80 flex flex-col justify-center text-center sm:text-start text-white sm:rounded-bl-xl sm:rounded-tl-xl sm:w-3/4 lg:w-1/2 relative">
        <div className="absolute w-full h-full bg-oneCircle top-0 left-0 bg-cover"></div>
        <h2 className="text-3xl font-bold pb-5 tracking-wider relative z-40">
          About Us
        </h2>
        <p className="text-xs sm:text-[10px] leading-6 opacity-75">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      <div className="lg:flex-1 relative">
        <div className="overlay absolute top-0 left-0 bg-primary w-full h-full opacity-50 sm:rounded-br-xl sm:rounded-tr-xl"></div>
        <img
          className="h-80 sm:rounded-br-xl sm:rounded-tr-xl w-[620px]"
          src={about1}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
