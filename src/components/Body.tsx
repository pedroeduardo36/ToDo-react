import { NewTask } from "./NewTask";
import { TaskCount } from "./TaskCount";
import styles from './Body.module.css'
import { EmptyList } from "./EmptyList";
import { TaskCard } from "./TaskCard";

export function Body() {
  return (
    <div className={styles.bodyWrapper}>
      <NewTask />
      <TaskCount />
      {/* <EmptyList /> */}
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
}
