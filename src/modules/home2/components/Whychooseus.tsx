import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { PiPresentationChart, PiFinnTheHuman } from "react-icons/pi";

const FeatureItem = ({ Icon, title, description }: any) => (
  <li className="mb-12 flex">
    <Icon size={100} />
    <div className="pl-4">
      <h5 className="text-2xl font-semibold mb-2">{title}</h5>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  </li>
);

function Whychooseus() {
  const features = [
    {
      Icon: IoExtensionPuzzleOutline,
      title: "Best Strategy",
      description:
        "The Love Boat soon will be making another run explore strange tools enter new worlds.",
    },
    {
      Icon: PiPresentationChart,
      title: "High-Quality Services",
      description:
        "The Love Boat soon will be making another run explore strange tools enter new worlds.",
    },
    {
      Icon: PiFinnTheHuman,
      title: "Friendly Support",
      description:
        "The Love Boat soon will be making another run explore strange tools enter new worlds.",
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="pb-6 text-4xl font-bold">
          WHY CHOOSE US
          <div className="pt-4">
            <hr className="w-10 border-t-4 border-solid border-slate-400 rounded-xl mx-auto" />
          </div>
        </h1>
        <p className="text-lg text-gray-600">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p>
      </div>
      <div className="mx-36">
        <ul className="flex py-12 px-12 space-x-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Whychooseus;
