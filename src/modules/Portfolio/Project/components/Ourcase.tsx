const TeamMember = ({ image, name }: any) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 px-[15px] mt-[30px] text-center">
    <div className="relative group">
      <img
        src={image}
        alt={`${name}'s photo`}
        className=" duration-300 ease-in-out"
      />
      <div
        className="text-white absolute top-0 left-0 w-full h-full bg-[rgba(0,26,87,0.7)] opacity-0 group-hover:opacity-100 transition-all 
        duration-500 ease-in-out transform scale-y-0 group-hover:scale-y-100 flex flex-col justify-center items-center"
      >
        <a
          className="p-2 font-medium rounded-lg bg-white text-[#001648] hover:bg-[#001648] hover:text-white"
          href="/projectdetails"
        >
          Business Meeting
        </a>
      </div>
    </div>
  </div>
);

function Ourcase() {
  // const settings = {
  //   infinite: true,
  //   speed: 800,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   cssEase: "linear",
  //   arrows: false,
  //   pauseOnHover: true,
  // };
  const teamMembers = [
    {
      image: "/src-img/project1.jpg",
    },
    {
      image: "/src-img/project2.jpg",
    },
    {
      image: "/src-img/project3.jpg",
    },
    //
    {
      image: "/src-img/project4.jpg",
    },
    {
      image: "/src-img/project5.jpg",
    },
    {
      image: "/src-img/project6.jpg",
    },
    //
    {
      image: "/src-img/project7.jpg",
    },
    {
      image: "/src-img/project8.jpg",
    },
    {
      image: "/src-img/project9.jpg",
    },
  ];

  return (
    <div>
      <div className=" px-[174px]">
        <div className="flex flex-wrap ">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ourcase;
