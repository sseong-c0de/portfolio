import ProjectDropDown from "../Component/ProjectDropdown";
import ProjectBtn from "../Component/ProjectBtn";
import ProjectData from "../Data/ProjectData";
import "./Project.css";
import styles from "./Project.module.css";

function Project() {
  // const fixLabels = {
  //   type: "타입",
  //   font: "폰트",
  //   program: "활용 프로그램",
  //   library: "활용 라이브러리",
  //   typeContents: "반응형:모바일,태블릿,노트북,PC",
  // };

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2>02 프로젝트</h2>
        <div className={styles.projectBtn}>
          <ProjectDropDown></ProjectDropDown>
          <ProjectBtn></ProjectBtn>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.projectBg}>
          <div className={styles.scrollBox}>
            <p>마우스를 올린후에 스크롤을 내려보세요</p>
          </div>
          <div className={styles.projectBox}>
            <div className={styles.projectImg}>
              <img></img>
            </div>
            <div className={styles.projectDescription}>
              <div className={styles.projectTitle}>
                <h3>carhartt</h3>
                <p>칼하트</p>
                <p>선호하는 의류 브랜드사이트를 리뉴얼해서 만들었습니다</p>
                <div className="line"></div>
              </div>
              <div className={styles.projectDetailBox}>
                <div className={styles.detailRow}>
                  <span className={styles.label}>타입</span>
                  <span className={styles.contents}>
                    반응형:모바일,태블릿,노트북,PC
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>폰트</span>
                  <span className={styles.contents}>데이터꺼내오기</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>프로그램</span>
                  <span className={styles.contents}>데이터꺼내오기</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>라이브러리</span>
                  <span className={styles.contents}>데이터꺼내오기</span>
                </div>
              </div>
            </div>
            <div className={styles.projectPageBtn}>
              <button className={styles.homePage}>홈페이지</button>
              <button className={styles.design}>디자인</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;
