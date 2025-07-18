import { useEffect, useRef, useState } from "react";
import styles from "../pages/Skill.module.css";
function FadeAni({ children, threshold = 150 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const scrollFade = () => {
      if (!ref.current) {
        return;
      }
      const top = ref.current.getBoundingClientRect().top;
      const windowTop = window.innerHeight;
      if (!show && top < windowTop - threshold) {
        setShow(true);
      }
    };
    window.addEventListener("scroll", scrollFade);
    scrollFade();
    return () => window.removeEventListener("scroll", scrollFade);
  }, [show]);
  return (
    <div className={`${styles.skillItem} ${show ? styles.show : ""}`} ref={ref}>
      {children}
    </div>
  );
}
export default FadeAni;
