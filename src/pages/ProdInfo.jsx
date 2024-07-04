import { useParams } from "react-router-dom";
import ProdDetail from "../components/prodInfo/ProdDetail";
import ProdSimilar from "../components/prodInfo/ProdSimilar";
import ProdSlider from "../components/prodInfo/ProdSlider";
import { useSelector } from "react-redux";
import "./styles/prodInfo.css";
import ItemCart from "../components/cartPage/ItemCart";

const ProdInfo = () => {
  const { id } = useParams();
  // console.log(id);

  const products = useSelector((store) => store.products);

  const [product] = products?.filter((prod) => prod.id === +id);

  console.log(product);

  return (
    <>
      <div className="container">
        <div className="container_det">
          <ProdSlider product={product} />
          <ProdDetail product={product} />
        </div>
        <ProdSimilar product={product} />
      </div>
    </>
  );
};

export default ProdInfo;
