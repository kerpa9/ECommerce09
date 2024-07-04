import React from "react";
import { useForm } from "react-hook-form";
import "./styles/filterPrice.css";

const FilterPrice = ({ setInputPrice }) => {
  const { handleSubmit, register } = useForm();

  const submit = (data) => {
    setInputPrice({
      min: data.min,
      max: data.max || Infinity,
    });
  };

  return (
    <form className="filterForm" onSubmit={handleSubmit(submit)}>
      <h3 className="filterForm_title">Filter to price</h3>
      <div className="filterForm_inp">
        <div>
          <label htmlFor="min">
            Min:
            <input
              {...register("min")}
              id="min"
              type="text"
              placeholder="Input min value"
            />
          </label>
        </div>
        <div>
          <label htmlFor="max">
            Max:
            <input
              {...register("max")}
              id="max"
              type="text"
              placeholder="Input max value"
            />
          </label>
        </div>
      </div>
      <button className="filterForm_btn">Filter price</button>
    </form>
  );
};

export default FilterPrice;
