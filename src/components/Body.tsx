import { NewTask } from "./NewTask";
import { TaskCount } from "./TaskCount";
import styles from './Body.module.css'

export function Body() {
  return (
    <div className={styles.bodyWrapper}>
      <NewTask />
      <TaskCount />
    </div>
  );
}
