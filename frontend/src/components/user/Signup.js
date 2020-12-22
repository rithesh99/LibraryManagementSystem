import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "./helper/helper";
import "./helper/styles.css";
import logo from "../../assets/logo.png";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
  });


  const { name, email, password,error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        
        }
      })
      .catch(() => {
        console.log("error in signup");
      });
  };

  const signUpForm = () => {
    return (
      <div className="login">
        <Link to="/">
          <img className="login__logo" src={logo} />
        </Link> 

        <div className="login__container">
          <h1>Create Account</h1>
         
          <form>
            <h5>Your name</h5>
            <input type="text" value={name} onChange={handleChange("name")} />
            
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={handleChange("email")} />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={handleChange("password")}
            />

            <button
              type="submit"
              onClick={onSubmit}
              className="login__signInButton"
            >
              Register
            </button>
          </form>

          <p style={{ "text-align": "center" }}>
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="">
        <div className="">
          <div
            className="message__error"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  const successMessage = () => {
    return (
      <div className="">
        <div className="">
          <div
            className="message__success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please{" "}
            <Link to="/signin">Login here</Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      {/* <p className="text-light text-center">{JSON.stringify(values)}</p> */}
    </div>
  );
};

export default Signup;
