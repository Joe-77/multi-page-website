import Country from "../components/component/Country";
import About from "./About";
import Deal from "./Deal";
import World from "./World";

const Company = () => {
  window.scrollTo(0, 0);
  return (
    <section className="px-0 sm:px-3 lg:px-5">
      <About />
      <World />
      <Country/>
      <Deal/>
    </section>
  );
};

export default Company;
