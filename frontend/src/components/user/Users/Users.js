import React, { useState, useEffect } from "react";
import "./Users.css";
import Base from "../../../shared/Base";
import { deleteUser, getUsers } from "../helper/helper";
import DeleteIcon from "@material-ui/icons/Delete";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res);
        console.log(res);
        console.log(users);
      })
      .catch((err) => console.log(err));
    console.log("users", users);
  }, [users]);

  const deleteP = (id) => {
    if (window.confirm("Do you want delete this user") === true) {
      deleteUser(id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Base>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#fff",
          borderRadius: "20px",
          marginTop: "30px",
        }}
      >
        {users &&
          users.map((user, i) => {
            return (
              <div className="user" key={i}>
                <div className="user__image">
                  <img
                    src="https://i.pinimg.com/564x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg"
                    alt=""
                    className="user__image__pic"
                  />
                </div>
                <div className="user__details">
                  <p className="user__name">{user.name}</p>
                  <p className="user__email">{user.email}</p>
                </div>
                <div className="user__delete">
                  <a
                    className="user__delete__btn"
                    onClick={() => deleteP(user._id)}
                  >
                    <DeleteIcon />
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </Base>
  );
}

export default Users;
