import React, { useContext, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import RestContext from "./RestContext";
import { restaurants } from "./restaurants";

function RestaurantList(props) {
  const navigate = useNavigate();
  const {
    handleSearchClick,
    query,
    setQuery,
    searchResult,
    handleDetailsClick,
    loggedIn,
    handleLogoutClick,
  } = useContext(RestContext);

  // debugger;

  // console.log(loggedIn);

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, []);

  //   debugger;
  //   console.log(restaurantObj().restaurants.map((rest) => rest.name));

  return (
    <>
      <main>
        <div className="nav-container">
          <nav className="container">
            <ul>
              <li className="title">
                <Link to="/restaurants">Restaurant App</Link>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li className="logout">
                <a href="#" onClick={handleLogoutClick}>
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <section className="py-5 text-center container">
          <div className="row">
            <div className="col">
              <form onSubmit={handleSearchClick}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search restaurant by name, location or cuisine"
                  aria-label="First name"
                  name="query"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </form>
            </div>
          </div>
        </section>

        {searchResult.length === 0 && (
          <p className="text-center text-white">
            No restaurants found &#128532;
          </p>
        )}

        {searchResult.length > 0 && (
          <div className="album py-5 bg-light">
            <div className="container">
              <div>
                <p>{searchResult.length} restaurants found.</p>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {searchResult.map((restaurant, idx) => (
                  <div className="col" key={idx}>
                    <div className="card shadow-sm d-flex align-items-stretch">
                      <img src={restaurant.photograph} />

                      <div className="card-body">
                        <h5 className="card-title">
                          <Link
                            to={`/restaurant/${restaurant.id}`}
                            data-id={restaurant.id}
                            onClick={handleDetailsClick}
                          >
                            {restaurant.name}
                          </Link>
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {restaurant.neighborhood}
                        </h6>
                        <p className="card-text">{restaurant.address}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <div className="d-grid">
                              <Link
                                type="button"
                                className="btn btn-outline-primary"
                                to={`/restaurant/${restaurant.id}`}
                                // data-id={restaurant.id}
                                // onClick={(event) =>
                                //   handleDetailsClick(event, restaurant.id)
                                // }
                              >
                                Details
                              </Link>
                            </div>
                          </div>
                          <small className="text-muted">
                            {restaurant.cuisine_type}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default RestaurantList;
