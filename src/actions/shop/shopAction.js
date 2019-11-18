import {
  firestore,
  convertCollectionsSnapshotTomap
} from '../../utilities/firebase/firebase';

export const fetchCollectionsStart = () => ({
  type: 'FETCH_COLLECTIONS_START'
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: 'FETCH_COLLECTIONS_SUCCESS',
  payload: collectionsMap
});

export const fetchCollectionsFailure = error => ({
  type: 'FETCH_COLLECTIONS_FAILURE',
  payload: error
});

export const fetchCollections = () => dispatch => {
  const collectionRef = firestore.collection('collection');
  dispatch(fetchCollectionsStart());
  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotTomap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(error => dispatch(fetchCollectionsFailure(error)));
};
