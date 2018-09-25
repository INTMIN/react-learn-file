import { combineReducers} from 'redux';
import { reducer as headerReducer} from '../common/header/store';
// es6的语法


const reducer = combineReducers({
    header: headerReducer
});

export default reducer;