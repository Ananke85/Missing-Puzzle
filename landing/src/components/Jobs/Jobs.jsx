import styles from "./jobs.module.css";

const Jobs = () => {
  const jobPositions = [
    {
      // logo: hermes,
      title: "Art Director",
      company: "Hermès International S.A.",
      place: "Pensylvannia",
      reward: 1240,
    },
    {
      // logo: cocacola,
      title: "HR Head of Operations",
      company: "The Coca-Cola Company",
      place: "Atlanta, Georgia",
      reward: 1980,
    },
    {
      // logo: dropbox,
      title: "Business Strategy Associate",
      company: "Dropbox, Ent.",
      place: "San Francisco, California",
      reward: 3100,
    },
    {
      // logo: mcdonalds,
      title: "Financial Analyst",
      company: "McDonald's Corporation",
      place: "Columbus, Ohio",
      reward: 1240,
    },
  ];

  return (
    <>
      <div className={styles.jobs}>
        <h3>RECENTLY ADDED JOBS:</h3>
        <div className={styles.jobCards}>
          {jobPositions.map((job) => (
            <div key={job.title} className={styles.card}>
              <h4>{job.title}</h4>
              <h5>{job.company}</h5>
              <h5 className={styles.textGrey}>{job.place}</h5>

              <div className={styles.reward}>

              <h5 className={styles.textPink}>
                {job.reward.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                })}{" "}
              </h5>
              <h5 className={styles.textGrey}>of hiring reward</h5>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
