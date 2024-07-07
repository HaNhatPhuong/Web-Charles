import React from "react";

function AboutCompany() {
  return (
    <div>
      <div className="h-[410px]">
        <div className="mx-[174px]">
          <div className="flex flex-wrap">
            <div className="pr-[30px] w-full lg:w-1/2">
              <img src="/src-img/Aboutcompany.jpg" alt="" />
            </div>
            <div className="pl-[15px] w-full lg:w-1/2">
              <h1 className=" relative  text-[38px] font-bold">
                SHORT HISTORY
              </h1>
              <div className="py-[15px]">
                <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl " />
              </div>
              <div className="text-[#555555]">
                <p className=" leading-6 pb-[15px]">
                  A tale of a fateful trip that started from this tropic port
                  aboard this tiny ship today still wanted by the government
                  they survive as soldiers of fortune to a deluxe you apartment
                  in the sky to explore strange new worlds to seek out new life
                  and new civilizations to boldly go where no man has gone.
                </p>
                <p className="leading-6 pb-[15px]">
                  You would see the biggest gift would be from me and the card
                  attached would so thank you for being a friend the biggest
                  gift.
                </p>
                <img className="pt-[15px]" src="/src-img/Sign.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
