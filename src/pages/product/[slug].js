import React from "react";

import { client, urlFor } from "../../lib/client";

function ProductDetails({ product, products }) {
  const { image, name, details, price } = product;

  return (
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={urlFor(image && image[0])} alt="" />
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
