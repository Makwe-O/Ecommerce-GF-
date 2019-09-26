import React from "react";
import Card from "../card/card";
import { Link } from "react-router-dom";
const CategoryPreviewCollection = ({ products }) => {
  return (
    <div className="">
      <h2>
        <Link to={products.url}>{products.name}</Link>
      </h2>
      <div>
        <div className="row">
          {products.items
            .filter((product, index) => index < 4)
            .map(product => (
              <div key={product.id} className="col col-xs-12 col-lg-3">
                <Card cardData={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPreviewCollection;
