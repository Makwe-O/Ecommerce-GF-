const INITIAL_STATE = {
  collection: {}
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'UPDATE_COLLECTION':
      return {
        ...state,
        collection: payload
      };
    default:
      return state;
  }
};

export default shopReducer;
