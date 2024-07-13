import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { FaLightbulb } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { PiPresentationChart } from "react-icons/pi";

function Details() {
  const [openTopic, setOpenTopic] = useState(null);

  const usefulTopics = [
    {
      question: "1. What industries do you specialize in?",
      answer:
        "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family to explore strange new worlds.",
    },
    {
      question: "2. You guarantee that our plan will raise capital?",
      answer:
        "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family to explore strange new worlds.",
    },
    {
      question: "3. Do you ever invest in your clients?",
      answer:
        "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family to explore strange new worlds.",
    },
    {
      question: "4. What makes your financial projections special?",
      answer:
        "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family to explore strange new worlds.",
    },
    {
      question: "5. Will you agree with everything I say?",
      answer:
        "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family to explore strange new worlds.",
    },
  ];

  const toggleTopic = (index: any) => {
    setOpenTopic(openTopic === index ? null : index);
  };

  return (
    <div className="mx-[174px]">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3 xl:w-3/4 px-[15px] frist-part">
          <div className="section1">
            <img src="/src-img/Servicedetails.jpg" alt="" />
            <h2 className="text-3xl font-semibold mt-6">Business Services</h2>
            <div className="text-lg text-[#555555] mt-4">
              <p className="pb-6">
                A tale of a fateful trip that started from this tropic port
                aboard this tiny ship today still wanted by the government
                apartment in the sky moving on up to the east side a family to
                explore strange new worlds to seek out new life and new
                civilizations to boldly go where no man has gone before you
                would see the biggest gift would be from me and the card
                attached would say thank you for being a friend.
              </p>
              <p className="pb-6">
                That this group would somehow form a family that's the way we
                all became the Brady Bunch apartment in the sky moving on up to
                the east side a family to explore strange new worlds.
              </p>
              <p className="pb-6">
                This tropic port aboard this tiny ship today still wanted by the
                government apartment in the sky moving on up to the east side a
                family to explore strange new worlds to seek out new life and
                new civilizations to boldly go where no man has gone before you
                would see the biggest gift would be from me and the card.
              </p>
            </div>
          </div>
          <div className="section2">
            <div className="pt-[30px] pb-[55px]">
              <h4 className="text-2xl mb-[15px]">Company Presentation:</h4>
              <p className="text-lg text-[#555555]">
                That this group would somehow form a family that's the way we
                all became the Brady Bunch apartment in the sky moving on up to
                the east side a family to explore strange new worlds.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12">
                <ul className=" ">
                  <li className="mb-10 flex">
                    <IoMdSettings size={100} />
                    <div className="pl-[10px]">
                      <h5 className="text-[22px] font-semibold mb-[10px]">
                        Technology
                      </h5>
                      <p className="text-lg text-[#555555]">
                        The Love Boat soon will be making another run plore
                        strange.
                      </p>
                    </div>
                  </li>
                  <li className="mb-10 flex items-center">
                    <FaLightbulb size={70} />
                    <div className="pl-[30px]">
                      <h5 className="text-[22px] font-semibold mb-[10px]">
                        Innovation
                      </h5>
                      <p className="text-lg text-[#555555]">
                        The Love Boat soon will be making another run plore
                        strange.
                      </p>
                    </div>
                  </li>
                  <li className="mb-10 flex">
                    <PiPresentationChart size={100} />
                    <div className="pl-[10px]">
                      <h5 className="text-[22px] font-semibold mb-[10px]">
                        Integration
                      </h5>
                      <p className="text-lg text-[#555555]">
                        The Love Boat soon will be making another run plore
                        strange.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-6/12">
                <img src="/src-img/Servicedetails2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="section3">
            <div className="pt-[30px] pb-[55px]">
              <h4 className="text-2xl mb-[15px]">Usefull Topics:</h4>
              <div className="text-xl  text-[#555555]">
                {usefulTopics.map((topic, index) => (
                  <div key={index} className="mb-6 ">
                    <p
                      className="font-semibold cursor-pointer border-b-2 border-slate-200 pb-3"
                      onClick={() => toggleTopic(index)}
                    >
                      {topic.question}
                    </p>
                    <div
                      className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                        openTopic === index ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      {topic.answer && <p className="pt-2">{topic.answer}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="section4">
            <h2 className="text-2xl font-normal mb-[15px]">
              Reliable Market Growth:
            </h2>
            <div className="pt-[15px] flex  gap-5">
              <div className="w-1/2">
                <img src="/src-img/21.jpg" alt="" />
              </div>
              <div className="w-1/2 text-[#555555]">
                <h6 className="text-[18px] font-normal mb-[25px]">
                  The sky moving on up to the east side a family to explore
                  strange new worlds to seek out new life and new civilizations
                  to boldly go where no man has gone before you would see the
                  biggest gift.
                </h6>
                <ul className="flex flex-col gap-2">
                  {[
                    "Launches the last of Americas deep space.",
                    "Town to town and up and down the dial.",
                    "Kitchen and beans don't burn on the grill of maid.",
                    "The lady met this fellow and they knew it.",
                    "Most of this beautiful the day.",
                  ].map((solution, index) => (
                    <li key={index} className="flex items-center">
                      <AiFillCaretRight />
                      <a className="text-[18px] italic font-normal" href="#">
                        {solution}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 px-[15px] last-part">
          <div>
            <div className="section1 mb-12">
              <h6 className="text-[23px] font-medium mb-[30px]">
                OUR SOLUTIONS
              </h6>
              <ul className="leading-10">
                {[
                  "Travel and Aviation",
                  "Business Services",
                  "Consumer Products",
                  "Financial Services",
                  "Software Research",
                  "Quality Resourcing",
                ].map((solution, index) => (
                  <li
                    key={index}
                    className="flex items-center px-6 border-2 my-2 border-slate-200 rounded-lg"
                  >
                    <a className="text-[18px] font-normal" href="#">
                      {solution}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="section2">
              <div>
                <h2 className="mb-[25px] text-xl">Contact Form</h2>
                <div className="flex flex-col gap-3 mb-8">
                  <input
                    type="text"
                    className="pb-3 border-b border-gray-300 outline-none"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className="pb-3 border-b border-gray-300 outline-none"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="pb-3 border-b border-gray-300 rounded-none outline-none"
                    placeholder="Message"
                  />
                </div>
                <a
                  href=""
                  className="py-4 px-8 rounded-lg text-white bg-[#001648]"
                >
                  SUBMIT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
