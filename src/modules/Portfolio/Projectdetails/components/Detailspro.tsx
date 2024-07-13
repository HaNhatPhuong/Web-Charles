import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";

function Detailspro() {
  return (
    <div className="mx-[174px]">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-7/12 xl:w-2/3 px-[15px]">
          <div className="flex flex-col gap-8">
            <img src="/src-img/detailsproject1.jpg" alt="" />
            <img src="/src-img/detailsproject2.jpg" alt="" />
            <img src="/src-img/detailsproject3.jpg" alt="" />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-5/12 xl:w-1/3 px-[15px]">
          <div className="section1">
            <div className="pb-[15px]">
              <h2 className="text-3xl font-semibold">Marketing Strategies</h2>
              <div className="text-[18px] text-[#555555] mt-[15px] flex flex-col gap-4">
                <p>
                  A tale of a fateful trip that started from this tropic port
                  aboard this tiny ship today still wanted by the government
                  apartment in the sky moving on up to the east side a family to
                  explore strange to seek out new life and new civilizations.
                </p>
                <p>
                  Boldly go where no man has gone before you would see the
                  biggest gift would be from me and the card attached would say
                  thank you.
                </p>
              </div>
            </div>
            <div className="pt-[15px]">
              <ul className=" flex flex-wrap text-[#555555]">
                <li className="w-[50%] mb-[25px] px-1">
                  <h2 className="text-xl">Client :</h2>
                  <p className="text-lg">James Morgan</p>
                </li>
                <li className="w-[50%] mb-[25px] px-1">
                  <h2 className="text-xl">Date :</h2>
                  <p className="text-lg">25/Jan/2018</p>
                </li>
                <li className="w-[50%] mb-[25px] px-1">
                  <h2 className="text-xl">Budget :</h2>
                  <p className="text-lg">$3,459</p>
                </li>
                <li className="w-[50%] mb-[25px] px-1">
                  <h2 className="text-xl">Category :</h2>
                  <p className="text-lg">Business Consulting</p>
                </li>
              </ul>
              <div className="text-[#555555]">
                <h2 className="text-xl">Share us on :</h2>
                <ul className=" flex gap-4 mt-2">
                  {[
                    <FaFacebookF />,
                    <FaLinkedin />,
                    <FaTwitter />,
                    <FaInstagramSquare />,
                    <FaYoutube />,
                  ].map((solution, index) => (
                    <li key={index}>
                      <a className="text-lg hover:text-[#001648]" href="#">
                        {solution}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="section2 pt-[60px]">
            <div className="title">
              <h2 className="text-3xl font-semibold">Improvement Charts</h2>
              <p className="text-[18px] text-[#555555] mt-[15px]">
                The man has gone before you would see the biggest gift would be
                from me and the card attached.
              </p>
            </div>
            <div className="chart"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailspro;
