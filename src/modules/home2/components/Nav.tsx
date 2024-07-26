import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const languages = [
    {
      name: "English",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_Kingdom.svg",
    },
    {
      name: "French",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
    },
    {
      name: "German",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    },
    {
      name: "Italian",
      flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    },
    {
      name: "Spanish",
      flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (language: { name: any; flag?: string }) => {
    setSelectedLanguage(language.name);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <img alt={`${selectedLanguage} Flag`} className="w-6 h-4 mr-2" />
        <span>{selectedLanguage}</span>
      </div>
      {isOpen && (
        <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-md">
          {languages.map((language) => (
            <li
              key={language.name}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => selectLanguage(language)}
            >
              <img
                src={language.flag}
                alt={`${language.name} Flag`}
                className="w-6 h-4 mr-2"
              />
              <span>{language.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

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
      <div className="bg-[#001635]">
        <div className="h-[52px] mx-[174px] flex items-center justify-between px-4 text-white text-sm">
          <div className="flex">
            <p className="mr-4">We are leading consultant firm!</p>
            <LanguageSelector />
          </div>
          <div className="flex gap-4">
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
        </div>
      </div>
      <div className="">
        <div>
          <div
            className={`${
              isNavFixed
                ? "fixed top-0 w-full z-50 bg-white shadow-xl transition-transform duration-300 ease-in-out transform translate-y-0"
                : "relative transition-transform duration-300 ease-in-out transform"
            } h-[77px] bg-white flex items-center px-[174px]`}
          >
            <a href="/">
              <img
                src="https://html.creativegigstf.com/charles/images/logo/logo.png"
                alt="Charles Logo"
              />
            </a>
            <div className="flex mr-auto">
              <ul className="text-[#001635] flex pl-[35px] items-center space-x-6">
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
                  { name: "CONTACT", path: "/contact", links: [] },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="relative group pr-[40px] flex items-center"
                  >
                    <Link
                      to={item.path || "#"}
                      className="flex items-center  space-x-4"
                    >
                      {item.name}{" "}
                      {item.links && item.links.length > 0 && (
                        <IoIosArrowDown />
                      )}
                    </Link>

                    {item.links.length > 0 && (
                      <ul
                        className="absolute left-0 top-full bg-white text-[#001635] w-[200px] overflow-hidden max-h-0 
                  transition-all duration-700 ease-out group-hover:max-h-[500px] "
                      >
                        {item.links.map((link, idx) => (
                          <Link key={idx} to={link.path}>
                            <a className="block px-4 py-2 hover:bg-slate-800 hover:text-white">
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
            <div className="text-[#001635] flex items-center space-x-4 mr-4">
              <div className="flex items-center space-x-2">
                <BsCartCheck size={20} />
                <span className="text-sm">(2)</span>
              </div>
              <AiOutlineSearch size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
