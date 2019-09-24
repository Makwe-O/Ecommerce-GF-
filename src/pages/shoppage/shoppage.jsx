import React, { Component } from "react";
import CategoryPreviewCollection from "../../components/category-preview-collection/category-preview-collection";
import SHOP_DATA from "./shopData";
class Shoppage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <>
        <div className="container">
          {collections.map(collection => (
            <CategoryPreviewCollection
              key={collection.id}
              products={collection}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Shoppage;
