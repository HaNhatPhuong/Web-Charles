function Consutation() {
  return (
    <div>
      <div className="h-[700px] mx-[174px]">
        <div className=" text-center">
          <h1 className="pb-[22px] text-[38px] font-bold">
            GET IN TOUCH
            <div className="pt-4">
              <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl mx-auto" />
            </div>
          </h1>
          <p className="text-[18px] text-[#555555]">
            A tale of a fateful trip thatstarted from this tropic port aboard
            this tiny ship today stillers
          </p>
        </div>
        {/*  */}
        <div className="flex mt-[55px]">
          <div className=" w-full lg:w-5/12">
            <img src="/src-img/contact.jpg" alt="" />
          </div>
          {/*  */}
          <div className="w-full lg:w-7/12 pt-[75px] ">
            <div className="flex flex-wrap ">
              <div className="md:w-1/2 px-[15px]">
                <input
                  className="w-full  border-b border-gray-300 rounded-none outline-none shadow-none text-base p-0 pb-3 mb-9"
                  type="text"
                  placeholder="Name*"
                />
              </div>
              <div className="md:w-1/2 px-[15px]">
                <input
                  className="w-full  border-b border-gray-300 rounded-none outline-none shadow-none text-base p-0 pb-3 mb-9"
                  type=" number"
                  placeholder="Phone*"
                />
              </div>
              <div className="md:w-1/2 px-[15px]">
                <input
                  className="w-full  border-b border-gray-300 rounded-none outline-none shadow-none text-base p-0 pb-3 mb-9"
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
                  className="w-full h-[110px] resize-none max-h-[110px] border-b border-gray-300 rounded-none outline-none shadow-none text-base p-0 pb-3 mb-[32px]"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="px-[15px]">
              <button className="text-[14px] font-medium px-[35px] leading-[50px] rounded-lg bg-blue-950 text-white hover:bg-slate-800">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consutation;
