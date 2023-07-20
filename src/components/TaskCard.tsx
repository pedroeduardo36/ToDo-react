import styles from "./TaskCard.module.css";
import trashLogo from "../assets/trash.svg";

export function TaskCard() {
  return (
    <div className={styles.cardWrapper}>

        <button className={styles.button}></button>

      <div className={styles.textWrapper}>
        <span>
          Oi meu amor! Passando por meio dessa imagem pra dizer que te amo MUITO, e que estou morrendo de 
          saudade de você. Estou doido pra te ver, cafungar e fazer carinho no xubinho. Te amo
        </span>
      </div>
      
      <button>
        <img src={trashLogo} alt="trash logo" />
      </button>
    </div>
  );
}
