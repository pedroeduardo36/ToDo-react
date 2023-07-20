import styles from "./TaskCount.module.css";

export function TaskCount() {
  return (
    <div className={styles.taskWrapper}>
      {/* Tarefas criadas */}
      <div className={styles.taskCreated}>
        <strong>Tarefas criadas</strong>

        <span>0</span>
      </div>


      {/* Tarefas Concluídas */}
      <div className={styles.taskDone}>
        <strong>Concluídas</strong>

        <span>0</span>
      </div>
    </div>
  );
}
