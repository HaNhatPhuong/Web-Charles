import React from "react";

function Callout() {
  return (
    <div>
      <div className="flex items-center mx-[174px] h-[81px]">
        <h3 className="w-[27%] text-[32px] font-bold text-right leading-10">
          High-Quality <br /> Market Experinces
        </h3>
        <div className="pt-1 flex pl-5">
          <hr className="w-1 h-16 border-[3px] border-solid border-slate-400 rounded-xl mx-auto" />
        </div>
        <p className="w-[55%] pl-[50px] flex flex-row pr-9 text-[#555555]">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today still wanted by the government they survive as
          soldiers of fortune to ever wondered the east side to a deluxe
          apartment.
        </p>

        <button className="text-[14px] font-bold leading-[50px] px-[30px] rounded-lg bg-[#001648] text-[white] hover:bg-blue-950 hover:text-white ">
          GET A QUOTES
        </button>
      </div>
    </div>
  );
}

export default Callout;
