import {MessageData, ChatTrueFalse} from './MessageData';
// import ChatTrueFalse from './ChatTrueF';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    MessageData,
    ChatTrueFalse,
}) 
export default rootReducer;