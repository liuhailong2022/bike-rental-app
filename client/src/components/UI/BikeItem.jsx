import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/bike-item.css";

const BikeItem = (props) => {
  const { imgUrl, bikeName, price } = props.item;

  return (
      <Col lg="4" md="4" sm="6" className="mb-5">
          <div className="bike__item">
              <div className="bike__img">
                  <img src={imgUrl} alt="" className="w-100" />
              </div>

              <div className="bike__item-content mt-4">
                  <h4 className="section__title text-center">{bikeName}</h4>
                  <h6 className="rent__price text-center mt-">
                      ${price}.00 <span>/ Day</span>
                  </h6>

                  {/* <div className="bike__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                      <span className=" d-flex align-items-center gap-1">
                          <i class="ri-bike-line"></i> {model}
                      </span>
                      <span className=" d-flex align-items-center gap-1">
                          <i class="ri-settings-2-line"></i> {automatic}
                      </span>
                      <span className=" d-flex align-items-center gap-1">
                          <i class="ri-timer-flash-line"></i> {speed}
                      </span>
                  </div> */}

                  <button className=" w-50 bike__item-btn bike__btn-rent">
                      <Link to={`/bikes/${bikeName}`}>Rent</Link>
                  </button>

                  <button className=" w-50 bike__item-btn bike__btn-details">
                      <Link to={`/bikes/${bikeName}`}>Details</Link>
                  </button>
              </div>
          </div>
      </Col>
  )
};

export default BikeItem;
