import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="h-[460px] bg-[#001648]">
      {/* top-footer */}
      <div className=" pt-20 pb-[75px]">
        <div className="mx-[174px]">
          <div className="flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4 about">
              <h6 className="title text-white text-[18px] font-medium mb-[30px]">
                ABOUT OUR CONSULTING
              </h6>
              <p className=" leading-6 text-[#9ca6bf]">
                That started from this tropic port aboard this tiny ship today
                still want by theam government they survive on up to thetre east
                side to a deluxe as soldiers of artics fortune.
              </p>
              <div className="querie flex items-center text-[17px] mt-[25px] text-white gap-2">
                <FaPhoneVolume />
                Any Queries : <a href="#">(+1) 234 567 900</a>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/3 footer-recent-post">
              <h6 className="title text-white text-[18px] font-medium mb-[30px]">
                RECENT POST
              </h6>
              <ul>
                <li className="flex pb-5 pt-1 border-b border-[#ffffff1a]">
                  <img src="/src-img/1.jpg" alt="" />
                  <div className="pl-[20px]">
                    <a
                      href=""
                      className="text-[15px] font-serif font-normal  leading-4 text-white"
                    >
                      Till wanted by theam govern they survive as soldiers.
                    </a>
                    <div className="flex items-center gap-2 text-[15px] mt-1 text-[#9ca6bf] font-light">
                      <i>
                        <IoCalendarOutline />
                      </i>
                      "Feb 06, 2018"
                    </div>
                  </div>
                </li>
                <li className="flex  pt-2 ">
                  <img src="/src-img/2.jpg" alt="" />
                  <div className="pl-[20px]">
                    <a
                      href=""
                      className="text-[15px] font-serif font-normal  leading-4 text-white"
                    >
                      World don't move to beat of just one drum.
                    </a>
                    <div className="flex items-center gap-2 text-[15px] mt-1 text-[#9ca6bf] font-light">
                      <i>
                        <IoCalendarOutline />
                      </i>
                      "Mar 20, 2018"
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 px-4 col-lg-3 col-sm-6 footer-list">
              <h6 className="title text-white text-[18px] font-medium mb-[30px]">
                SOLUTIONS
              </h6>
              <ul className=" leading-8 text-[17px] font-sans text-[#9ca6bf]">
                <li className="hover:text-white flex items-center gap-3 ">
                  <GoDot />
                  <a href="#">Travel and Aviation</a>
                </li>
                <li className="hover:text-white flex items-center gap-3 ">
                  <GoDot />
                  <a href="#">Business Services</a>
                </li>
                <li className="hover:text-white flex items-center gap-3 ">
                  <GoDot />
                  <a href="#">Consumer Products</a>
                </li>
                <li className="hover:text-white flex items-center gap-3 ">
                  <GoDot />
                  <a href="#">Financial Services</a>
                </li>
                <li className="hover:text-white flex items-center gap-3 ">
                  <GoDot />
                  <a href="#">Software Research</a>
                </li>
                <li className="hover:text-white flex items-center gap-3 ">
                  <GoDot />
                  <a href="#">Quality Resourcing</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 px-4 col-lg-2 col-sm-6 footer-newsletter">
              <h6 className="title text-white text-[18px] font-medium mb-[30px]">
                NEWSLETTER
              </h6>
              <div>
                <div className="flex flex-col text-white ">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="bg-[#001648] border-b border-[#9ca6bf] rounded-none outline-none shadow-none text-base p-0 pb-3 mb-9"
                  />
                  <input
                    type="text"
                    placeholder="Email*"
                    className="bg-[#001648] border-b border-[#9ca6bf] rounded-none outline-none shadow-none text-base p-0 pb-3 mb-9"
                  />
                </div>
                <div className="">
                  <button className="text-[14px] font-medium px-[35px] leading-[50px] rounded-lg bg-white text-[#001648] hover:bg-blue-950 hover:text-white">
                    GET A QUOTES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom-footer */}
      <div className="bg-[#000F32] py-[15px]  ">
        <div className=" flex flex-wrap mx-[174px] text-[#9ca6bf]">
          <div className="w-full md:w-1/2">
            <p>© Copyrights 2018. All Rights Reserved.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ul className="flex gap-8 font-bold justify-end">
              <li className="hover:text-white">About</li>
              <li className="hover:text-white">Solutions</li>
              <li className="hover:text-white">FAQ's</li>
              <li className="hover:text-white">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
