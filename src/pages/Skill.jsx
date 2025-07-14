import styles from "./Skill.module.css";
import { skillLeftData, skillRightData } from "../Data/SkillData";

function Skill() {
  return (
    <section className={styles.skillSection}>
      <div className={styles.title}>
        <h2>02 Skill</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.leftSkill}>
          {skillLeftData.map((left, index) => {
            return (
              <div key={index} className={styles.skillItem}>
                <div className={styles.Icontitle}>
                  <img src={left.icon} className={styles.icon} />
                  <div className={styles.iconName}>{left.title}</div>
                </div>
                <div className={styles.iconInfo}>{left.info}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.rightSkill}>
          {skillRightData.map((right, index) => {
            return (
              <div key={index} className={styles.skillItem}>
                <div className={styles.Icontitle}>
                  <img src={right.icon} className={styles.icon}></img>
                  <div className={styles.iconName}>{right.title}</div>
                </div>
                <div className={styles.iconInfo}>{right.info}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Skill;
