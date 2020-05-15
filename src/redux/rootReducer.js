import {combineReducers} from 'redux';
import UserReducer from './user/user.reducer';
import CartDropdownReducer from './cart/cart.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import DirectoryReducer from '../redux/directory/directoryReducer';
import ShopReducer from '../redux/shop/shopReducer';


const persistConfig={
    key:"root",
    storage,
    whitelist:['cartDropdown']
}
const rootReducer=combineReducers({
    user:UserReducer,
    cartDropdown:CartDropdownReducer,
    Directory:DirectoryReducer,
    ShopItems:ShopReducer
})

export default persistReducer(persistConfig,rootReducer);

