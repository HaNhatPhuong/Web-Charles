import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

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
            ? "fixed top-0 w-full z-50 bg-white transition-transform duration-500 ease-in-out transform translate-y-0"
            : "relative transition-transform duration-500 ease-in-out transform"
        } h-[77px] mb-[32px] bg-white ${
          !isNavFixed ? "mr-[160px] ml-[210px]" : ""
        } flex pl-[55px]`}
      >
        <img
          src="https://html.creativegigstf.com/charles/images/logo/logo.png"
          alt=""
        />
        <div className="flex mr-auto">
          <ul className="text-[#001635] flex pl-[35px]  Home-Name">
            {[
              {
                name: "HOME",
                links: [
                  { name: "Home version one", path: "/" },
                  { name: "Home version two", path: "/home2" },
                ],
              },
              {
                name: "PAGES",
                links: [
                  { name: "ABOUT US", path: "/aboutus" },
                  { name: "OUR TEAM", path: "/ourteam" },
                  { name: "FAQ'S", path: "/fqa" },
                  { name: "404", path: "/404" },
                  { name: "SHOP", path: "/shop" },
                  { name: "SHOP DETAILS", path: "/shopdetails" },
                ],
              },
              {
                name: "SERVICE",
                links: [
                  { name: "SERVICE ONE", path: "/serviceone" },
                  { name: "SERVICE TWO", path: "/servicetwo" },
                  { name: "DETAILS SERVICE", path: "/servicedtails" },
                ],
              },
              {
                name: "PORTFOLIO",
                links: [
                  { name: "PROJECT", path: "/project" },
                  { name: "PROJECT DETAILS", path: "/projectdetails" },
                ],
              },
              {
                name: "BLOGS",
                links: [
                  { name: "BLOG LIST", path: "/bloglist" },
                  { name: "BLOG GIRD", path: "/bloggird" },
                  { name: "BLOG DETAILS", path: "/blogdetails" },
                ],
              },
              { name: "CONTACT", links: [] },
            ].map((item, index) => (
              <li
                key={index}
                className="relative group pr-[40px] flex items-center"
              >
                <a
                  href="#"
                  className="flex items-center hover:text-white space-x-4"
                >
                  {item.name} {item.links.length > 0 && <IoIosArrowDown />}
                </a>
                {item.links.length > 0 && (
                  <ul
                    className="absolute left-[-15px] top-full bg-white text-[#001635] w-[200px] overflow-hidden max-h-0 
                  transition-all duration-700 ease-out group-hover:max-h-[500px] "
                  >
                    {item.links.map((link, idx) => (
                      <Link key={idx} to={link.path}>
                        <a className="block px-2 py-2 hover:bg-slate-800 hover:text-slate-300">
                          {link.name}
                        </a>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[#001635] flex pl-[20px] py-[28px] ml-auto icon">
          <div className="flex">
            <a href="" className="w-[55px]">
              <BsCartCheck size={20} />
            </a>
            <a href="" className="w-[55px]">
              <AiOutlineSearch size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
