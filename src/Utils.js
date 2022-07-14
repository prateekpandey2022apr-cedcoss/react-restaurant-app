function attemptLogin(users, email, password) {
  return users.find(
    (user) => user.email === email && user.password === password
  );
}

export { attemptLogin };
