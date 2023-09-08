import styles from "./content.module.css";
import job from "../../assets/job_search.png";

const Content = () => {
  return (
    <>
      <div className={styles.container}>
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
      </div>


      <div className={styles.textContainer}>
        <div className={styles.text}>
          <h3>INNOVATIVE SOLUTIONS FOR SOURCING CANDIDATES</h3>
          <h2 className={styles.title}>
            Help us find <strong className={styles.textPink}>the missing puzzle,</strong> <br />
            <strong className={styles.textPink}>get rewarded</strong> properly.
          </h2>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Keyword, job title or company"
              className={styles.search}
            ></input>
            <button>Find</button>
          </div>
        </div>
        <img src={job}></img>
      </div>
    </>
  );
};

export default Content;
