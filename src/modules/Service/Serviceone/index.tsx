import Banner from "./components/Banner";
import Consutation from "./components/Consutation";
import Feature from "./components/Feature";
import FeatureBanner from "./components/FeatureBanner";
import Oursolution from "./components/Oursolution";

function Serviceone() {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[110px]">
        <Oursolution />
      </div>
      <div className="mb-[120px]">
        <FeatureBanner />
      </div>
      <div className="mb-[120px]">
        <Consutation />
      </div>
      <div className=" overflow-hidden">
        <Feature />
      </div>
    </div>
  );
}

export default Serviceone;
