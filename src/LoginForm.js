import { useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import RestContext from "./RestContext";

function LoginForm() {
  const {
    email,
    setEmail,
    password1,
    setPassword1,
    password2,
    setPassword2,
    validation,
    success,
    handleLoginClick,
  } = useContext(RestContext);

  return (
    <main className="form-signin text-center">
      <p className="h3"></p>

      <p className="text-white h4">Login</p>

      {success && <div className="text-bg-success p-3 mb-3">{success}</div>}

      {validation && (
        <div className="text-bg-danger p-3 mb-3">{validation}</div>
      )}

      <form method="post" className="mt-4" onSubmit={handleLoginClick}>
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
            id="floatingPassword"
            placeholder="Password"
            name="password"
            onChange={(event) => setPassword1(event.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          name="submit"
        >
          Login
        </button>
        <div className="mt-4">
          <p className="text-white">
            Don't have an account?{" "}
            <Link className="text-white" to="/">
              Sign Up
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

export default LoginForm;
