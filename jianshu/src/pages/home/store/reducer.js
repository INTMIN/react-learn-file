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
    }],
    articleList: [{
        id:1,
        title: '喜欢看书的朋友，这一款不可多得的APP',
        desc: '藏书馆.cangshuguan藏书馆 这个软件是免费的，免费的，免费的书书书书 里面有5万多本书呢 生活还是简单点好 只推荐一款APP 够用就行..',
        imgUrl: '//upload-images.jianshu.io/upload_images/5781662-8ab2ea978d25be31.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id:2,
        title: '喜欢看书的朋友，这一款不可多得的APP',
        desc: '藏书馆.cangshuguan藏书馆 这个软件是免费的，免费的，免费的书书书书 里面有5万多本书呢 生活还是简单点好 只推荐一款APP 够用就行..',
        imgUrl: '//upload-images.jianshu.io/upload_images/5781662-8ab2ea978d25be31.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id:3,
        title: '喜欢看书的朋友，这一款不可多得的APP',
        desc: '藏书馆.cangshuguan藏书馆 这个软件是免费的，免费的，免费的书书书书 里面有5万多本书呢 生活还是简单点好 只推荐一款APP 够用就行..',
        imgUrl: '//upload-images.jianshu.io/upload_images/5781662-8ab2ea978d25be31.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id:4,
        title: '喜欢看书的朋友，这一款不可多得的APP',
        desc: '藏书馆.cangshuguan藏书馆 这个软件是免费的，免费的，免费的书书书书 里面有5万多本书呢 生活还是简单点好 只推荐一款APP 够用就行..',
        imgUrl: '//upload-images.jianshu.io/upload_images/5781662-8ab2ea978d25be31.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}