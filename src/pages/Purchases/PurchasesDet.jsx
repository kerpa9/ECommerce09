import React from "react";
import "./style/purchasesDet.css";
import { NavLink } from "react-router-dom";

const PurchasesDet = ({ prod }) => {
  console.log(prod);
  return (
    <>
      <div className="containerPurch">
        <figure className="containerPurch_fig">
          <img
            className="containerPurch_img"
            src={prod?.product?.images[0].url}
            alt="Figure"
          />
        </figure>

        <div className="containerPurch_vals">
          <span>{prod?.product?.title}</span>
          <span>
            <span> Price: $ </span>
            {prod?.product?.price}.00
          </span>

          <div>{prod?.quantity}</div>
        </div>
      </div>
    </>
  );
};

export default PurchasesDet;
