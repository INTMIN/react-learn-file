import {fromJS} from 'immutable';
import * as constants from './constants';

// immutable库
// immutable对象

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
        return state.merge({
            topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList),
            recommendList:fromJS(action.recommendList)
        })
        default:
            return state;
    }
}