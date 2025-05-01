import styles from "./Loading.module.css";
function Loading() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textBox}>
          <div className={styles.pBox}>
            <p>
              안녕하세요!
              <br />곧 저의 포트폴리오가 시작됩니다
              <br />
              잠시만 기다려주세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
