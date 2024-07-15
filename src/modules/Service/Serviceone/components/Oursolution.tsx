// src/components/Services.js
import {
  FaHandPointUp,
  FaLightbulb,
  FaMoneyBillWave,
  FaNetworkWired,
  FaRocket,
  FaShoppingBag,
} from "react-icons/fa";

const services = [
  {
    icon: FaShoppingBag,
    title: "Business Services",
    description:
      "The explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Business Services",
    description:
      "The explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before.",
  },
  {
    icon: FaNetworkWired,
    title: "Business Services",
    description:
      "The explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before.",
  },
  {
    icon: FaLightbulb,
    title: "Business Services",
    description:
      "The explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before.",
  },
  {
    icon: FaHandPointUp,
    title: "Business Services",
    description:
      "The explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before.",
  },
  {
    icon: FaRocket,
    title: "Business Services",
    description:
      "The explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before.",
  },
];

const Services = () => {
  return (
    <div className=" mx-[280px] ">
      <div className="text-center">
        <h1 className="pb-[22px] text-[38px] font-bold">
          OUR SOLUTIONS
          <div className="pt-4">
            <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl mx-auto" />
          </div>
        </h1>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {services.map((service, index) => (
          <div key={index} className="text-center p-6 ">
            <div className="mb-4 text-[#1c3556] flex items-center justify-center hover:scale-110 duration-300 ease-in-out">
              <service.icon size={70} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
