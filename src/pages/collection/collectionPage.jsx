import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../selectors/shop/shop';
import Card from '../../components/card/card';

const CollectionPage = ({ match, collection }) => {
  return (
    <div className='container header'>
      <h2 className='text-center'>{match.params.categoryId}</h2>
      <div className='row mt-4'>
        {collection.items.map(item => (
          <div key={item.id} className='col col-xs-12 col-lg-3'>
            <Card cardData={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(
  mapStateToProps,
  null
)(CollectionPage);
