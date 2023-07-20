import emptyLogo from '../assets/empty.svg'
import styles from './EmptyList.module.css'

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <img src={emptyLogo} alt='Empty list logo'/>
      <span>:l</span>
    </div>
  );
}
