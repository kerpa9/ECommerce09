import React, { useEffect } from "react";
import "./styles/prodSimilar.css";
import useFetch from "../hooks/useFetch";
import ProdCard from "../homePage/ProdCard";

const ProdSimilar = ({ product }) => {
  const [items, getItems] = useFetch();

  useEffect(() => {
    const path = `/products?categoryId=${product.categoryId}`;
    getItems(path);
  }, []);
  console.log(items);

  const cbFilter = (prod) => {
    return prod.id !== product.id;
  };

  return (
    <div className="prodsimilar">
      <h2 className="prodsimilar_title ">Discover similar items</h2>
      <div className="prodsimilar_prod">
        {items?.filter(cbFilter).map((prod) => (
          <ProdCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default ProdSimilar;
