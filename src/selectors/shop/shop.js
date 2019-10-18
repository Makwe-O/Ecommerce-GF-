import { createSelector } from 'reselect';

const selectShop = state => state.shopReducer;

export const selectCollections = createSelector(
  [selectShop],
  shopReducer => shopReducer.collection
);
