import { FaAddressBook } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Adress() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };

  const partnerImages = [
    {
      icon: <FaAddressBook />,
      Name: "Australia Office",
      role: "23A cityhight consult floor, melbourne, Australia.",
    },
    {
      icon: <FaAddressBook />,
      Name: "Germany Office",
      role: "  no:100238, shshi st, berlin, Germany.",
    },
    {
      icon: <FaAddressBook />,
      Name: "London Office",
      role: " cityhigh, clock bell floor, United Kingdom.",
    },
    {
      icon: <FaAddressBook />,
      Name: "United States Office",
      role: " 23A, Queenstown St, Log Vegas, United States.",
    },
  ];

  return (
    <div className="py-6">
      <div className="mx-[174px]">
        <div className="">
          <div className="w-full ">
            <Slider {...settings}>
              {partnerImages.map((image, index) => (
                <div key={index} className="p-2">
                  <div>
                    <h2 className="text-xl text-[#232323]">{image.Name}</h2>
                    <div className="flex items-center gap-2">
                      <i className="text-xl">{image.icon}</i>
                      <p className="text-lg text-[#555555]">{image.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adress;
