import React, { useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";

const FilterSelect = ({ setCategoryValue }) => {
  const [categories, getCategories] = useFetch();

  useEffect(() => {
    getCategories("/categories");
  }, []);

  const itemSelect = useRef();

  const handleChange = () => {
    setCategoryValue(itemSelect.current.value);
  };

  return (
    <select ref={itemSelect} onChange={handleChange}>
      <option value="">All products</option>
      {categories?.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
