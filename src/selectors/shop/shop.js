import { createSelector } from 'reselect';

const selectShop = state => state.shopReducer;

export const selectCollections = createSelector(
  [selectShop],
  shopReducer => shopReducer.collection
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections =>
    collections
      ? Object.keys(collections).map(collection => collections[collection])
      : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );
