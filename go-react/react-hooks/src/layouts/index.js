import styles from './index.css';
import React from 'react';


function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>海内存知己</h1>
      <h3 className={styles.title2}><span>我的日常记录</span></h3>

      {props.children}
    </div>
  );
}

export default BasicLayout;
