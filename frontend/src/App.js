import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Signin from "./components/user/Signin";
import Signup from "./components/user/Signup";
import PrivateRoute from "./components/auth/PrivateRoutes";
import AdminRoute from "./components/auth/AdminRoutes";
import Profile from "./components/user/Profile/Profile";
import AddBook from "./components/books/AddBook/AddBook";
import UpdateBook from "./components/books/UpdateBook/UpdateBook";
import Books from "./components/books/Books/Books";
import Users from "./components/user/Users/Users";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />

        <PrivateRoute path="/profile" exact component={Profile} />

        <AdminRoute path="/admin/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/books/add" exact component={AddBook} />
        <AdminRoute
          path="/admin/books/edit/:bookId"
          exact
          component={UpdateBook}
        />
        <AdminRoute path="/admin/books" exact component={Books} />
        <AdminRoute path="/admin/users" exact component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
