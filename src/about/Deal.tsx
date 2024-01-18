import about3 from "../assets/image-real-deal.jpg";
const Deal = () => {
  return (
    <div className="mt-20 flex flex-col-reverse sm:flex-row pb-16">
      <div className="sm:w-3/5 lg:w-1/2 h-60 sm:h-[420px] flex flex-col sm:justify-center bg-[#FDF3F0] px-5 py-5 sm:py-0 sm:rounded-bl-xl sm:rounded-tl-xl">
        <h3 className="text-orange-600 text-center sm:text-start text-2xl first-letter:capitalize tracking-wider pb-5">
          The real deal
        </h3>
        <div className="text-xs leading-5">
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="mt-5">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
      <div className="flex-1 sm:h-[420px] relative">
        <img
          className=" h-80 sm:h-full w-full sm:rounded-tr-xl sm:rounded-br-xl"
          src={about3}
          alt=""
        />
        <div className="overlay absolute top-0 left-0 bg-primary w-full h-full opacity-50 sm:rounded-tr-xl sm:rounded-br-xl"></div>
      </div>
    </div>
  );
};

export default Deal;
