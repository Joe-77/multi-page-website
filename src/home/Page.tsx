import Img1 from "../assets/1.svg";
import Img2 from "../assets/2.svg";
import Img3 from "../assets/3.svg";

const Page = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-5 mt-16 px-4 sm:px-0">
      <div className="flex flex-row items-center sm:flex-col  gap-7">
        <img className=" w-36 sm:w-auto" src={Img1} alt="" />
        <div>
          <h2 className="uppercase pb-5 sm:text-center tracking-[5px] font-mono">
            PASSIONATE
          </h2>
          <p className="text-xs text-justify sm:text-center leading-5 w-11/12 sm:w-auto">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center sm:flex-col  gap-7">
        <img className=" w-36 sm:w-auto" src={Img3} alt="" />
        <div>
          <h2 className="uppercase pb-5 sm:text-center tracking-[5px] font-mono ">
            RESOURCEFUL
          </h2>
          <p className="text-xs text-justify sm:text-center leading-5 w-11/12 sm:w-auto">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>
      <div className="sm:col-span-2 lg:col-span-1 flex flex-row items-center sm:flex-col gap-7">
        <img className=" w-36 sm:w-auto" src={Img2} alt="" />
        <div>
          <h2 className="uppercase pb-5 sm:text-center tracking-[5px] font-mono">
            FRIENDLY
          </h2>
          <p className="text-xs text-justify sm:text-center leading-5 sm:w-96 lg:w-auto">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
