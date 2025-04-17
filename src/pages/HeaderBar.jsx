import { useState } from "react";
import styles from "./Header.module.css";
function HeaderBar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <div className={styles.center}>
            <div className={styles.h1Wrap}>
              <h1>이재성의 포트폴리오</h1>
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
                <li>
                  <a href="#">인트로</a>
                </li>
                <li>
                  <a href="#">프로필</a>
                </li>
                <li>
                  <a href="#">프로젝트</a>
                </li>
                <li>
                  <a href="#">컨택트</a>
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
