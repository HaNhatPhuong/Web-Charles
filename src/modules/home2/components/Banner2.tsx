import React from "react";

function Banner2() {
  const Banner2 = "/public/src-img/BannerHome2.jpg";
  return (
    <div>
      <div
        className="  h-[200px] bg-cover bg-center bg-no-repeat bg-fixed flex items-center "
        style={{
          backgroundImage: `url(${Banner2})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center">
          <h2 className="mx-[374px] text-[40px] font-bold text-[#001A57] leading-10">
            Our business plan consultants have real world experience
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
