import { country } from "../../data/data";

const Location = () => {
  window.scrollTo(0, 0);
  return (
    <section>
      {country.map((e: any , id : number) => (
        <div
        key={id}
          className={`map${e.id} flex gap-2 sm:gap-4 flex-col sm:flex-row justify-between`}
        >
          <div className="bg-[#FDF3F0] flex-1 flex items-center px-10  sm:h-80">
            <div className="sm:h-80 flex flex-col justify-center py-8 sm:py-0 ">
              <h2 className="text-orange-500 capitalize text-2xl tracking-wider">
                {e.name}
              </h2>
              <div className="flex flex-col sm:flex-row gap-10 mt-5 relative">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 bg-circle bg-cover bg-no-repeat w-full h-24"></div>
                <div className="w-3/4 sm:w-1/2">
                  <h4 className="font-bold text-sm pb-2">
                    Designo {e.place} Office
                  </h4>
                  <p className="text-xs leading-6">{e.location}</p>
                </div>
                <div className="w-3/4 sm:w-1/2">
                  <h4 className="font-bold text-sm pb-2">Contact</h4>
                  <p className="text-xs leading-6">
                    P : {e.phone}
                  </p>
                  <p className="text-[10px] sm:text-xs leading-6">
                    M : {e.mail}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 sm:w-[250px] lg:w-[350px]">
            <img className="h-full w-full" src={e.map} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Location;
