import { Component } from 'react';
import withRouter from 'umi/withRouter';

// 可配置到全局布局，如果跳转了路由则回到顶部

class LayoutTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

export default withRouter(LayoutTop);
