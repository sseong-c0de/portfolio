import { useRef } from "react";
import styles from "./Intro.module.css";
function Intro() {
  const boxRef = useRef(null);

  const handleEnter = () => {
    boxRef.current.style.transtion = "all 0.3s";
    boxRef.current.style.transform = "scale(1.05) rotateX(0deg) rotateY(0deg)";
  };
  const handdleMove = (e) => {
    const centerX = boxRef.current.clientWidth / 2;
    const centerY = boxRef.current.clientHeight / 2;
    const offsetX = e.nativeEvent.offsetX - centerX;
    const offsetY = e.nativeEvent.offsetY - centerY;
    const rotateX = -offsetY / 8;
    const rotateY = offsetX / 8;
    boxRef.current.style.transform = `scale(1.05 )rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };
  const handdleOut = () => {
    boxRef.current.style.transform = " scale(1) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section className={styles.introSection} id="introSection">
      <div className={styles.container}>
        <div className={styles.textBox}>
          <div
            className={styles.moveBox}
            ref={boxRef}
            onMouseEnter={handleEnter}
            onMouseMove={handdleMove}
            onMouseOut={handdleOut}
          >
            <p>이재성의</p>
            <p>포트폴리오</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Intro;
