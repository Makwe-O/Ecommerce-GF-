import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collection/collectionPage';

const Shoppage = ({ match }) => {
  console.log(match);
  return (
    <>
      <Route exact path={`${match.path}/`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </>
  );
};

export default Shoppage;
