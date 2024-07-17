const services = [
  {
    img: "/src-img/ourservice1.jpg",
    title: "Business Services",
    description: "The tiny ship today stiller",
    link: "#",
  },
  {
    img: "/src-img/ourservice2.jpg",
    title: "Consumer Product",
    description: "The tiny ship today stiller",
    link: "#",
  },
  {
    img: "/src-img/ourservice3.jpg",
    title: "Financial Services",
    description: "The tiny ship today stiller",
    link: "#",
  },
  {
    img: "/src-img/ourservice4.jpg",
    title: "Travel and Aviation",
    description: "The tiny ship today stiller",
    link: "#",
  },
  {
    img: "/src-img/ourservice5.jpg",
    title: "Software Research",
    description: "The tiny ship today stiller",
    link: "#",
  },
  {
    img: "/src-img/ourservice6.jpg",
    title: "Quality Resourcing",
    description: "The tiny ship today stiller",
    link: "#",
  },
];

const Service = () => {
  return (
    <div className="mx-[174px] py-8">
      <div className="text-center">
        <h1 className="pb-[22px] text-[38px] font-bold">
          OUR SERVICES
          <div className="pt-4">
            <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl mx-auto" />
          </div>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex p-4 border rounded-lg shadow-lg">
            <img
              src={service.img}
              alt={service.title}
              className="w-1/3 h-auto rounded-md mr-4"
            />
            <div>
              <h3 className="text-xl text-[#232323] font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="/servicedtails" className="text-[#001A57] font-semibold">
                READ MORE &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center pt-[35px]">
        <h5 className="text-[24px] text-[#232323] mb-[10px]">
          You can also send us an email and we wll get in touch shortly, or Call
          us
        </h5>
        <h4 className="text-[22px] text-[#001A57] underline">
          info@support.com OR +84 348 481 767
        </h4>
      </div>
    </div>
  );
};

export default Service;
