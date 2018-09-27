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
    }],
    recommendList: [{
        id:1,
        imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },{
        id:2,
        imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },{
        id:3,
        imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },{
        id:4,
        imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },{
        id:5,
        imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}