import React from "react";
import { AiOutlineRight } from "react-icons/ai";

function Service() {
  return (
    <div>
      <div className="h-[586px] px-[174px]">
        <div className=" text-center">
          <h1 className="pb-[22px] text-[38px] font-bold">
            OUR SERVICE
            <div className="pt-4">
              <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl mx-auto" />
            </div>
          </h1>
          <p className="text-[18px] text-[#555555]">
            A tale of a fateful trip thatstarted from this tropic port aboard
            this tiny ship today stillers
          </p>
        </div>
        <div className="Container-service mt-[40px]">
          <div className="row flex flex-row flex-wrap mx-[-15px]">
            <div className="1 xl:w-1/3 md:w-1/2 w-full mt-[30px] flex px-[15px]  ">
              <img src="/src-img/Service1.jpg" alt="" />
              <div className="text-center pt-[20px] pb-[18px] pl-[30px] pr-[10px]  border-slate-200 border-[1px] border-l-0">
                <h5 className="text-[22px] font-bold">Business Services</h5>
                <p className="text-[18px] text-[#555555] pb-[10px]">
                  The tiny ship today stille
                </p>
                <a
                  className="flex items-center text-[14px] text-[#001A57]"
                  href=""
                >
                  READ MORE{" "}
                  <i className="">
                    <AiOutlineRight />
                  </i>
                </a>
              </div>
            </div>
            <div className="2 xl:w-1/3 md:w-1/2 w-full mt-[30px] flex px-[15px]">
              <img src="/src-img/Service2.jpg" alt="" />
              <div className="text-center pt-[20px] pb-[18px] pl-[30px] pr-[10px]  border-slate-200 border-[1px] border-l-0">
                <h5 className="text-[22px] font-bold">Consumer Product</h5>
                <p className="text-[18px] text-[#555555] pb-[10px]">
                  The tiny ship today stille
                </p>
                <a
                  className="flex items-center text-[14px] text-[#001A57]"
                  href=""
                >
                  READ MORE{" "}
                  <i className="">
                    <AiOutlineRight />
                  </i>
                </a>
              </div>
            </div>
            <div className="3 xl:w-1/3 md:w-1/2 w-full mt-[30px] flex px-[15px]">
              <img src="/src-img/Service3.jpg" alt="" />
              <div className="text-center pt-[20px] pb-[18px] pl-[30px] pr-[10px]  border-slate-200 border-[1px] border-l-0 ">
                <h5 className="text-[22px] font-bold">Financial Services</h5>
                <p className="text-[18px] text-[#555555] pb-[10px]">
                  The tiny ship today stille
                </p>
                <a
                  className="flex items-center text-[14px] text-[#001A57]"
                  href=""
                >
                  READ MORE{" "}
                  <i className="">
                    <AiOutlineRight />
                  </i>
                </a>
              </div>
            </div>
            <div className="4 xl:w-1/3 md:w-1/2 w-full mt-[30px] flex px-[15px]">
              <img src="/src-img/Service4.jpg" alt="" />
              <div className="text-center pt-[20px] pb-[18px] pl-[30px] pr-[10px]  border-slate-200 border-[1px] border-l-0 ">
                <h5 className="text-[22px] font-bold">Travel and Aviation</h5>
                <p className="text-[18px] text-[#555555] pb-[10px]">
                  The tiny ship today stille
                </p>
                <a
                  className="flex items-center text-[14px] text-[#001A57]"
                  href=""
                >
                  READ MORE{" "}
                  <i className="">
                    <AiOutlineRight />
                  </i>
                </a>
              </div>
            </div>
            <div className="5 xl:w-1/3 md:w-1/2 w-full mt-[30px] flex px-[15px]">
              <img src="/src-img/Service5.jpg" alt="" />
              <div className="text-center pt-[20px] pb-[18px] pl-[30px] pr-[10px]  border-slate-200 border-[1px] border-l-0 ">
                <h5 className="text-[22px] font-bold">Software Research</h5>
                <p className="text-[18px] text-[#555555] pb-[10px]">
                  The tiny ship today stille
                </p>
                <a
                  className="flex items-center text-[14px] text-[#001A57]"
                  href=""
                >
                  READ MORE{" "}
                  <i className="">
                    <AiOutlineRight />
                  </i>
                </a>
              </div>
            </div>
            <div className="6 xl:w-1/3 md:w-1/2 w-full mt-[30px] flex px-[15px]">
              <img src="/src-img/Service6.jpg" alt="" />
              <div className="text-center pt-[20px] pb-[18px] pl-[30px] pr-[10px]  border-slate-200 border-[1px] border-l-0 ">
                <h5 className="text-[22px] font-bold">Quality Resourcing</h5>
                <p className="text-[18px] text-[#555555] pb-[10px]">
                  The tiny ship today stille
                </p>
                <a
                  className="flex items-center text-[14px] text-[#001A57]"
                  href=""
                >
                  READ MORE{" "}
                  <i className="">
                    <AiOutlineRight />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-[35px]">
          <h5 className="text-[24px] text-[#232323] mb-[10px]">
            You can also send us an email and we wll get in touch shortly, or
            Call us
          </h5>
          <h4 className="text-[22px] text-[#001A57] underline">
            info@support.com OR +84 348 481 767
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Service;
