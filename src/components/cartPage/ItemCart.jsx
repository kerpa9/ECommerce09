import { useDispatch } from "react-redux";
import {
  deleteProfuctThunk,
  updateProductThunk,
} from "../../store/slices/cartSlice";
import "../cartPage/styles/itemCart.css";

const ItemCart = ({ prod }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProfuctThunk(prod.id));
  };

  const handleLess = () => {
    if (prod.quantity > 1) {
      dispatch(updateProductThunk(prod.id, { quantity: prod.quantity - 1 }));
    }
  };

  const handlePlus = () => {
    dispatch(updateProductThunk(prod.id, { quantity: prod.quantity + 1 }));
  };

  return (
    <article className="itemCart">
      <h3 className="itemCart_title">{prod.product?.title}</h3>
      <figure className="itemCart_img">
        <img src={prod.product?.images[0].url} alt="product_img" />
      </figure>
      <div className="itemCart_buttons">
        <button onClick={handleLess}>-</button>
        <span>{prod.quantity}</span>
        <button onClick={handlePlus}>+</button>
      </div>
      <button className="itemCart_btn" onClick={handleDelete}>
        <svg
          fill="#fdfcfc"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fdfcfc"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path>
          </g>
        </svg>
      </button>
      <p className="itemCart_total">
        Total: $<span>{prod.product?.price * prod.quantity}.00 </span>
      </p>
    </article>
  );
};

export default ItemCart;
