import {fromJS} from 'immutable';

// immutable库
// immutable对象

const defaultState = fromJS({
    topicList: [{
        id:1,
        title:'故 事',
        imgUrl:'//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id:2,
        title:'摄 影',
        imgUrl:'//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}