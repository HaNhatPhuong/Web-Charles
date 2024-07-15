import { CiMedal, CiStar } from "react-icons/ci";
import { PiTargetThin } from "react-icons/pi";

function About() {
  return (
    <div className="h-[411px] mx-[174px]">
      <div className="flex ">
        <div className=" w-full lg:w-1/2">
          <img src="/src-img/About-pic.jpg" alt="" />
        </div>
        <div className="w-full lg:w-1/2 text-center">
          <h1 className=" relative pb-[18px] text-[38px] font-bold">
            ABOUT OUR COMPANY
          </h1>
          <div className="">
            <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl mx-auto" />
          </div>
          <p className="pt-[24px] leading-6 text-[18px] text-[#555555]">
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today still wanted by the government they survive as
            soldiers of fortune to a deluxe apartment in the sky moving on up to
            the east side a family.
          </p>
          <p className="pt-[10px] leading-6 text-[18px] text-[#555555]">
            The government they survive as soldiers of fortune baby if you've
            ever wondered the east side to a deluxe apartment.
          </p>
          <ul className="mt-8 pt-6 border-t-2 border-gray-300 flex justify-around text-xl font-bold text-gray-800">
            <li className="flex flex-col items-center">
              <CiStar size={60} className="mb-2 text-[#555555]" />
              Vision
            </li>
            <li className="flex flex-col items-center">
              <PiTargetThin size={60} className="mb-2 text-[#555555]" />
              Missions
            </li>
            <li className="flex flex-col items-center">
              <CiMedal size={60} className="mb-2 text-[#555555]" />
              Goals
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
