import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/productsSlice";
import ProdCard from "../components/homePage/ProdCard";
import "../pages/styles/homePage.css";

import FilterPrice from "../components/homePage/FilterPrice";
import FilterSelect from "../components/homePage/FilterSelect";

const $body = document.querySelector("body");
const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  const [inputPrice, setInputPrice] = useState({
    min: 0,
    max: Infinity,
  });

  const [categoryValue, setCategoryValue] = useState("");

  const [menu, setMenu] = useState(false);

  console.log(menu);

  const products = useSelector((store) => store.products);
  // const product = useSelector((store) => store.cartSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  // console.log(products);

  const textInput = useRef();

  const handleChange = () => {
    setInputValue(textInput.current.value.trim().toLowerCase());
  };

  const cbFilter = (prod) => {
    const name = prod.title.toLowerCase().includes(inputValue);
    const price =
      +prod.price <= +inputPrice.max && +prod.price >= +inputPrice.min;

    const category =
      categoryValue === "" ? true : prod.categoryId === +categoryValue;
    return name && price && category;
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleMode = () => {
    $body.classList.toggle("dark");
  };
  return (
    <>
      <div className="homepage_send">
        <input
          className="homepage_inp"
          ref={textInput}
          onChange={handleChange}
          type="text"
          placeholder="Find product"
        />
        <button className="homepage_findbtn">
          <svg
            fill="#f7f7f7"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#f7f7f7"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M10.035,18.069a7.981,7.981,0,0,0,3.938-1.035l3.332,3.332a2.164,2.164,0,0,0,3.061-3.061l-3.332-3.332A8.032,8.032,0,0,0,4.354,4.354a8.034,8.034,0,0,0,5.681,13.715ZM5.768,5.768A6.033,6.033,0,1,1,4,10.035,5.989,5.989,0,0,1,5.768,5.768Z"></path>
            </g>
          </svg>
        </button>
      </div>
      {/* 


       */}
      <div className="homepage">
        <div className={`homepage_filters ${menu && "active"}`}>
          <button className="homepage_findbtnx" onClick={handleMenu}>
            x
          </button>
          <div className="homepage_filter">
            <FilterPrice setInputPrice={setInputPrice} />
          </div>
          <FilterSelect setCategoryValue={setCategoryValue} />
          <button onClick={handleMode}>Change mode</button>
        </div>

        <button className={menu && "active"} onClick={handleMenu}>
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
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
                d="M5 6H19M5 10H15M5 14H19M5 18H15"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          Filters
        </button>
        <div className="homepage_container">
          {products?.filter(cbFilter).map((prod) => (
            <ProdCard key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
