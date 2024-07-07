import React from "react";

function PartnerSlider() {
  return (
    <div className="py-[22px]">
      <div className="mx-[174px]">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/3 md:w-1/4">
            <h6 className="text-[20px] font-medium mt-[10px]">
              OUR <br /> PARTNERS
            </h6>
          </div>
          {/*  */}
          <div className="w-full sm:w-2/3 md:w-3/4">
            <div className="relative flex overflow-x-hidden">
              <div className=" flex animate-marquee whitespace-nowrap">
                <span className=" mx-6">
                  <img src="/src-img/p-1.png" alt="" />
                </span>
                <span className=" mx-6">
                  <img src="/src-img/p-2.png" alt="" />
                </span>
                <span className=" mx-6">
                  <img src="/src-img/p-3.png" alt="" />
                </span>
                <span className=" mx-6">
                  <img src="/src-img/p-4.png" alt="" />
                </span>
                <span className=" mx-6">
                  <img src="/src-img/p-5.png" alt="" />
                </span>
              </div>

              <div className="absolute flex animate-marquee2 ">
                <span className=" mx-6">
                  <img src="/src-img/p-1.png" alt="" />
                </span>
                <span className=" mx-6">
                  <img src="/src-img/p-2.png" alt="" />
                </span>
                <span className=" mx-6">
                  <img src="/src-img/p-3.png" alt="" />
                </span>
                <span className=" mx-6">
                  <img src="/src-img/p-4.png" alt="" />
                </span>
                <span className=" mx-6">
                  <img src="/src-img/p-5.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerSlider;
