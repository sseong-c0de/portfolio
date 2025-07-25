import ProjectDropDown from "../Component/ProjectDropdown";
import ProjectBtn from "../Component/ProjectBtn";
import ProjectData from "../Data/ProjectData";
import styles from "./Project.module.css";
import { useEffect, useState } from "react";

function Project() {
  const [selectProject, setSelectProject] = useState(ProjectData[0]);
  const [fade, setFade] = useState(false);
  const [imgSize, setImgSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1700) setImgSize("PC");
      else if (width >= 1024) setImgSize("laptop");
      else if (width >= 768) setImgSize("tablet");
      else setImgSize("mobile");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // 정리
    };
  }, []);
  return (
    <section className={styles.projectSection} id="projectSection">
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <h2>03 Project</h2>
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
            <p>이미지를 내려보세요</p>
          </div>
          <div className={styles.projectBox}>
            <div className={styles.deviceImg}>
              <div className={styles.projectImg}>
                <img
                  className={`${styles.portfolioImg} ${styles.fadeWrap} ${
                    fade ? styles.fadeOut : ""
                  }`}
                  src={selectProject.image[imgSize]}
                  alt="프로젝트 이미지"
                />
              </div>
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
                    <span className={styles.label}>사용 언어</span>
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
                  <div className={styles.detailRow}>
                    <span className={styles.label}>프레임워크</span>
                    <span className={styles.contents}>
                      {selectProject.details.framework}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.projectPageBtn}>
                <a href={selectProject.links.homepage} target="_blank">
                  홈페이지
                </a>
                <a href={selectProject.links.designPage} target="_blank">
                  디자인
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;
