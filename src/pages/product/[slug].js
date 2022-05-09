import { useState } from "react";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";

import { Product } from "../../components";

import { client, urlFor } from "../../lib/client";
import { useStateContext, setShowCart } from "../../context/StateContext";

function ProductDetails({ product, products }) {
  const { image, name, details, price } = product;

  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              alt=""
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
                key={i}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Detalhes:</h4>
          <p>{details}</p>
          <p className="price">
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          <div className="quantity">
            <h3>Quantidade:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num" onClick={() => console.log("ok")}>
                {qty}
              </span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add ao carrinho
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Comprar agora
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>Você também pode gostar</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "product"]{
    slug { 
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productQuery = '*[_type == "product"]';
  const product = await client.fetch(query);

  const products = await client.fetch(productQuery);

  return {
    props: { products, product },
  };
}

export default ProductDetails;
