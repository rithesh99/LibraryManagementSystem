import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { isAuthenticated, signout } from "../../components/auth/index";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="" className="header__logo__pic" />
        <h2 className="header__title">Library Store</h2>
      </div>
      <div className="header__center"></div>
      <div className="header__navs">
        {isAuthenticated() && (
          <a href="/" className="header__link">
            Home
          </a>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <a href="/admin/dashboard" className="header__link">
            Dashboard
          </a>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <a href="/admin/books/add" className="header__link">
            Add book
          </a>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <a href="/admin/books" className="header__link">
            Books
          </a>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <a href="/admin/users" className="header__link">
            Users
          </a>
        )}
        {isAuthenticated() && (
          <a href="/profile" className="header__link">
            Profile
          </a>
        )}
        {!isAuthenticated() && (
          <a href="/signup" className="header__link">
            Signup
          </a>
        )}
        {!isAuthenticated() && (
          <a href="/signin" className="header__link">
            Signin
          </a>
        )}

        {isAuthenticated() && (
          <a href="/" onClick={() => signout()} className="header__link">
            Signout
          </a>
        )}
      </div>
    </div>
  );
}

export default Header;
