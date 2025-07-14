import { useState } from "react";
import styles from "./Header.module.css";

function HeaderBar() {
  const [open, setOpen] = useState(false);
  const setClose = () => {
    if (open) {
      setOpen(false);
    }
  };
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <div className={styles.center}>
            <div className={styles.h1Wrap}>
              <h1>
                <a href="#introSection">JAE SEONG's PORTFOLIO</a>
              </h1>
            </div>
            <button className={styles.burger} onClick={() => setOpen(!open)}>
              {open ? (
                <span className={styles.close}>✕</span>
              ) : (
                <>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                </>
              )}
            </button>
          </div>
          <nav>
            <h2 className="screen_out">main_navigation</h2>
            <div className={`${styles.gnbWrap} ${open ? styles.show : ""}`}>
              <ul className={styles.gnb}>
                <li onClick={setClose}>
                  <a href="#introSection">Home</a>
                </li>
                <li onClick={setClose}>
                  <a href="#profileSection">Profile</a>
                </li>
                <li onClick={setClose}>
                  <a href="#projectSection">Project</a>
                </li>
                <li onClick={setClose}>
                  <a href="#contactSection">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default HeaderBar;
