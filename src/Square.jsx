import React from "react";
import styles from "./Square.module.css";

function Square(props) {
  const isX = props.value === "X";
  const isO = props.value === "O";

  return (
    <button className={`${styles.square} ${isX ? styles.x : ""} ${isO ? styles.o : ""}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
