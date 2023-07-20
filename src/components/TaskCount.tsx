import styles from "./TaskCount.module.css";

export function TaskCount() {
  return (
    <div className={styles.taskCreated}>
      <strong>Tarefas criadas</strong>

      <span>0</span>
    </div>
  );
}
