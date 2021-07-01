import styles from './index.css';
import {Button} from "antd";
import {history} from "umi";

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        测试代码
        <Button onClick={() => history.push('/oneDrive/list')}>点击跳转到onedrive列表</Button>
      </ul>
    </div>
  );
}
