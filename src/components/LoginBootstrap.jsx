import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase.init";

const LoginBootstrap = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setSuccess(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        verifyEmail();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("Please check your email and verify it.");
    });
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };

  const handleResetPassword = () => {
    if (!userEmail) {
      alert("Please enter your email address");
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert("Password reset email sent. Please check your email. ");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h3 className="text-success">Please Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="col-6">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      {success && <p className="text-success">Login successfully</p>}
      <p>
        <small>
          New to this website? Please <Link to="/register">Register</Link>
        </small>
      </p>
      <p>
        <small>
          Forget password?{" "}
          <button
            type="button"
            onClick={handleResetPassword}
            className="btn btn-link"
          >
            Please reset your password
          </button>
        </small>
      </p>
    </div>
  );
};

export default LoginBootstrap;
