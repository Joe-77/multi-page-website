import { country } from "../../data/data";

const Country = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-5 mt-20">
      {country.map((e) => (
        <div className="m-auto text-center" key={e.id}>
          <div className="relative w-40 lg:w-52">
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[#D1D3D4] opacity-65 z-[-20]"></div>
            <img src={e.img} alt="" />
          </div>
          <h2 className="pt-5 pb-7 text-xs lg:text-xl  uppercase tracking-[3px]">
            {e.name}
          </h2>
          <a
            className="cursor-pointer bg-primary p-2 rounded-md text-white capitalize duration-500 hover:scale-105 block w-fit m-auto"
            href={`https://www.bing.com/maps?mepi=24%7E%7ETopOfPage%7EMap_Image&ty=18&q=${e.location}&satid=id.sid%3A370ed614-32e1-4326-a356-dc0a7dd56aaa&mb=73%7E-142.100006%7E40.900002%7E-51.900002&ppois=56.95000076293945_-97.00000381469727_Canada_%7E&cp=56.949843%7E-97.001038&v=2&sV=1&FORM=MIRE&lvl=11.0`}
            target="_blank"
          >
            see location
          </a>
        </div>
      ))}
    </div>
  );
};

export default Country;
