import about2 from "../assets/image-world-class-talent.jpg";
const World = () => {
  return (
    <div className="flex flex-col-reverse items-center sm:flex-row mt-10">
      <div className="sm:flex-1 relative">
        <div className="overlay absolute top-0 left-0 bg-primary w-full h-full opacity-50 sm:rounded-bl-xl sm:rounded-tl-xl"></div>
        <img
          className="h-80 sm:h-[450px] w-[620px] sm:w-full sm:rounded-bl-xl sm:rounded-tl-xl"
          src={about2}
          alt=""
        />
      </div>
      <div className="bg-[#FDF3F0] h-auto p-8 lg:px-20 sm:py-0 sm:h-[450px] flex flex-col justify-center text-center sm:text-start sm:rounded-br-xl sm:rounded-tr-xl sm:w-1/2  relative ">
        <div className="absolute w-full h-full bg-oneCircle top-0 left-0 bg-center"></div>

        <div className="text-xs sm:text-[10px] leading-6 opacity-75">
          <h2 className=" text-2xl lg:text-3xl font-bold pb-5 tracking-wider relative z-40 text-orange-600">
            World-class talent
          </h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="mt-5">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default World;
