import "./Intro.css";
import styles from "./Intro.module.css";
function Intro() {
  return (
    <section className={"introSection"}>
      <div className={styles.container}>
        <div className={styles.textBox}>
          <p>이재성의</p>
          <p>포트폴리오</p>
        </div>
      </div>
    </section>
  );
}
export default Intro;
