function Aboutus() {
  const Whywebestimg = "/public/src-img/AboutusWhywebest.jpg";
  return (
    <div>
      <div
        className="  h-[570px] bg-[#626f90]  bg-cover bg-center bg-no-repeat bg-fixed "
        style={{
          backgroundImage: `url(${Whywebestimg})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="mx-[174px] py-[100px]">
          <div className="flex flex-wrap">
            <div className="pl-[15px] w-full lg:w-1/2">
              <h1 className=" relative text-[#FFFFFF] text-[38px] font-bold">
                SHORT HISTORY
              </h1>
              <div className="py-[15px]">
                <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl " />
              </div>
              <div className="text-[#cad2e5]">
                <p className=" leading-6 pb-[15px]">
                  A tale of a fateful trip that started from this tropic port
                  aboard this tiny ship today still wanted by the government
                  they survive as soldiers of fortune to a deluxe you apartment
                  in the sky to explore strange new worlds to seek out new life
                  and new civilizations to boldly go where no man has gone.
                </p>
                <p className="leading-6 pb-[15px]">
                  You would see the biggest gift would be from me and the card
                  attached would so thank you for being a friend the biggest
                  gift.
                </p>
                <img
                  className="pt-[15px] text-white"
                  src="/public/src-img/sign (1).png"
                  alt=""
                />
              </div>
            </div>
            {/*  */}
            <div className="pr-[30px] w-full lg:w-1/2 bg-white rounded-lg">
              <div className="pt-[25px] pb-[40px] pl-[40px] pr-[25px] ">
                <div className="flex flex-wrap">
                  <div className="md:w-1/2 px-[15px]">
                    <input
                      className="w-full  border-b border-gray-300 rounded-none outline-none shadow-none text-base p-0 pb-3 mb-9 focus:border-[#001648]"
                      type="text"
                      placeholder="Name*"
                    />
                  </div>
                  <div className="md:w-1/2 px-[15px]">
                    <input
                      className="w-full  border-b border-gray-300 rounded-none outline-none shadow-none text-base p-0 pb-3 mb-9 focus:border-[#001648]"
                      type=" number"
                      placeholder="Phone*"
                    />
                  </div>
                  <div className="md:w-1/2 px-[15px]">
                    <input
                      className="w-full  border-b border-gray-300 rounded-none outline-none shadow-none text-base p-0 pb-3 mb-9 focus:border-[#001648]"
                      type="email"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="md:w-1/2 px-[15px] text-[#495057] ">
                    <select
                      className="w-full text-[15px] border-b border-gray-300 rounded-none outline-none shadow-none p-0 pb-3 mb-9"
                      name=""
                      id=""
                    >
                      <option value="">Service you are looking for?</option>
                      <option value="">Business Services</option>
                      <option value="">Consumer Product</option>
                      <option value="">Financial Services</option>
                      <option value="">Software Research</option>
                    </select>
                  </div>
                  <div className="w-full mb-8 px-[15px]">
                    <textarea
                      className="w-full h-[90px] resize-none max-h-[110px] border-b border-gray-300 rounded-none outline-none shadow-none text-base p-0 pb-3 mb-[32px]
                  focus:border-[#001648]"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="px-[15px]">
                  <button className="text-[14px] font-medium px-[35px] leading-[50px] rounded-lg bg-blue-950 text-white hover:bg-slate-800">
                    GET A QUOTES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
