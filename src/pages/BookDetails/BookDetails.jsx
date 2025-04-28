import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utils/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);

  const { bookName, image } = singleBook || {};

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };

  return (
    <div className="w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>

      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-accent m-2"
      >
        Mark as Read
      </button>
      <button className="btn btn-info m-2">Add to Wishlist</button>
    </div>
  );
};

export default BookDetails;
