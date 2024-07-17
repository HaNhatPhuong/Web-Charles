import Adress from "./Components/Adress";
import Consutation from "./Components/Consutation";
import Map from "./Components/Map";

function Contact() {
  return (
    <div>
      <div className="mt-[109px]">
        <Map />
      </div>
      <div className="mt-[120px]">
        <Consutation />
      </div>
      <div className="mt-[120px]">
        <Adress />
      </div>
    </div>
  );
}

export default Contact;
