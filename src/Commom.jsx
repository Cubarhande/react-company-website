import React from "react";
import { NavLink } from "react-router-dom";


const Commom = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.title}
                    <strong className="brand-name"> Tech Web</strong>
                  </h1>

                  <h3 className="my-3">{props.subtitle}</h3>
                  <div className="my-5">
                    <NavLink to={props.visit} className="btn-grt-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-md-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgser}
                    className="img-fluid animateds"
                    alt="Commom images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commom;
