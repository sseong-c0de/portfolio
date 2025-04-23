// import "./Footer.css";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.line}></div>
        <div className={styles.footerWrap}>
          <div className={styles.footerContents}>
            <p>
              해당 사이트는 상업적으로 이용하지 않으며 포트폴리용 사이트입니다
            </p>
          </div>
          <div className={styles.footerReserved}>
            <p>2025 LEE JAE SEONG. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
