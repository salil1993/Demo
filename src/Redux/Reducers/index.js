import {combineReducers} from 'redux';
import DataReducer from './TransactionsReducer';

const rootReducer = combineReducers({
    DataReducer:DataReducer,
  
});
export default rootReducer;