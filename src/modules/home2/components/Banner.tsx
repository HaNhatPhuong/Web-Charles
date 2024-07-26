import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    src: "/src-img/slide-5.jpg",
    caption: "The government they survive artical of fortune",
  },
  {
    src: "/src-img/Banner2.jpg",
    caption: "The government they survive artical of fortune",
  },
  {
    src: "/src-img/Banner3.jpg",
    caption: "The government they survive artical of fortune",
  },
];

const Banner = () => {
  const [captionVisible, setCaptionVisible] = useState(false);

  const handleSlideChangeStart = () => {
    setCaptionVisible(false);
  };

  const handleSlideChangeEnd = () => {
    setCaptionVisible(true);
  };

  return (
    <div className="swiper-container h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        className="h-full"
        onSlideChangeTransitionStart={handleSlideChangeStart}
        onSlideChangeTransitionEnd={handleSlideChangeEnd}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full">
            <div
              className="absolute  inset-0 bg-cover bg-center "
              style={{
                backgroundImage: ` url(${slide.src})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-[#001a1b1a]"></div>
            <div
              className={`camera_caption absolute inset-0 flex items-center justify-center text-center text-white transition-opacity duration-500  ${
                captionVisible ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <div className=" absolute top-1/3 left-1/3 transform -translate-x-1/2  container mx-auto">
                <p className="text-2xl font-thin text-[#394253] mb-4">
                  {slide.caption}
                </p>
                <h1 className="text-[58px] font-bold mb-4 text-[#001A57]">
                  WE IMPROVE YOUR <br /> SALES EFFICIENCY
                </h1>
                <a
                  href="contact.html"
                  className="theme-button-one inline-block px-6 py-3 bg-white text-slate-800 rounded hover:bg-slate-800 hover:text-slate-200 transition"
                >
                  CONTACT US
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
