import React from "react";
import backgroundImg from "/code/Charles-web/src-img/Feature2.jpg";

function FeatureBanner() {
  return (
    <div
      style={{
        backgroundImage: `
        linear-gradient(rgba(0, 26, 87, 0.5), rgba(0, 26, 87, 0.5)),
        url(${backgroundImg})
      `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="h-[340px] py-[80px] mx-[75px] ">
        <div>
          <div className="  text-center">
            <h2 className="text-[42px] font-bold mb-[32px] text-red-50">
              We provide high quality services and innovative <br /> solutions
              for the realiable growth
            </h2>
            <a
              href=""
              className="text-[14px] font-medium px-[35px] py-[18px] rounded-lg bg-blue-950 text-white hover:bg-slate-800"
            >
              GET A QUOTES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureBanner;
