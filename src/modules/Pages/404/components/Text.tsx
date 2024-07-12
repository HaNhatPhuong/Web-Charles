import React from "react";
import { Link } from "react-router-dom";

function Text() {
  return (
    <div>
      <div className="mx-[174px] text-center">
        <h2 className="text-[140px] font-medium">4 0 4</h2>
        <h4 className="mt-3 mb-8 text-[42px] text-[#413f3f] font-normal">
          Looks Like Something went wrong
        </h4>
        <p className="text-[#00000099] text-xl mb-14">
          The page you are looking for was moved, removed, renamed or might
          never existed.
        </p>
        <div className="flex flex-row items-center justify-center gap-5">
          <Link
            to={"/"}
            className=" p-4 bg-[#001648] rounded-lg text-white font-semibold"
          >
            GO HOME
          </Link>
          <span className="text-xl">or</span>
          <input
            className="h-12 border-none"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}

export default Text;
