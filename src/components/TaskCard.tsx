import styles from "./TaskCard.module.css";
import trashLogo from "../assets/trash.svg";
import { Checkbox } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function handleCommentCheck(){
  ''
  // TEXT DECORATION -> THROUGH TEXT | COUNT +1 TASK DONE
}

export function TaskCard() {
  return (
    <div className={styles.cardWrapper}>
      {/* <button className={styles.button}></button> */}
      <Checkbox
        size="medium"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        onChange={handleCommentCheck}

        sx={{
          color: "#4ea8de",
          "&.Mui-checked": {
            color: "#8284fa",
          },
        }}
      />

      <div className={styles.textWrapper}>
        <span>
          Oi meu amor! Passando por meio dessa imagem pra dizer que te amo
          MUITO, e que estou morrendo de saudade de você. Estou doido pra te
          ver, cafungar e fazer carinho no xubinho. Te amo
        </span>
      </div>

      <button>
        <img src={trashLogo} alt="trash logo" />
      </button>
    </div>
  );
}
