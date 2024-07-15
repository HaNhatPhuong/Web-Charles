import { FaPhoneVolume } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="h-[460px] bg-[#001648]">
      {/* Top Footer */}
      <div className="pt-20 pb-[75px]">
        <div className="mx-[174px]">
          <div className="flex flex-wrap">
            {/* About Section */}
            <div className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <h6 className="text-white text-[18px] font-medium mb-[30px]">
                ABOUT OUR CONSULTING
              </h6>
              <p className="leading-6 text-[#9ca6bf]">
                That started from this tropic port aboard this tiny ship today
                still want by theam government they survive on up to thetre east
                side to a deluxe as soldiers of artics fortune.
              </p>
              <div className="flex items-center text-[17px] mt-[25px] text-white gap-2">
                <FaPhoneVolume />
                Any Queries : <a href="tel:+1234567900">(+1) 234 567 900</a>
              </div>
            </div>
            {/* Recent Post Section */}
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/3">
              <h6 className="text-white text-[18px] font-medium mb-[30px]">
                RECENT POST
              </h6>
              <ul>
                <li className="flex pb-5 pt-1 border-b border-[#ffffff1a]">
                  <img src="/src-img/1.jpg" alt="" className="w-16 h-16" />
                  <div className="pl-[20px]">
                    <a
                      href="#"
                      className="text-[15px] font-serif font-normal leading-4 text-white"
                    >
                      Till wanted by theam govern they survive as soldiers.
                    </a>
                    <div className="flex items-center gap-2 text-[15px] mt-1 text-[#9ca6bf] font-light">
                      <IoCalendarOutline />
                      "Feb 06, 2018"
                    </div>
                  </div>
                </li>
                <li className="flex pt-2">
                  <img src="/src-img/2.jpg" alt="" className="w-16 h-16" />
                  <div className="pl-[20px]">
                    <a
                      href="#"
                      className="text-[15px] font-serif font-normal leading-4 text-white"
                    >
                      World don't move to beat of just one drum.
                    </a>
                    <div className="flex items-center gap-2 text-[15px] mt-1 text-[#9ca6bf] font-light">
                      <IoCalendarOutline />
                      "Mar 20, 2018"
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Solutions Section */}
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/6">
              <h6 className="text-white text-[18px] font-medium mb-[30px]">
                SOLUTIONS
              </h6>
              <ul className="leading-8 text-[17px] font-sans text-[#9ca6bf]">
                {[
                  "Travel and Aviation",
                  "Business Services",
                  "Consumer Products",
                  "Financial Services",
                  "Software Research",
                  "Quality Resourcing",
                ].map((solution, index) => (
                  <li
                    key={index}
                    className="hover:text-white flex items-center gap-3"
                  >
                    <GoDot />
                    <a href="#">{solution}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Newsletter Section */}
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/6">
              <h6 className="text-white text-[18px] font-medium mb-[30px]">
                NEWSLETTER
              </h6>
              <div className="flex flex-col text-white">
                <input
                  type="text"
                  placeholder="Name*"
                  className="bg-[#001648] border-b border-[#9ca6bf] rounded-none outline-none text-base p-0 pb-3 mb-9"
                />
                <input
                  type="text"
                  placeholder="Email*"
                  className="bg-[#001648] border-b border-[#9ca6bf] rounded-none outline-none text-base p-0 pb-3 mb-9"
                />
              </div>
              <div>
                <button className="text-[14px] font-medium px-[35px] leading-[50px] rounded-lg bg-white text-[#001648] hover:bg-blue-950 hover:text-white">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="bg-[#000F32] py-[15px]">
        <div className="flex flex-wrap mx-[174px] text-[#9ca6bf]">
          <div className="w-full md:w-1/2">
            <p>© Copyrights 2018. All Rights Reserved.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ul className="flex gap-8 font-bold justify-end">
              {["About", "Solutions", "FAQ's", "Contact"].map((item, index) => (
                <li key={index} className="hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
