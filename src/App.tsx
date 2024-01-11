import LayOut from "./components/LayOut";
import Routers from "./routing/Routers";

function App() {
  return (
    <div className=" container px-4 sm:px-0 m-auto">
      <LayOut />
      <Routers />
    </div>
  );
}

export default App;
