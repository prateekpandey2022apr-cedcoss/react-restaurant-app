function SignUpForm(props) {
  return (
    <main className="form-signin text-center">
      <p className="h3"></p>

      <p>Sign Up</p>

      {props.success && (
        <div className="text-bg-success p-3 mb-3">{props.success}</div>
      )}

      {props.validation && (
        <div className="text-bg-danger p-3 mb-3">{props.validation}</div>
      )}

      <form method="post" onSubmit={props.handleSignUpClick}>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            value={props.email}
            onChange={(event) => props.setEmail(event.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password1"
            placeholder="Password"
            name="password1"
            value={props.password1}
            onChange={(event) => props.setPassword1(event.target.value)}
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
            value={props.password2}
            onChange={(event) => props.setPassword2(event.target.value)}
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
      </form>
    </main>
  );
}

export default SignUpForm;
