import React from "react";
import "./Card.css";
import { deleteBook } from "../components/books/helper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { isAuthenticated } from "../components/auth";

function Card({ _id, name, imageUrl, author, publisher, category }) {
  const { user, token } = isAuthenticated();

  const deleteP = (id) => {
    if (window.confirm("Do you want delete this book") === true) {
      deleteBook(token, id, user._id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="card">
      <div className="card__image">
        <img src={imageUrl} alt="" className="card__image__pic" />
      </div>
      <div className="card__details">
        <p className="card__name">{name}</p>
        <p className="card__author">-{author}</p>
        <span className="card__category">{category}</span>
        <p className="card__publishedBy">Published By: {publisher}</p>
        <div className="card__buttons">
          <a href={`/admin/books/edit/${_id}`} className="card__buttons__btn">
            <EditIcon />
          </a>
          <a className="card__buttons__btn" onClick={() => deleteP(_id)}>
            <DeleteIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
