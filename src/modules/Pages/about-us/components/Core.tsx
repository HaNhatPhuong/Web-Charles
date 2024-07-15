import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const TeamMember = ({ image, name, role }: any) => {
  return (
    <div className="p-4">
      <div className="relative group border rounded-lg  text-center">
        <img src={image} className="duration-300 ease-in-out" />
        <div
          className={`absolute inset-0 bg-[rgba(0,26,87,0.7)] flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform scale-y-0 group-hover:scale-y-100`}
        >
          <a
            className="p-2 font-medium rounded-lg bg-white text-[#001648] hover:bg-[#001648] hover:text-white"
            href="#"
          >
            READ MORE
          </a>
        </div>
      </div>
      <div className="py-[20px] px-[25px] border-[1px] border-slate-200 rounded-xl text-[#555555]">
        <h3 className="text-[20px] font-bold">{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

function Core() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };

  const teamMembers = [
    {
      image: "/src-img/17.jpg",
      name: "Innovation Solutions",
      role: "The Love Boat soon will be making other run plore strange tools.",
    },
    {
      image: "/src-img/18.jpg",
      name: "Challenging Staff",
      role: "The Love Boat soon will be making other run plore strange tools.",
    },
    {
      image: "/src-img/19.jpg",
      name: "Integrity Properties",
      role: "The Love Boat soon will be making other run plore strange tools.",
    },
  ];

  return (
    <div>
      <div className="px-[174px] text-center">
        <h1 className="pb-[22px] text-[38px] font-bold">
          CORE VALUE
          <div className="pt-4">
            <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl mx-auto" />
          </div>
        </h1>
      </div>
      <div className="mx-[174px] mt-8">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Core;
