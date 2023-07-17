//background gray 700 e logo central
import todoLogo from "../assets/todo-logo.svg";
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Todo logo"/>
    </header>
  );
}
