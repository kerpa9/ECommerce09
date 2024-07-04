import React from "react";
import "../homePage/styles/prodCard.css";
import { useNavigate } from "react-router-dom";
import { postProductsThunk } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProdCard = ({ prod }) => {
  // console.log(prod);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDetail = () => {
    navigate(`/product/${prod.id}`);
  };

  const handleAddCart = () => {
    dispatch(
      postProductsThunk({
        quantity: 1,
        productId: prod.id,
      })
    );
  };

  return (
    <article className="prodcard">
      <figure className="prodcard_img" onClick={handleDetail}>
        <img src={prod.images[0].url} alt="product-image" />
        <img
          className="prodcard_img2"
          src={prod.images[1].url}
          alt="product-image"
        />
      </figure>
      <hr className="prodcard_div" />
      <ul className="prodcard_list">
        <li className="prodcard_item">
          <h3>{prod.brand}</h3>
          <span>{prod.title}</span>
        </li>
        <li className="prodcard_item">
          <span>Price:</span>
          <span> ${prod.price}.00</span>
        </li>
      </ul>

      <div className="prodcard_buttons">
        <button onClick={handleDetail}>Detail</button>
        <button className="prodcard_btnAdd" onClick={handleAddCart}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </article>
  );
};

export default ProdCard;
