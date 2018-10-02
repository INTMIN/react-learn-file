import React from 'react';
import Loadable from 'react-loadable';



const LoadableComponent = Loadable({
  loader: () => import('./'),
    // 异步加载
  loading() {
      return <div>正在加载</div>
  }
});

export default () => <LoadableComponent />

// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }