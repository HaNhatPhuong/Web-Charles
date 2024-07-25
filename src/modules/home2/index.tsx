import Aboutus from "./components/Aboutus";
import Banner from "./components/Banner";
import Callout from "./components/Callout";
import Nav from "./components/Nav";
import Ourcase from "./components/Ourcase";
import Oursolution from "./components/Oursolution";

function Home2() {
  return (
    <div>
      <div className=" relative z-50">
        <Nav />
      </div>
      <div className=" ">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Callout />
      </div>
      <div className="mb-[120px]">
        <Oursolution />
      </div>
      <div className="mb-[110px]">
        <Aboutus />
      </div>
      <div>
        <Ourcase />
      </div>
    </div>
  );
}

export default Home2;
