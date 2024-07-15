import { IoIosMail } from "react-icons/io";
import { PiMapPinArea } from "react-icons/pi";
import "/code/Charles-web/src/App.css";

function Header() {
  return (
    <div>
      <div className="h-[64px] mt-[40px] mb-[32px] mr-[174px] ml-[174px] ">
        <div className="flex mr-auto">
          <div className="">
            {/* logo */}
            <a href="/">
              <img
                src="https://html.creativegigstf.com/charles/images/logo/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex space-x-12 ml-auto ">
            {/* address and email and button */}
            <div className="flex space-x-4">
              <PiMapPinArea size={60} />
              <p className="text-[20px]">
                Address: <br />
                <p className="text-[18px]"> Gò Vấp,TP.HCM</p>
              </p>
            </div>
            <div className="flex space-x-4">
              <IoIosMail size={60} />
              <p className=" text-[20px]">
                Email: <br />{" "}
                <p className="text-[18px]">hnphuong216@gmail.com</p>
              </p>
            </div>
            <button className="border-2 border-black px-[28px] py-[6px] hover:bg-[#001648] hover:text-slate-200 font-bold rounded-xl ">
              GET A QUOTES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
