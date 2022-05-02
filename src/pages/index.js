import React from "react";

function Home() {
  return (
    <>
      MBTEch Store
      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Spearks of many variants</p>
      </div>
      <div>
        {["product1", "product2", "product3"].map((product) => product)}
      </div>
    </>
  );
}

export default Home;
