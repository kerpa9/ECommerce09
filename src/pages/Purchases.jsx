import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPurchasesThunk,
  postPurchasesThunk,
} from "../store/slices/purchasesSlices";
import PurchasesDet from "./Purchases/PurchasesDet";
import "./styles/purchases.css";
import { NavLink } from "react-router-dom";

const Purchases = () => {
  const purchase = useSelector((store) => store.purchasesSlices);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk());
    dispatch(postPurchasesThunk());
  }, []);

  console.log(purchase);

  return (
    <>
      <div className="containerPurchases">
        {purchase?.map((prod) => (
          <PurchasesDet key={prod.id} prod={prod} />
        ))}
      </div>
    </>
  );
};

export default Purchases;
