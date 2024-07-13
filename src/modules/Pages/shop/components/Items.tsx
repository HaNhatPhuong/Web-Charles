// src/App.js
import React, { useState } from "react";
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
      <div className="border rounded-lg p-4 flex flex-col items-center ">
        <img
          src={image}
          alt={title}
          className="w-48 h-64 object-scale-down mb-4  hover:scale-110 duration-300 ease-in-out "
        />
      </div>
      <div className=" flex flex-col items-center mt-3">
        <h2 className="text-lg font-bold">{title}</h2>
        <Link
          to={"/shopdetails"}
          className={`text-lg text-gray-600 font-medium flex items-center ${
            hovered ? "animate-slideUpforshop" : ""
          }`}
        >
          {hovered ? (
            <>
              <div className="flex bg-[#001635] p-2 rounded-lg text-white">
                <FaShoppingCart className="mr-2" />
                <p className="text-xs"> ADD TO CART</p>
              </div>
            </>
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
  {
    title: "Power of Elevation",
    price: "32.70",
    image: "/src-img/book9.jpg",
  },
  {
    title: "Business Plans",
    price: "47.70",
    image: "/src-img/book10.jpg",
  },
  {
    title: "Consulting Bible",
    price: "26.00",
    image: "/src-img/book11.jpg",
  },
  {
    title: "Process Consulting",
    price: "46.00",
    image: "/src-img/book12.jpg",
  },
  //   trang sach tiep theo
  {
    title: "Power of Elevation",
    price: "32.70",
    image: "/src-img/book12.jpg",
  },
  {
    title: "Business Plans",
    price: "47.70",
    image: "/src-img/book11.jpg",
  },
  {
    title: "Consulting Bible",
    price: "26.00",
    image: "/src-img/book8.jpg",
  },
  {
    title: "Process Consulting",
    price: "46.00",
    image: "/src-img/book7.jpg",
  },
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
    image: "/src-img/book6.jpg",
  },
  {
    title: "Power of Elevation",
    price: "32.70",
    image: "/src-img/book5.jpg",
  },
  {
    title: "Business Plans",
    price: "47.70",
    image: "/src-img/book4.jpg",
  },
  {
    title: "Consulting Bible",
    price: "26.00",
    image: "/src-img/book11.jpg",
  },
  {
    title: "Process Consulting",
    price: "46.00",
    image: "/src-img/book10.jpg",
  },
];

function Items() {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  // Lấy các sách của trang hiện tại
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Thay đổi trang
  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <div className="mx-[174px]">
      <div className="flex justify-between items-center mb-8">
        <p className="text-lg text-[#555555]">Showing all 1-15 results</p>
        <div className="">
          <select className="p-2 border-slate-200 border-2 rounded-lg">
            <option value="">Default Sorting</option>
            <option value="">Price</option>
            <option value="">Size</option>
            <option value="">Trending</option>
            <option value="">Upcoming</option>
          </select>
        </div>
      </div>
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
      <div className="flex justify-center mt-8">
        {[...Array(Math.ceil(books.length / booksPerPage)).keys()].map(
          (number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === number + 1
                  ? "bg-[#001648] text-white"
                  : "bg-white text-[#001648]"
              }`}
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Items;
