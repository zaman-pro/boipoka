import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utils/addToDB";

import { ToastContainer, toast } from "react-toastify";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);

  const { bookName, image } = singleBook || {};

  const handleMarkAsRead = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });

    toast("Wow so easy!");

    addToStoredDB(id);
  };

  return (
    <div className="w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>

      <ToastContainer></ToastContainer>

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
