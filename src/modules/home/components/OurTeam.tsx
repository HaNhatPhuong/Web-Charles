import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
function OurTeam() {
  return (
    <div>
      <div className="h-[533px] px-[174px]">
        <div className=" text-center">
          <h1 className="pb-[22px] text-[38px] font-bold">
            OUR TEAM
            <div className="pt-4">
              <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl mx-auto" />
            </div>
          </h1>
          <p className="text-[18px] text-[#555555]">
            A tale of a fateful trip thatstarted from this tropic port aboard
            this tiny ship today stillers
          </p>
        </div>
        {/* container-img */}
        <div className=" flex flex-row mt-[30px]">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-[15px] mt-[30px] text-center">
            <div className="relative group">
              <img src="/src-img/Ourteam1.jpg" alt="" />
              <div
                className=" text-white absolute top-0 left-0 w-full h-full bg-[rgba(0,26,87,0.7)] opacity-0 group-hover:opacity-100 transition-all 
              duration-500 ease-in-out transform scale-y-0 group-hover:scale-y-100 flex flex-col justify-center items-center   "
              >
                <ul className=" flex gap-4">
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaPinterestP />
                  </li>
                </ul>
                <p>The government they survive as soldiers of fortune.</p>
              </div>
            </div>

            <div className="py-[13px] border-[1px] border-slate-200 rounded-xl text-[#555555]">
              <h3 className="text-[20px] font-bold"> Richards Mills</h3>
              <p>Sales Consultant</p>
            </div>
          </div>
          {/*  */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-[15px] mt-[30px] text-center">
            <div className=" relative group">
              <img src="/src-img/Ourteam2.jpg" alt="" />
              <div
                className=" text-white absolute top-0 left-0 w-full h-full bg-[rgba(0,26,87,0.7)] opacity-0 group-hover:opacity-100 transition-all 
              duration-500 ease-in-out transform scale-y-0 group-hover:scale-y-100 flex flex-col justify-center items-center "
              >
                <ul className="flex gap-4">
                  <li className="  ">
                    <FaTwitter />
                  </li>
                  <li className=" ">
                    <FaFacebookF />
                  </li>
                  <li className=" ">
                    <FaPinterestP />
                  </li>
                </ul>
                <p>The government they survive as soldiers of fortune.</p>
              </div>
            </div>
            <div className="py-[13px] border-[1px] border-slate-200 rounded-xl text-[#555555]">
              <h3 className="text-[20px] font-bold">Mike Hussey</h3>
              <p>Founder, CEO</p>
            </div>
          </div>
          {/*  */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-[15px] mt-[30px] text-center">
            <div className=" relative group">
              <img src="/src-img/Ourteam3.jpg" alt="" />
              <div
                className=" text-white absolute top-0 left-0 w-full h-full bg-[rgba(0,26,87,0.7)] opacity-0 group-hover:opacity-100 transition-all 
              duration-500 ease-in-out transform scale-y-0 group-hover:scale-y-100 flex flex-col justify-center items-center "
              >
                <ul className="flex gap-4">
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaPinterestP />
                  </li>
                </ul>
                <p>The government they survive as soldiers of fortune.</p>
              </div>
            </div>
            <div className="py-[13px] border-[1px] border-slate-200 rounded-xl text-[#555555]">
              <h3 className="text-[20px] font-bold">Jenilia Dsosa</h3>
              <p>Marketing Lead</p>
            </div>
          </div>
          {/*  */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-[15px] mt-[30px] text-center">
            <div className=" relative group">
              <img src="/src-img/Ourteam4.jpg" alt="" />
              <div
                className=" text-white absolute top-0 left-0 w-full h-full bg-[rgba(0,26,87,0.7)] opacity-0 group-hover:opacity-100 transition-all 
              duration-500 ease-in-out transform scale-y-0 group-hover:scale-y-100 flex flex-col justify-center items-center"
              >
                <ul className="flex gap-4">
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaPinterestP />
                  </li>
                </ul>
                <p>The government they survive as soldiers of fortune.</p>
              </div>
            </div>
            <div className="py-[13px] border-[1px] border-slate-200 rounded-xl text-[#555555]">
              <h3 className="text-[20px] font-bold">David Warner</h3>
              <p>SEO Analyst</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
