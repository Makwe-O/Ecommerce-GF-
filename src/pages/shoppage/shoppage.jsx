import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import WithSpinner from '../../hoc/withSpinner/withSpinner';
import * as shopAction from '../../actions/shop/shopAction';
import {
  firestore,
  converCollectionsSnapshotTomap
} from '../../utilities/firebase/firebase';
import { connect } from 'react-redux';
import collectionOverview from '../../components/collectionOverview/collectionOverview';
import collectionPage from '../collection/collectionPage';

const CollectionOverviewWithSpinner = WithSpinner(collectionOverview);
const CollectionPageWithSpinner = WithSpinner(collectionPage);
class Shoppage extends Component {
  state = {
    isLoading: true
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = converCollectionsSnapshotTomap(snapshot);
      await updateCollection(collectionsMap);
      await this.setState({ isLoading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <>
        <Route
          exact
          path={`${match.path}/`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  updateCollection: shopAction.updateCollection
};

export default connect(
  null,
  mapDispatchToProps
)(Shoppage);
