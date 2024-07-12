import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { color } from "framer-motion";
// import "../App.css";

function Feature() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    draggable: true,
  };

  const featureData = [
    {
      img: "/src-img/ft-1.png",
      title: "Consumer Insights",
      text: "The east side to a deluxe apartment in move on up to the east side",
      bgColor: "#333",
    },
    {
      img: "/src-img/ft-2.png",
      title: "Emerging Ideas",
      text: "The east side to a deluxe apartment in move on up to the east side",
      bgColor: "linear-gradient(rgba(0, 26, 87, 0.5), rgba(0, 26, 87, 0.5))",
    },
    {
      img: "/src-img/ft3.png",
      title: "Thought Leadership",
      text: "The east side to a deluxe apartment in move on up to the east side",
      bgColor: "#e9e9e9",
    },
    {
      img: "/src-img/ft-4.png",
      title: "Marketing Goals",
      text: "The east side to a deluxe apartment in move on up to the east side",
      bgColor: "#e9e9e9",
    },
    {
      img: "/src-img/ft-1.png",
      title: "Consumer Insights",
      text: "The east side to a deluxe apartment in move on up to the east side",
      bgColor: "#e9e9e9",
    },
    {
      img: "/src-img/ft-2.png",
      title: "Emerging Ideas",
      text: "The east side to a deluxe apartment in move on up to the east side",
      bgColor: "#e9e9e9",
    },
    {
      img: "/src-img/ft3.png",
      title: "Thought Leadership",
      text: "The east side to a deluxe apartment in move on up to the east side",
      bgColor: "#ccc",
    },
    {
      img: "/src-img/ft-4.png",
      title: "Marketing Goals",
      text: "The east side to a deluxe apartment in move on up to the east side",
      bgColor: "#e9e9e9",
    },
  ];

  return (
    <div className="h-[346px]  cursor-grab ">
      <Slider {...settings}>
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="px-[60px] py-[50px] border-t-4 border-white hover:border-slate-800  text-center"
            style={{ backgroundColor: feature.bgColor }}
          >
            <img src={feature.img} className="m-auto" alt="" />{" "}
            <div className="my-4">
              <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl mx-auto" />
            </div>
            <h2 className="font-bold text-[24px] text-[#232323]">
              {feature.title}
            </h2>
            <p className="text-[18px] text-[#555555]">{feature.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Feature;
