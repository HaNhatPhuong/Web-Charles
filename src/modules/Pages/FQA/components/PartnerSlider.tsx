import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function PartnerSlider() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };

  const partnerImages = [
    "/src-img/p-1.png",
    "/src-img/p-2.png",
    "/src-img/p-3.png",
    "/src-img/p-4.png",
    "/src-img/p-5.png",
  ];

  return (
    <div className="py-6">
      <div className="mx-[174px]">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/3 md:w-1/4">
            <h6 className="text-2xl font-medium mt-2">
              OUR <br /> PARTNERS
            </h6>
          </div>
          <div className="w-full sm:w-2/3 md:w-3/4">
            <Slider {...settings}>
              {partnerImages.map((image, index) => (
                <div key={index} className="p-2">
                  <img
                    src={image}
                    alt={`Partner ${index + 1}`}
                    className="m-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerSlider;
