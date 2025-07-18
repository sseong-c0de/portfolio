import styles from "./Skill.module.css";
import FadeAni from "../Component/FadeAni";
import { skillLeftData, skillRightData } from "../Data/SkillData";

function Skill() {
  return (
    <section className={styles.skillSection} id="skillSection">
      <div className={styles.title}>
        <h2>02 Skill</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.leftSkill}>
          {skillLeftData.map((left, index) => {
            return (
              <FadeAni key={index}>
                <div className={styles.Icontitle}>
                  <img src={left.icon} className={styles.icon} />
                  <div className={styles.iconName}>{left.title}</div>
                </div>
                <div className={styles.iconInfo}>{left.info}</div>
              </FadeAni>
            );
          })}
        </div>
        <div className={styles.rightSkill}>
          {skillRightData.map((right, index) => {
            return (
              <FadeAni key={index}>
                <div className={styles.Icontitle}>
                  <img src={right.icon} className={styles.icon}></img>
                  <div className={styles.iconName}>{right.title}</div>
                </div>
                <div className={styles.iconInfo}>{right.info}</div>
              </FadeAni>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Skill;
