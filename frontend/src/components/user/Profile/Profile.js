import React, { useEffect, useState } from "react";
import Base from "../../../shared/Base";
import {
  getUser,
  isAuthenticated,
  deleteUser,
  signout,
  updateUser,
} from "../helper/helper";
import "./Profile.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link, Redirect } from "react-router-dom";
import { getBooks } from "../../books/helper";

function Profile() {
  const { user } = isAuthenticated();
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(false);
  const [books, setBooks] = useState([]);
  const [books1, setBooks1] = useState([]);

  useEffect(() => {
    getUser(user._id).then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        setData(res);
        setName(res.name);
      }
    });
    getBooks()
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].lend._id == user._id) {
            console.log(res[i]);
            let ans = res[i];
            books.push(ans.name);
            console.log(books);
          }
        }
        setBooks1(books);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteP = (id) => {
    if (window.confirm("Do you want delete this account") === true) {
      deleteUser(id)
        .then((res) => console.log(res), signout())
        .catch((err) => console.log(err));
    }
  };

  const UpdateUsr = () => {
    updateUser({ name }, user._id)
      .then((res) => {
        console.log(res);
        setEdit(false);
        let usr = localStorage.getItem("jwt");
        usr = JSON.parse(usr);
        console.log(usr.user);
        usr.user.name = name;
        localStorage.setItem("jwt", JSON.stringify(usr));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Base>
      <div className="profile">
        <div className="profile__details">
          {edit ? (
            <div className="profile__info">
              <h5>Your name</h5>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type="submit"
                onClick={UpdateUsr}
                className="login__signInButton"
              >
                Update
              </button>
            </div>
          ) : (
            <>
              <div className="profile__info">
                <h2>
                  <span className="profile__info__span">Name: </span> {name}
                </h2>
                <h3>
                  <span className="profile__info__span">Email: </span>{" "}
                  {user.email}
                </h3>
              </div>
              <a className="profile__delete">
                <EditIcon onClick={() => setEdit(true)} />
              </a>
              <a className="profile__delete" href="/signin">
                <DeleteIcon onClick={() => deleteP(user._id)} />
              </a>
            </>
          )}
        </div>

        <div className="profile__books">
          <h2>Lended books: </h2>
          {books1 &&
            books1.map((book, i) => (
              <div className="" key={i}>
                <p>{book}</p>
              </div>
            ))}
        </div>
      </div>
    </Base>
  );
}

export default Profile;
