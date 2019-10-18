import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';

const Shoppage = ({ match }) => {
  console.log(match);
  return (
    <>
      <Route exact path={`${match.path}/`} component={CollectionOverview} />
      <Route exact path={`${match.path}w/`} component={CollectionOverview} />
    </>
  );
};

export default Shoppage;
