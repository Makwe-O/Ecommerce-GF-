import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import WithSpinner from '../../hoc/withSpinner/withSpinner';
import { createStructuredSelector } from 'reselect';
import {
  selectCollectionsIsLoading,
  selectCollectionsErrorMessage,
  isCollectionLoaded
} from '../../selectors/shop/shop';
import * as shopAction from '../../actions/shop/shopAction';
import { connect } from 'react-redux';
import collectionOverview from '../../components/collectionOverview/collectionOverview';
import collectionPage from '../collection/collectionPage';

const CollectionOverviewWithSpinner = WithSpinner(collectionOverview);
const CollectionPageWithSpinner = WithSpinner(collectionPage);
class Shoppage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    this.props.fetchCollections();
  }
  render() {
    const { match, isCollectionLoaded } = this.props;

    return (
      <>
        <Route
          exact
          path={`${match.path}/`}
          render={props => (
            <CollectionOverviewWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchCollections: shopAction.fetchCollections
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionsIsLoading,
  errorMessage: selectCollectionsErrorMessage,
  isCollectionLoaded
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shoppage);
