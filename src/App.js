import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import RestaurantList from "./RestaurantList";
import RestaurantDetails from "./RestaurantDetails";
import { RestProvider } from "./RestContext";

// import { restaurantObj } from "./restaurants";

// import { attemptLogin } from "./Utils";

function App() {
  return (
    <RestProvider>
      <Routes>
        <Route path="/" element={<SignUpForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/restaurants" element={<RestaurantList />}></Route>
        <Route path="/restaurant/:id" element={<RestaurantDetails />}></Route>
      </Routes>
    </RestProvider>
  );
}

export default App;
