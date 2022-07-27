import RestContext from "./RestContext";
import { useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function SignUpForm(props) {
  const {
    email,
    setEmail,
    password1,
    setPassword1,
    password2,
    setPassword2,
    validation,
    success,
    handleSignUpClick,
  } = useContext(RestContext);

  return (
    <main className="form-signin text-center">
      <p className="h3"></p>

      <p className="text-white h4">Sign Up</p>

      {success && <div className="text-bg-success p-3 mb-3">{success}</div>}

      {validation && (
        <div className="text-bg-danger p-3 mb-3">{validation}</div>
      )}
      <form method="post" className="mt-4" onSubmit={handleSignUpClick}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password1"
            placeholder="Password"
            name="password1"
            value={password1}
            onChange={(event) => setPassword1(event.target.value)}
          />
          <label htmlFor="password1">Password</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password2"
            placeholder="Password"
            name="password2"
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
          />
          <label htmlFor="password2">Confirm Password</label>
        </div>

        {/* <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div> */}

        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          name="submit"
        >
          Sign Up
        </button>

        <div className="mt-4">
          <p className="text-white">
            Already have an account?{" "}
            <Link className="text-white" to="/login">
              Login
            </Link>
          </p>
        </div>

        <div class="gradient-border" id="box">
          50% OFF ON ALL ORDERS.
        </div>
      </form>
    </main>
  );
}

export default SignUpForm;
