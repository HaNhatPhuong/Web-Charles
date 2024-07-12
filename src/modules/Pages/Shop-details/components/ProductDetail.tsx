import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className=" mx-[174px] p-6">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-5/12 px-4">
          <div className="flex flex-row border-slate-200 border-2">
            <div className=" w-[70%] h-[380px] flex items-center justify-center border-r-2 border-slate-200 ">
              <div>
                <img
                  className=""
                  src="/src-img/bookdetails.jpg"
                  alt="Product"
                />
              </div>
            </div>
            <div className="w-[30%] flex items-center justify-center">
              <ul className="flex flex-col ">
                <li className="py-5">
                  <img src="/src-img/bookdetails1.jpg" alt="" />
                </li>
                <li className="py-5">
                  <img src="/src-img/book2-back.jpg" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12 px-4">
          <h1 className="text-3xl font-semibold text-gray-800">
            Contract and Fee-Setting Guide for Consultants
          </h1>
          <div className="mt-4">
            <span className="text-gray-400 line-through">$43.00</span>
            <span className="text-2xl font-bold text-[#001648] ml-2">
              $38.00
            </span>
          </div>
          <p className="mt-4 text-gray-600">
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today still wanted by the government apartment in the
            sky moving on up to the east side a family to explore strange new
            worlds to seek out new life and new civilizations to boldly go where
            no man has gone before you would see the biggest gift would be from
            me and the card attached would say thank you for being a friend.
          </p>
          <div className="mt-6 flex items-center">
            <span className="text-gray-600 mr-4">Qty:</span>
            <button
              onClick={decreaseQuantity}
              className="bg-gray-200 p-2 rounded-l"
            >
              -
            </button>
            <span className="px-4 py-2 border-t border-b border-gray-200">
              {quantity}
            </span>
            <button
              onClick={increaseQuantity}
              className="bg-gray-200 p-2 rounded-r"
            >
              +
            </button>
          </div>
          <button className="mt-6 bg-[#001648] text-white px-4 py-2 font-semibold rounded shadow hover:bg-[#001648] transition duration-300">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
