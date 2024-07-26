import Advice from "./components/Advice";
import Banner from "./components/Banner";
import Detailspro from "./components/Detailspro";

function Projectdetails() {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Detailspro />
      </div>
      <div>
        <Advice />
      </div>
    </div>
  );
}

export default Projectdetails;
