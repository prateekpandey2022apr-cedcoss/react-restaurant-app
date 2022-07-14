function LoginForm(props) {
  return (
    <main className="form-signin text-center">
      <p className="h3"></p>

      <p>Login</p>

      {props.success && (
        <div className="text-bg-success p-3 mb-3">{props.success}</div>
      )}

      {props.validation && (
        <div className="text-bg-danger p-3 mb-3">{props.validation}</div>
      )}

      <form method="post" onSubmit={props.handleLoginClick}>
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
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            onChange={(event) => props.setPassword1(event.target.value)}
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
      </form>
    </main>
  );
}

export default LoginForm;
