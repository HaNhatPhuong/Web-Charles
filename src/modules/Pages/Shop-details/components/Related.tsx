import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = ({ title, price, image }: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="p-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="border rounded-lg p-4 flex flex-col Related-center">
        <img
          src={image}
          alt={title}
          className="w-48 h-64 object-scale-down mb-4 hover:scale-110 duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col items-center mt-3">
        <h2 className="text-lg font-bold">{title}</h2>
        <Link
          to={"/shopdetails"}
          className={`text-lg text-gray-600 font-medium flex Related-center ${
            hovered ? "animate-slideUpforshop" : ""
          }`}
        >
          {hovered ? (
            <div className="flex  bg-[#001635] p-2 rounded-lg text-white">
              <FaShoppingCart className="mr-2" />
              <p className="text-xs">ADD TO CART</p>
            </div>
          ) : (
            `$${price}`
          )}
        </Link>
      </div>
    </div>
  );
};

const books = [
  {
    title: "Power of Elevation",
    price: "32.70",
    image: "/src-img/book1.jpg",
  },
  {
    title: "Business Plans",
    price: "47.70",
    image: "/src-img/book2.jpg",
  },
  {
    title: "Consulting Bible",
    price: "26.00",
    image: "/src-img/book3.jpg",
  },
  {
    title: "Process Consulting",
    price: "46.00",
    image: "/src-img/book4.jpg",
  },
  {
    title: "Power of Elevation",
    price: "32.70",
    image: "/src-img/book5.jpg",
  },
  {
    title: "Business Plans",
    price: "47.70",
    image: "/src-img/book6.jpg",
  },
  {
    title: "Consulting Bible",
    price: "26.00",
    image: "/src-img/book7.jpg",
  },
  {
    title: "Process Consulting",
    price: "46.00",
    image: "/src-img/book8.jpg",
  },
  // Your books data...
];

const Related = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const booksPerPage = 4;

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };

  const pageCount = Math.ceil(books.length / booksPerPage);
  const currentBooks = books.slice(
    currentPage * booksPerPage,
    (currentPage + 1) * booksPerPage
  );

  return (
    <div className="mx-[174px]">
      <div className="">
        <h1 className="pb-[22px] text-[38px] font-bold">
          RELATED PRODUCTS
          <div className="pt-4">
            <hr className="w-10 border-t-[4px] border-solid border-slate-400 rounded-xl " />
          </div>
        </h1>
      </div>
      <Slider {...settings}>
        {Array.from({ length: pageCount }).map((_, pageIndex) => (
          <div key={pageIndex}>
            <div className="grid grid-cols-4 gap-4">
              {currentBooks.map((book, index) => (
                <BookCard
                  key={index}
                  title={book.title}
                  price={book.price}
                  image={book.image}
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Related;
