import { AiOutlineFolderOpen } from "react-icons/ai";
import { FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";
import { GiShare } from "react-icons/gi";
import { GoDot } from "react-icons/go";
import { ImFacebook } from "react-icons/im";
import { IoIosPricetags, IoMdSearch } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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

const Blog2 = ({ image, title, time }: any) => (
  <div className="mb-8 flex items-center content-center gap-3 border-b border-slate-200 pb-4">
    <div className="">
      <img src={image} alt="" className="w-[90px] h-[55px]" />
    </div>
    <div className="">
      <h2 className="text-lg text-[#232323] font-normal">{title}</h2>
      <p className="text-[15px] font-normal text-[#555555]">{time}</p>
    </div>
  </div>
);

function Details() {
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

  const ListBlog2 = [
    {
      image: "/src-img/Blog2-1.jpg",
      title: "World don't move to beat of just one drum.",
      time: "5 minutes ago.",
    },
    {
      image: "/src-img/Blog2-2.jpg",
      title: "Be right for you may not be right for some.",
      time: "2 days ago.",
    },
    {
      image: "/src-img/Blog2-3.jpg",
      title: "World don't move to beat of just one drum.",
      time: "5 minutes ago.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };

  const Comments = [
    {
      img: "/public/src-img/Guess.jpg",
      name: "Alex Martin",
      role: "Its a civilizations to boldly go where no man has gone before you would see the biggest gift would be from me and the card attached would say thank you.",
    },
    {
      img: "/public/src-img/Guess.jpg",
      name: "James Frank",
      role: "Its a civilizations to boldly go where no man has gone before you would see the biggest gift would be from me and the card attached would say thank you.",
    },
  ];
  return (
    <div>
      <div className="mx-[174px]">
        <div className="flex flex-wrap">
          {/* bắt đầu Blog1 */}
          <div className="xl:w-9/12 lg:w-8/12 w-full px-[15px] pb-[30px] blog-1">
            {/* section1 của blog1 */}
            <div className="section1">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={"/src-img/Singleblog1.jpg"}
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
              <div className="my-[25px]">
                <h2 className="text-[26px] text-[#232323] font-medium mb-[20px]">
                  Its like a kind of torture to have to watch the show
                </h2>
                <div className="text-lg text-[#555555] flex flex-col gap-6">
                  <p>
                    A tale of a fateful trip that started from this tropic port
                    aboard this tiny ship today still wanted by the government
                    apartment in the sky moving on up to the east side a family
                    to explore strange new worlds to seek out new life and new
                    civilizations to boldly go where no man has gone before you
                    would see the biggest gift would be from me and the card
                    attached would say thank you for being a friend.
                  </p>
                  <p>
                    That this group would somehow form a family that's the way
                    we all became the Brady Bunch apartment in the sky moving on
                    up to the east side a family to explore strange new worlds.
                  </p>
                  <p>
                    This tropic port aboard this tiny ship today still wanted by
                    the government apartment in the sky moving on up to the east
                    side a family to explore strange new worlds to seek out new
                    life and new civilizations to boldly go where no man has
                    gone before you would see the biggest gift would be from me
                    and the card.
                  </p>
                </div>
              </div>
            </div>
            {/* section2 của blog1 */}
            <div className="section2 pt-5">
              <div className="flex flex-wrap">
                <div className="w-full md:w-5/12">
                  <img src="/public/src-img/Blogdetails.jpg" alt="" />
                </div>
                <div className="w-full md:w-7/12 flex items-center text-center">
                  <div className="flex flex-col gap-5">
                    <p className="text-lg text-[#555555] italic">
                      Somehow form a family that's the way we all became the
                      Brady Bunch apartment in the sky moving on up to the
                      family tools explore strange new worlds us here each week
                      my friends you're sure to get a smile.
                    </p>
                    <h2 className="text-xl text-[#232323]">- San Johnson -</h2>
                  </div>
                </div>
              </div>
              <div className="text-lg text-[#555555] flex flex-col gap-6 pt-10 pb-[25px]">
                <p>
                  A tale of a fateful trip that started from this tropic port
                  aboard this tiny ship today still wanted by the government
                  apartment in the sky moving on up to the east side a family to
                  explore strange new worlds to seek out new life and new
                  civilizations to boldly go where no man has gone before you
                  would see the biggest gift would be from me and the card
                  attached would say thank you for being a friend.
                </p>
                <p>
                  To seek out new life and new civilizations to boldly go where
                  no man has gone before you would see the biggest gift would be
                  from me and the card attached would say thank you for new
                  civilizations
                </p>
              </div>
              <div className="mt-5 border-t border-slate-300">
                <div className="flex justify-between pt-2">
                  <div className="text-lg flex gap-1 items-center">
                    <IoIosPricetags />
                    <h2 className="text-[#232323] font-bold">Tags:</h2>
                    <p className="text-[#555555]">
                      Business, Consulting, Financial
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GiShare />
                    <h2 className="font-bold text-lg">Share:</h2>
                    <div className="flex gap-2">
                      <ImFacebook />
                      <FaTwitter />
                      <FaLinkedinIn />
                      <FaPinterestP />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* section3 của blog1*/}
            <div className="section3 mt-8">
              <div className="">
                <h1 className="pb-[22px] text-[38px] font-bold">
                  RELATED BLOGS
                  <div className="pt-4">
                    <hr className="w-10 border-t-[4px] border" />
                  </div>
                </h1>
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
            {/* section4 của blog1 */}
            <div className="section4 mt-8">
              <h1 className="pb-[22px] text-[38px] font-bold">
                Comments(2)
                <div className="pt-4">
                  <hr className="w-10 border-t-[4px] border" />
                </div>
              </h1>
              <div className="border p-4">
                {Comments.map((feature, index) => (
                  <div key={index} className=" mb-4 flex items-center">
                    <img
                      src={feature.img}
                      alt={feature.name}
                      className=" mr-4"
                    />
                    <div>
                      <h2 className="text-xl text-gray-900 font-normal">
                        {feature.name}
                      </h2>

                      <p className="text-lg text-gray-600">{feature.role}</p>
                      <button className="pt-2 text-sm text-[#001A48] font-bold">
                        REPLY
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/*  */}
              <div className="mt-16">
                <h1 className="pb-[22px] text-[30px] font-bold">
                  POST A COMMNETS
                  <div className="pt-4">
                    <hr className="w-10 border-t-[4px] border" />
                  </div>
                </h1>
                <div className="mt-6">
                  <div className="">
                    <div className="grid grid-cols-2 gap-4 mb-7 ">
                      <input
                        className="pb-[35px] col-span-1 border-b focus:border-black outline-none"
                        type="text"
                        placeholder="Name*"
                      />
                      <input
                        className="pb-[35px] col-span-1 border-b focus:border-black outline-none"
                        type="text"
                        placeholder="Phone*"
                      />
                      <div className="md:col-span-2">
                        <input
                          className="pb-[35px] w-full border-b focus:border-black outline-none"
                          type="text"
                          placeholder="Email*"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <textarea
                          className="w-full h-[110px] max-h-[110px] border-b resize-none rounded-none focus:border-black outline-none"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <button className="py-3 px-10 bg-[#001A48] text-white font-bold rounded-lg">
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* kết thúc Blog1 */}
          {/*  */}
          {/* bắt đầu Blog2 */}
          <div className="xl:w-3/12 lg:w-4/12 md:w-6/12 sm:w-8/12 w-full px-[15px] blog-2">
            {/* section1 của Blog2 */}
            <div className="section1 mb-[45px]">
              <div className="content-between relative flex items-center">
                <input
                  type="text"
                  className="pb-3 border-b border-gray-300 outline-none focus:border-[#001648]"
                  placeholder="Name"
                />
                <button className="absolute end-20 pb-2">
                  <IoMdSearch size={20} />
                </button>
              </div>
            </div>
            {/* section2 của Blog2 */}
            <div className="section2 mb-11">
              <h6 className="text-[23px] font-normal mb-[12px] text-[#232323]">
                Categories
              </h6>
              <ul className="leading-10">
                {[
                  "Travel and Aviation",
                  "Business Services",
                  "Consumer Products",
                  "Financial Services",
                  "Software Research",
                  "Quality Resourcing",
                ].map((category, index) => (
                  <li
                    key={index}
                    className="flex items-center text-[#555555] gap-3"
                  >
                    <GoDot />
                    <a className="text-[18px] font-normal" href="#">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* section3 của Blog2 */}
            <div className="section3 mb-11">
              {ListBlog2.map((blog, index) => (
                <Blog2 key={index} {...blog} />
              ))}
            </div>
            {/* section4 của Blog2 */}
            <div className="section4 mb-11">
              <h6 className="text-[23px] font-normal mb-2 text-[#232323]">
                Archives
              </h6>
              <ul className="leading-7">
                {["January 2018", "February 2018", "March 2018"].map(
                  (archive, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#555555] gap-3"
                    >
                      <AiOutlineFolderOpen />
                      <a className="text-[18px] font-normal" href="#">
                        {archive}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* section5 của Blog2 */}
            <div className="section5">
              <div>
                <h6 className="text-[23px] font-normal mb-2 text-[#232323]">
                  Tags
                </h6>
                <ul className="leading-7 flex flex-wrap gap-1">
                  {[
                    "Business",
                    "Consulting",
                    "Sales",
                    "Startup",
                    "Marketting",
                    "Services",
                    "Financial",
                    "Research",
                  ].map((tag, index) => (
                    <li
                      key={index}
                      className={`text-[#555555] gap-3 border border-slate-300 px-2 rounded-md hover:bg-[#001468] hover:text-white ${
                        tag === "Startup" ? "bg-[#001468] text-white" : ""
                      }`}
                    >
                      <a className="text-[16px] font-normal" href="#">
                        {tag}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* kết thúc Blog2 */}
        </div>
      </div>
    </div>
  );
}

export default Details;
