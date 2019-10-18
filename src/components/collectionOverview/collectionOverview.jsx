import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../selectors/shop/shop';
import CategoryPreviewCollection from '../category-preview-collection/category-preview-collection';
const CollectionOverview = ({ collections }) => {
  return (
    <div className='container'>
      {collections.map(collection => (
        <CategoryPreviewCollection key={collection.id} products={collection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});
export default connect(mapStateToProps)(CollectionOverview);
