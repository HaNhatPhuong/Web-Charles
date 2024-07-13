import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderContent = [
  {
    quote:
      "“A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family.”",
    author: "Shawn Michael",
    title: "Founder, Mnc Inc.",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus necessitatibus debitis qui dignissimos, quos fuga voluptates natus est eum voluptas aliquam sint laudantium consequuntur quae. Ab aliquid optio praesentium impedit?",
    author: "Rashed Ka.",
    title: "Founder, Mnc Inc.",
  },
  {
    quote:
      "“A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family.”",
    author: "Mahfuz Riad",
    title: "Founder, Mnc Inc.",
  },
];

function Advice() {
  const backgroundAd = "/src-img/Advice5.jpg";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div
      className="relative h-[572px] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${backgroundAd})` }}
    >
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#555555] w-[628px] h-[322px] bg-white rounded-xl">
        <Slider {...settings}>
          {sliderContent.map((content, index) => (
            <div key={index} className="px-[65px] pt-[40px] pb-[35px]">
              <p className="mb-4">{content.quote}</p>
              <p className="font-bold">
                {content.author}
                <br />
                <span className="font-normal">{content.title}</span>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Advice;
