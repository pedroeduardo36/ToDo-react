import { NewTask } from "./NewTask";
import { TaskCount } from "./TaskCount";
import styles from './Body.module.css'
import { EmptyList } from "./EmptyList";

export function Body() {
  return (
    <div className={styles.bodyWrapper}>
      <NewTask />
      <TaskCount />
      <EmptyList />
    </div>
  );
}
