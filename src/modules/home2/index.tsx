import Aboutus from "./components/Aboutus";
import Banner from "./components/Banner";
import Callout from "./components/Callout";
import Nav from "./components/Nav";
import Ourcase from "./components/Ourcase";
import Oursolution from "./components/Oursolution";
import Whywebest from "./components/FQA";
import Whychooseus from "./components/Whychooseus";
import Banner2 from "./components/Banner2";
import New from "./components/New";
import SimpleMap from "./components/Map";
import Footer from "./components/Footer";

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
      <div className="mb-[120px]">
        <Ourcase />
      </div>
      <div className="mb-[270px]">
        <Whywebest />
      </div>
      <div className="">
        <Whychooseus />
      </div>
      <div className="mb-[120px]">
        <Banner2 />
      </div>
      <div className="mb-[120px]">
        <New />
      </div>
      <div>
        <SimpleMap />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home2;
