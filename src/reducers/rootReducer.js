import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import shopReducer from './shop/shopReducer';

const persitConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
};

const reducers = combineReducers({
  userReducer,
  shopReducer,
  cartReducer
});

export default persistReducer(persitConfig, reducers);
