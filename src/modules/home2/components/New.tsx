import Slider from "react-slick";

const Blog1 = ({ image, title, role }: any) => (
  <div className="mb-8">
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt=""
        className="hover:scale-110 duration-500 ease-in-out"
      />
      <a
        href=""
        className="absolute bottom-0 px-4 text-white rounded-md font-normal ml-4 mb-2 bg-[#001A57]"
      >
        feb 06,2002
      </a>
    </div>
    <div className="mt-[25px] mb-3">
      <h2 className="text-[22px] text-[#232323] font-semibold mb-[10px]">
        {title}
      </h2>
      <p className="text-[18px] font-normal text-[#555555]">{role}</p>
    </div>
    <a className="text-sm text-[#001A57] font-medium hover:underline" href="">
      READ MORE
    </a>
  </div>
);

function New() {
  const ListBlog = [
    {
      image: "/src-img/bloggird1.jpg",
      title: "Trouble with the law since",
      role: "To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.",
    },
    {
      image: "/src-img/bloggird2.jpg",
      title: "Kind of torture to have to watch",
      role: "To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.",
    },
    {
      image: "/src-img/bloggird3.jpg",
      title: "Make the best of things its an uphill.",
      role: "To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.",
    },
  ];
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

  return (
    <div>
      <div className="mx-[174px] mt-8">
        <div className="text-center pb-14">
          <h1 className="pb-6 text-4xl font-bold">
            LATEST NEWS
            <div className="pt-4">
              <hr className="w-10 border-t-4 border-solid border-slate-400 rounded-xl mx-auto" />
            </div>
          </h1>
          <p className="text-lg text-gray-600">
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today stillers
          </p>
        </div>
        <Slider {...settings}>
          {ListBlog.map((blog, index) => (
            <div key={index}>
              <Blog1
                key={index}
                image={blog.image}
                title={blog.title}
                role={blog.role}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default New;
