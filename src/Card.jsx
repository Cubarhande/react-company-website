import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgscr} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title brand-name">{props.title}</h5>
            <p className="card-text">
            {props.desc}
            </p>

            <NavLink to="/service" className="btn btn-danger btn-sm">
                Read More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
