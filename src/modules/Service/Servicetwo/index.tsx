import Banner from "./components/Banner";
import Consutation from "./components/Consutation";
import Feature from "./components/Feature";
import FeatureBanner from "./components/FeatureBanner";
import Ourservice2 from "./components/Ourservice2";

function Servicetwo() {
  return (
    <div>
      <div className="mb-[100px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Ourservice2 />
      </div>
      <div className="mb-[120px]">
        <FeatureBanner />
      </div>
      <div className="mb-[100px]">
        <Consutation />
      </div>
      <div className=" overflow-hidden">
        <Feature />
      </div>
    </div>
  );
}

export default Servicetwo;
