import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

// PWA progressive web application
// https协议的服务器上 断网可重连 缓存
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
