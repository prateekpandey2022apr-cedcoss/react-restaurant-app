import React from "react";

import { restaurantObj } from "./restaurants";

function RestaurantList(props) {
  //   debugger;
  //   console.log(restaurantObj().restaurants.map((rest) => rest.name));

  return (
    <main>
      <div className="nav-container">
        <nav className="container">
          <ul>
            <li className="title">
              <a href="">Restaurant App</a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li className="logout">
              <a href="">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="py-5 text-center container">
        <div className="row">
          <div className="col">
            <form onSubmit={props.handleSearchClick}>
              <input
                type="text"
                className="form-control"
                placeholder="Search restaurant by name, location or cuisine"
                aria-label="First name"
                name="query"
                value={props.query}
                onChange={(event) => props.setQuery(event.target.value)}
              />
            </form>
          </div>
        </div>
      </section>

      {props.searchResult.length === 0 && (
        <p className="text-center">No restaurants found &#128532;</p>
      )}

      {props.searchResult.length > 0 && (
        <div className="album py-5 bg-light">
          <div className="container">
            <div>
              <p>{props.searchResult.length} restaurants found.</p>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {props.searchResult.map((restaurant, idx) => (
                <div className="col" key={idx}>
                  <div className="card shadow-sm">
                    <img src={restaurant.photograph} />

                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          href="#/"
                          data-id={restaurant.id}
                          onClick={props.handleDetailsClick}
                        >
                          {restaurant.name}
                        </a>
                      </h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {restaurant.neighborhood}
                      </h6>
                      <p className="card-text">{restaurant.address}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <div className="d-grid">
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                              data-id={restaurant.id}
                              onClick={props.handleDetailsClick}
                            >
                              Details
                            </button>
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
  );
}

export default RestaurantList;
