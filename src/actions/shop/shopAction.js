export const updateCollection = collectionMap => dispatch => {
  dispatch({
    type: 'UPDATE_COLLECTION',
    payload: collectionMap
  });
};
