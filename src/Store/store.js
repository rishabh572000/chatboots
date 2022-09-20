import rootReducer from "./Reducer/index";
import {createStore} from 'redux';

const store=createStore(rootReducer);

export default store;