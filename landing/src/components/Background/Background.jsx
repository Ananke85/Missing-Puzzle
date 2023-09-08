import styles from "./background.module.css";
import puzzle from "../../assets/puzzle.png"

const Background = () => {
  return (
    <>
      <div className={styles.upGreen}></div>
      <div className={styles.green}></div>
      <div className={styles.pink}></div>
      <img src={puzzle} className={styles.puzzle}></img>


    </>
  );
};

export default Background;
