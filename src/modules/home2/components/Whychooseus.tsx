import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { PiPresentationChart, PiFinnTheHuman } from "react-icons/pi";

function Whychooseus() {
  return (
    <div>
      <div>
        <div className="text-center">
          <h1 className="pb-[22px] text-[38px] font-bold">
            WHY CHOOSE US
            <div className="pt-4">
              <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl mx-auto" />
            </div>
          </h1>
          <p className="text-[18px] text-[#555555]">
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today stillers
          </p>
        </div>
        <div className="mx-[150px]  ">
          <div className="">
            <ul className="flex py-[50px] pl-[50px] pr-[20px]">
              <li className="mb-12 flex">
                <IoExtensionPuzzleOutline size={100} />

                <div className="pl-[10px]">
                  <h5 className="text-[22px] font-semibold mb-[10px]">
                    Best Strategy
                  </h5>
                  <p className="text-lg text-[#555555]">
                    The Love Boat soon will be making another run plore strange
                    tools enter new worlds.
                  </p>
                </div>
              </li>
              <li className="mb-12 flex">
                <PiPresentationChart size={100} />
                <div className="pl-[10px]">
                  <h5 className="text-[22px] font-semibold mb-[10px]">
                    High-Quality Services
                  </h5>
                  <p className="text-lg text-[#555555]">
                    The Love Boat soon will be making another run plore strange
                    tools enter new worlds.
                  </p>
                </div>
              </li>
              <li className="mb-12 flex">
                <PiFinnTheHuman size={100} />
                <div className="pl-[10px]">
                  <h5 className="text-[22px] font-semibold mb-[10px]">
                    Friendly Support
                  </h5>
                  <p className="text-lg text-[#555555]">
                    The Love Boat soon will be making another run plore strange
                    tools enter new worlds.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychooseus;
