import React from 'react';
import Card from '../card/card';
import { Link } from 'react-router-dom';
const CategoryPreviewCollection = ({ products, url }) => {
  return (
    <div className=''>
      <h2 className='collection-header'>
        <Link to={`${url}${products.routeName}`}>{products.name}</Link>
      </h2>
      <div>
        <div className='row'>
          {products.items
            .filter((product, index) => index < 4)
            .map(product => (
              <div key={product.id} className='col col-xs-12 col-lg-3'>
                <Card cardData={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPreviewCollection;
