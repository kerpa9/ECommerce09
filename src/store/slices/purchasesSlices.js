import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import bearerToken from "../../utils/bearerToken";

const urlBase = "https://e-commerce-api-v2.academlo.tech/api/v1";

const purchases = createSlice({
  name: "purchases",
  initialState: [],
  reducers: {
    setPurch: (_state, action) => action.payload,
    addPurchase: (state, { payload }) => [...state, payload],
  },
});

export const { setPurch, addPurchase } = purchases.actions;

export default purchases.reducer;

export const getPurchasesThunk = () => (dispatch) => {
  const url = `${urlBase}/purchases`;
  axios
    .get(url, bearerToken())
    .then((res) => dispatch(setPurch(res.data)))
    .catch((err) => console.log(err));
};

export const postPurchasesThunk = () => (dispatch) => {
  const url = `${urlBase}/purchases`;
  axios
    .post(url, {}, bearerToken())
    .then((res) => dispatch(addPurchase(res.data)))
    .catch((err) => console.log(err));
};
