import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
// import "../App.css";

function Nav() {
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`${
          isNavFixed
            ? "fixed top-0 w-full z-50 bg-[#001635] opacity-1 transition-opacity duration-500 transform translate-y-0"
            : "relative transition-opacity duration-500 transform "
        } pl-[25px] h-[77px] mb-[32px] bg-[#001635] ${
          !isNavFixed ? "mr-[174px] ml-[174px]" : ""
        } flex`}
      >
        <div className="  flex mr-auto">
          <ul className=" text-slate-300 flex  pl-[35px] py-full Home-Name ">
            <li className=" relative group">
              <a
                href="#"
                className="flex items-center hover:text-white space-x-4"
              >
                HOME <IoIosArrowDown className="ml-1" />{" "}
                <span className="">/</span>
              </a>
              <ul className="dropdown absolute left-[-15px] top-full bg-[#fff] text-slate-600 w-[200px] hidden group-hover:block">
                <Link to={"/"}>
                  <a
                    href=""
                    className="block px-2 py-2 hover:bg-slate-800 hover:text-slate-300"
                  >
                    Home version one
                  </a>
                </Link>
                <li>
                  <a
                    href=""
                    className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                  >
                    Home version two
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a
                href=""
                className="flex items-center hover:text-white space-x-4"
              >
                PAGES <IoIosArrowDown className="ml-1" />
                <span className="">/</span>
              </a>
              <ul className="dropdown2 absolute left-[-15px] top-full bg-[#fff] text-slate-600 w-[160px] hidden group-hover:block">
                <Link to={"aboutus"}>
                  <a
                    href=""
                    className="block px-2 py-2 hover:bg-slate-800 hover:text-slate-300"
                  >
                    ABOUT US
                  </a>
                </Link>
                <Link to={"ourteam"}>
                  <a
                    href=""
                    className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                  >
                    OUR TEAM
                  </a>
                </Link>
                <Link to={"fqa"}>
                  <a
                    href=""
                    className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                  >
                    FAQ'S
                  </a>
                </Link>
                <Link to={"404"}>
                  <a
                    href=""
                    className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                  >
                    404
                  </a>
                </Link>
                <Link to={"/shop"}>
                  <a
                    href=""
                    className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                  >
                    SHOP
                  </a>
                </Link>
                <Link to={"shopdetails"}>
                  <a
                    href=""
                    className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                  >
                    SHOP DETAILS
                  </a>
                </Link>
                <li className=" relative group">
                  <a
                    href=""
                    className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                  >
                    THIRD LEVEL MENU
                  </a>
                  <ul className=" absolute left-[100px] bg-[#fff] text-slate-600 w-[160px] hidden hover:block ">
                    <li>
                      <a
                        href=""
                        className="block px-2 py-2 hover:bg-slate-800 hover:text-slate-300"
                      >
                        Home version one
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                      >
                        Home version two
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a
                href=""
                className="flex items-center hover:text-white space-x-4"
              >
                SERVICE <IoIosArrowDown className="ml-1" />
                <span className="">/</span>
              </a>
              <ul className="dropdown absolute left-[-15px] top-full bg-[#fff] text-slate-600 w-[160px] hidden group-hover:block">
                <li>
                  <a
                    href=""
                    className="block px-2 py-2 hover:bg-slate-800 hover:text-slate-300"
                  >
                    SERVICE ONE
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                  >
                    SERVICE TWO
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                  >
                    DETAILS SERVICE
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a
                href=""
                className="flex items-center hover:text-white space-x-4"
              >
                PORTFOLIO <IoIosArrowDown className="ml-1" />
                <span className="">/</span>
              </a>
              <ul className="dropdown absolute left-[-15px] top-full bg-[#fff] text-slate-600 w-[160px] hidden group-hover:block">
                <li>
                  <a
                    href=""
                    className="block px-2 py-2 hover:bg-slate-800 hover:text-slate-300"
                  >
                    PROJECT
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                  >
                    PROJECT DETAILS
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a
                href=""
                className="flex items-center hover:text-white space-x-4"
              >
                BLOGS <IoIosArrowDown className="ml-1" />
                <span className="">/</span>
              </a>
              <ul className="dropdown absolute left-[-15px] top-full bg-[#fff] text-slate-600 w-[160px] hidden group-hover:block">
                <li>
                  <a
                    href=""
                    className="block px-2 py-2 hover:bg-slate-800 hover:text-slate-300"
                  >
                    BLOG LIST
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                  >
                    BLOG GIRD
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block px-2 py-2  hover:bg-slate-800 hover:text-slate-300 "
                  >
                    BLOG DETAILS
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a href="" className="flex items-center hover:text-white">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className=" text-slate-300 flex pl-[20px] py-[28px] ml-auto  icon">
          <div className="flex gap-4 mr-14 ">
            <a href="">
              <ImFacebook size={20} />
            </a>
            <a href="">
              <FaTwitter size={20} />
            </a>
            <a href="">
              <FaLinkedinIn size={20} />
            </a>
            <a href="">
              <FaPinterestP size={20} />
            </a>
          </div>
          <div className="flex ">
            <a href="" className="w-[55px]  ">
              <BsCartCheck size={20} />
            </a>

            <a href="" className="w-[55px]">
              <AiOutlineSearch size={20} />
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Nav;
