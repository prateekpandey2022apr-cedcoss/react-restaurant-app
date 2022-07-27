import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { restaurantlist } from "./restaurants";
import { attemptLogin } from "./Utils";

const RestContext = createContext();

export function RestProvider({ children }) {
  const navigate = useNavigate();

  const [validation, setValidation] = useState("");
  const [success, setSuccess] = useState("");

  const [count, setCount] = useState(1);

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  // restaurant being viewed
  const [restaurantId, setRestaurantId] = useState("");
  const [restaurant, setRestaurant] = useState({});

  const [myStyle, setMyStyle] = useState();

  const [query, setQuery] = useState("");

  const _restaurants = restaurantlist;

  const [restaurants, setRestaurants] = useState(_restaurants);
  const [searchResult, setSearchResult] = useState(_restaurants);

  //   ####################################

  function handleSignUpClick(event) {
    event.preventDefault();
    console.log("sign up");

    setValidation("");

    if (!email) {
      setValidation("Email must not be empty");
      return;
    }

    if (!password1) {
      setValidation("Password must not be empty");
      return;
    }

    if (!password2) {
      setValidation("Confirm password must not be empty");
      return;
    }

    if (password1 !== password2) {
      setValidation((prev) => "Password not matching");
      return;
    }

    setUsers([...users, { id: count, email: email, password: password1 }]);
    setCount(count + 1);
    setEmail("");
    setPassword1("");
    setPassword2("");
    setSuccess("Account created");
    navigate("/login");
  }

  function handleLoginClick(event) {
    event.preventDefault();
    // console.log("login");
    setLoggedIn(false);

    setSuccess("");

    if (!email) {
      setValidation("Email must not be empty");
      return;
    }

    if (!password1) {
      setValidation("Password must not be empty");
      return;
    }

    const user = attemptLogin(users, email, password1);

    console.log(user);

    if (user) {
      // debugger;
      setLoggedIn(true);
      setValidation("");

      navigate("/restaurants");

      // setRestaurants
    } else {
      setValidation("No such user found");
    }
  }

  function handleDetailsClick(event) {
    debugger;
    console.log(event);
    setRestaurantId(event.target.getAttribute("data-id"));
  }

  function handleSearchClick(event) {
    event.preventDefault();
    console.log("handleSearchClick");

    // debugger;

    const _restaurants = restaurants.filter((restaurant) => {
      return (
        restaurant.name.toLowerCase().includes(query) ||
        restaurant.cuisine_type.toLowerCase().includes(query) ||
        restaurant.neighborhood.toLowerCase().includes(query)
      );
    });

    if (!query) {
      // no query show every result
      setSearchResult(restaurants);
    } else if (_restaurants.length > 0) {
      console.log("some result found");
      setSearchResult(_restaurants);
    } else {
      console.log("no result found");
      setSearchResult(_restaurants);
    }
  }

  function handleBackBtnClick(event) {
    console.log("back");
    setRestaurantId("");
  }

  function handleLogoutClick() {
    console.log("logged out");
    setLoggedIn(false);
    setRestaurants([]);
    setRestaurant({});
    // setUsers([]);
    navigate("/login");
  }

  return (
    <RestContext.Provider
      value={{
        validation,
        setValidation,
        success,
        setSuccess,
        count,
        setCount,
        users,
        setUsers,
        email,
        setEmail,
        password1,
        setPassword1,
        password2,
        setPassword2,
        handleSignUpClick,
        handleLoginClick,
        searchResult,
        query,
        restaurant,
        setRestaurant,
        setQuery,
        myStyle,
        setMyStyle,
        loggedIn,
        setLoggedIn,
        handleDetailsClick,
        handleSearchClick,
        handleLogoutClick,
      }}
    >
      {children}
    </RestContext.Provider>
  );
}

export default RestContext;
