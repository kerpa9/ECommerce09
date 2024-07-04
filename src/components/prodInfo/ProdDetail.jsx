import "./styles/prodDetail.css";

const ProdDetail = ({ product }) => {
  console.log(product);
  return (
    <>
      <main className="description">
        <section>
          <header className="description_header">
            <span className="description_span">{product.brand}</span>
            <h2 className="description_brand">{product.title}</h2>
          </header>
          <div className="description_desc">
            <p>{product.description}</p>
          </div>
          <footer className="description_footer">
            <span className="description_span">Price:</span>
            <br />
            <h3>$ {product.price}.00</h3>
          </footer>
        </section>
      </main>
    </>
  );
};

export default ProdDetail;
