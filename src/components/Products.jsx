import "../css/components/products.css";

import products from '../assets/images/products.png';

function Products() {
  return (
    <section className="products">
      <img
        src={products}
        alt="Sequence products"
        className="products__image"
      />
    </section>
  );
}

export default Products;