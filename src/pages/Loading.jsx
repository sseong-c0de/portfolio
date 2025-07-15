import styles from "./Loading.module.css";
function Loading() {
  return (
    <div className={styles.loadingSection}>
      <div className={styles.pBox}>
        <div className={styles.firstP}>
          <p>Welcome to my</p>
          <p>Portfolio</p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
