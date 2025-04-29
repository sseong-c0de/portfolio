import ProjectDropDown from "../Component/ProjectDropdown";
import ProjectBtn from "../Component/ProjectBtn";
import ProjectData from "../Data/ProjectData";
import styles from "./Project.module.css";
import { useState } from "react";

function Project() {
  const [selectProject, setSelectProject] = useState(ProjectData[0]);
  const [fade, setFade] = useState(false);

  return (
    <section className={styles.projectSection} id="projectSection">
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <h2>02 프로젝트</h2>
          <div className={styles.projectBtn}>
            <ProjectDropDown
              className={styles.onlyMobile}
              setSelectProject={setSelectProject}
              ProjectData={ProjectData}
              setFade={setFade}
            ></ProjectDropDown>
            <ProjectBtn
              className={styles.onlyDesktop}
              selectProject={selectProject}
              setSelectProject={setSelectProject}
              ProjectData={ProjectData}
              setFade={setFade}
            ></ProjectBtn>
          </div>
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
            <div className={styles.projectWrap}>
              <div
                className={`${styles.projectDescription} ${styles.fadeWrap} ${
                  fade ? styles.fadeOut : ""
                }`}
              >
                <div className={styles.projectTitle}>
                  <h3>{selectProject.title}</h3>
                  <p>{selectProject.koTitle}</p>
                  <p>{selectProject.description}</p>
                  <div className={styles.line}></div>
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
                    <span className={styles.contents}>
                      {selectProject.details.font}
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.label}>프로그램</span>
                    <span className={styles.contents}>
                      {selectProject.details.program}
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.label}>라이브러리</span>
                    <span className={styles.contents}>
                      {selectProject.details.library}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.projectPageBtn}>
                <a href="#">홈페이지</a>
                <a href="#">디자인</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;
