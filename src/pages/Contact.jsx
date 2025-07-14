// import "./Contact.css";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <section className={styles.contactSection} id="contactSection">
      <div className={styles.title}>
        <h2>04 Contact</h2>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactContents}>
          <div className={styles.contactThank}>
            <p>저의 포트폴리오를 끝까지 봐주셔서 감사합니다.</p>
          </div>
          <div className={styles.contactClosing}>
            <p>
              더 나은 웹 개발자로 성장하기 위해 끊임없이 배우고, 새로운
              기술을익히며 발전해 나가고 있습니다. 앞으로도 완성도가 높은 개발을
              위해 노력하겠습니다.
            </p>
          </div>
        </div>
        <div className={styles.contactEmail}>
          <p>이메일 & 연락처</p>
          <div className={styles.emailPhone}>
            <div className={styles.email}>
              <p>이메일: sseong5129@naver.com</p>
            </div>
            <div className={styles.phone}>
              <p>연락처: 010 9400 5475</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
