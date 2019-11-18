const INITIAL_STATE = {
  collection: null,
  isLoading: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'FETCH_COLLECTIONS_START':
      return {
        ...state,
        isLoading: true
      };
    case 'FETCH_COLLECTIONS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        collection: payload
      };
    case 'FETCH_COLLECTIONS_FAILURE':
      return {
        ...state,
        isLoading: false,
        errorMessage: payload
      };
    default:
      return state;
  }
};

export default shopReducer;
