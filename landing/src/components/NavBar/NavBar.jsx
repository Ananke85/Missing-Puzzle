import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={styles.back}></div>

      <div className={styles.mainContainer}>
        {/* <div className={styles.container}>
          <img></img>
          <div className={styles.navigation}>
            <h3>Home</h3>
            <h3>About Us</h3>
            <h3>Blog</h3>
            <h3>How it works?</h3>
          </div>
          <div className={styles.buttons}>
            <button>Log in</button>
            <button>Sign up</button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
