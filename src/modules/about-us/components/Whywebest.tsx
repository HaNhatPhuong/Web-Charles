import React from "react";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { PiFinnTheHuman, PiPresentationChart } from "react-icons/pi";

function Whywebest() {
  const Whywebestimg = "/src-img/AboutusWhywebest.jpg";
  return (
    <div>
      <div
        className="  h-[570px] bg-[#626f90]  bg-cover bg-center bg-no-repeat bg-fixed "
        style={{
          backgroundImage: `url(${Whywebestimg})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="mx-[174px] pt-[95px]">
          {/*  */}
          <div className=" text-center ">
            <h1 className="pb-[22px] text-[38px] text-white font-bold">
              WE ARE ALWAYS BEST
              <div className="pt-4">
                <hr className="w-10 border-t-[4px] border-solid border-white rounded-xl mx-auto" />
              </div>
            </h1>
            <p className="text-[18px] text-white">
              A tale of a fateful trip thatstarted from this tropic port aboard
              this tiny ship today stillers
            </p>
          </div>
          {/*  */}
          <div className="flex flex-wrap pt-[55px]">
            <div className="w-full lg:w-1/2 bg-slate-100">
              <ul className="py-[65px] pl-[50px] pr-[20px]">
                <li className="mb-12 flex">
                  <IoExtensionPuzzleOutline size={100} />

                  <div className="pl-[10px]">
                    <h5 className="text-[22px] font-semibold mb-[10px]">
                      Best Strategy
                    </h5>
                    <p className="text-lg text-[#555555]">
                      The Love Boat soon will be making another run plore
                      strange tools enter new worlds.
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
                      The Love Boat soon will be making another run plore
                      strange tools enter new worlds.
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
                      The Love Boat soon will be making another run plore
                      strange tools enter new worlds.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="/src-img/Whywebestimg2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whywebest;
