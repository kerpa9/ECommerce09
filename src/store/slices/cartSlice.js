import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import bearerToken from "../../utils/bearerToken";

const urlBase = "https://e-commerce-api-v2.academlo.tech/api/v1";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart: (_state, action) => action.payload,
    // setDetail: (_state, action) => action.payload,
    addCart: (state, { payload }) => [...state, payload],
    delCart: (state, { payload }) =>
      state.filter((prod) => prod.id !== payload),
    setDetail: (state, { payload }) =>
      state.filter((prod) => prod.id == payload),
    updCard: (state, { payload }) => {
      const { id, quantity } = payload;
      return state.map((prod) =>
        prod.id == id ? { ...prod, quantity } : prod
      );
    },
  },
});

export const { setCart, setDetail, addCart, delCart, updCard } = cart.actions;

export default cart.reducer;

export const getCartProductsThunk = () => (dispatch) => {
  const url = `${urlBase}/cart`;
  axios
    .get(url, bearerToken())
    .then((res) => dispatch(setCart(res.data)))
    .catch((err) => console.log(err));
};

export const getDetailProductThunk = () => (dispatch) => {
  const url = `${urlBase}/products/${id}`;
  axios
    .get(url, bearerToken())
    .then(() => {
      dispatch(setDetail(id));
    })
    .catch((err) => console.log(err));
};

export const postProductsThunk = (data) => (dispatch) => {
  const url = `${urlBase}/cart`;
  axios
    .post(url, data, bearerToken())
    .then((res) => {
      dispatch(addCart(res.data));
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

export const deleteProfuctThunk = (id) => (dispatch) => {
  const url = `${urlBase}/cart/${id}`;
  axios
    .delete(url, bearerToken())
    .then(() => {
      console.log("Delete success");
      dispatch(delCart(id));
    })
    .catch((err) => console.log(err));
};

export const updateProductThunk = (id, data) => (dispatch) => {
  const url = `${urlBase}/cart/${id}`;
  axios
    .put(url, data, bearerToken())
    .then((res) => {
      dispatch(updCard(res.data));
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
