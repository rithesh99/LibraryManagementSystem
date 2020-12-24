import React, { useState, useEffect } from "react";
import { getBooks } from "../../components/books/helper";
import { getUsers } from "../../components/user/helper/helper";
import Base from "../../shared/Base";
import "./Dashboard.css";

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getBooks()
      .then((res) => setBooks(res))
      .catch((err) => console.log(err));
    getUsers()
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Base>
      <div className="dashboard">
        <div className="dashboard__books">
          <h1>Books: </h1>
          {books.map((book, i) => (
            <div key={i} className="dashboard__book">
              <div className="dashboard__books__image">
                <img
                  src={book.imageUrl}
                  alt=""
                  className="dashboard__books__image__pic"
                />
              </div>
              <div className="dashboard__books__details">
                <p className="dashboard__books__name">{book.name}</p>
              </div>
            </div>
          ))}
          <div className="dashboard__more">
            <a href="/admin/books">See more...</a>
          </div>
        </div>
        <div className="dashboard__users">
          <h1>Users: </h1>
          {users.map((user, i) => (
            <div className="dashboard__users__name" key={i}>
              {user.name}
            </div>
          ))}
          <div className="dashboard__more">
            <a href="/admin/users">See more...</a>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default Dashboard;
