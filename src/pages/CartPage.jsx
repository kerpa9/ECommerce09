import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProductsThunk, setCart } from "../store/slices/cartSlice";
import ItemCart from "../components/cartPage/ItemCart";
import "../pages/styles/cartPage.css";
import { postPurchasesThunk } from "../store/slices/purchasesSlices";
const CartPage = () => {
  const cart = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();

  console.log(cart);
  useEffect(() => {
    dispatch(getCartProductsThunk());
  }, []);

  const products = cart.reduce((cv, prod) => (cv += prod.quantity), 0);
  console.log(products);

  const total = cart.reduce(
    (cv, prod) => (cv += prod.quantity * prod.product?.price),
    0
  );

  const handleBuy = () => {
    dispatch(postPurchasesThunk());
    dispatch(setCart([]));
  };

  return (
    <>
      <div className="cartpage">
        <div className="cartpage_container">
          {cart?.map((prod) => (
            <ItemCart key={prod.id} prod={prod} />
          ))}
        </div>
        <div className="cartpage_totals">
          <ul className="cartpage_list">
            <li className="cartpage_item">
              <span>Products</span>
              <span>{products}</span>
            </li>
            <li className="cartpage_item">
              <span>Total:</span>
              <span>$ {total}</span>
            </li>
          </ul>
          <button className="cartpage_btn" onClick={handleBuy}>
            Buy all products
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
