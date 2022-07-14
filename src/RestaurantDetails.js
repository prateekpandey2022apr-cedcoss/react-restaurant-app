import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import React from "react";

import { restaurantObj } from "./restaurants";

function RestaurantDetails(props) {
  const restaurant = restaurantObj().restaurants.find(
    (rest) => rest.id == props.restaurantId
  );

  const mystyle = {
    backgroundImage:
      "linear-gradient(to right, rgb(80 72 72 / 48%), rgb(227 227 227 / 17%)), url(" +
      `${restaurant.photograph}` +
      ")",
    // backgroundRepeat: "no-repeat",
    width: "100%",
  };

  console.log(Object.entries(restaurant.operating_hours));
  // debugger;

  return (
    <div>
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
      <main className="container">
        <p>
          <a
            href="#/"
            className="btn btn-primary"
            onClick={props.handleBackBtnClick}
          >
            Back
          </a>
        </p>

        <div className="p-4 p-md-5 mb-4 text-white rounded " style={mystyle}>
          <div className="col-md-6 px-0">
            <div className="info">
              <h1 className="display-4 fst-italic fw-bold">
                {restaurant.name}
              </h1>
              <p className="lead my-3 fw-bold">{restaurant.address}</p>
              <p className="lead my-0 fw-bold">{restaurant.neighborhood}</p>
              <p className="lead my-0 fw-bold">{restaurant.cuisine_type}</p>
            </div>
            {/* <p className="lead mb-0">
              <a href="#" className="text-white fw-bold">
                Continue reading...
              </a>
            </p> */}
          </div>
        </div>

        <div className="p-4 p-md-5 mb-4 ">
          <div className="col-md-6 px-0">
            <h3 className="mb-3">Operational Hours</h3>
            <table className="table">
              <tbody>
                {Object.entries(restaurant.operating_hours).map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{item[0]}: </td>
                      <td>{item[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 p-md-5 mb-4 ">
          <div className="col-md-6 px-0">
            <h3 className="mb-3">Reviews</h3>
            {restaurant.reviews.map((review, idx) => {
              return (
                <div className="d-flex" key={idx}>
                  <div className="flex-shrink-0">
                    <img src="http://via.placeholder.com/100" alt="..." />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <p className="lead mb-0">{review.name}</p>
                    <p>
                      <small>{review.date}</small>
                    </p>
                    <p>{review.comments}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default RestaurantDetails;
