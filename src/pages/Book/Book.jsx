import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  //   console.log(singleBook);

  //   const data = use(bookPromise);
  //   console.log(data);

  const {
    bookId,
    bookName,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
  } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border p-6">
        <figure className="p-3 bg-gray-100 w-2/3 mx-auto">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-5">
            {tags.map((tag, index) => (
              <button key={index} className="">
                {tag}
              </button>
            ))}
          </div>

          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book By : {publisher}</p>

          <div className="border-t-2 border-dashed opacity-20"></div>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
