import Board from "./Board";
import styles from "./Game.module.css";

function Game() {
  return (
    <div className={styles.game}>
      <div className={styles["game-board"]}>
        <Board />
      </div>
    </div>
  );
}

export default Game;
