import styles from "./NewTask.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export function NewTask() {
  return (
    <form className={styles.form}>
      <textarea
        name="NewTask"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <div className={styles.add}>
        <button>
          <strong>Criar</strong>
        </button>
        <PlusCircle />
      </div>
    </form>
  );
}
