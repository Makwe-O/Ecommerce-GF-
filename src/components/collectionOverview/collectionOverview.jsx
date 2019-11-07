import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../selectors/shop/shop';
import CategoryPreviewCollection from '../category-preview-collection/category-preview-collection';
import collectionPage from '../../pages/collection/collectionPage';

const CollectionOverview = ({ collections, match }) => {
  return (
    <div className='container mt-5'>
      {collections.map(collection => (
        <CategoryPreviewCollection
          key={collection.id}
          products={collection}
          url={match.path}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});
export default connect(mapStateToProps)(CollectionOverview);
