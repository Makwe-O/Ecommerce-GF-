import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collection/collectionPage';
import * as shopAction from '../../actions/shop/shopAction';
import {
  firestore,
  converCollectionsSnapshotTomap
} from '../../utilities/firebase/firebase';
import { connect } from 'react-redux';

class Shoppage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = converCollectionsSnapshotTomap(snapshot);
      updateCollection(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <>
        <Route exact path={`${match.path}/`} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
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
