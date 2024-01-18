import Routers from "../../routing/Routers";
import Footer from "./Footer";
import Header from "./Header";

const LayOut = () => {
  return (
    <>
      <div className=" container px-4 sm:px-0 m-auto min-h-screen">
        <Header />
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default LayOut;
