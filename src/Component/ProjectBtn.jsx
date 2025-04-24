import styles from "../pages/Project.module.css";
function ProjectBtn({ selectProject, setSelectProject, ProjectData, setFade }) {
  const fadeClick = (index) => {
    setFade(true);
    setTimeout(() => {
      setSelectProject(ProjectData[index]);
      setFade(false);
    }, 200);
  };
  return (
    <div className={styles.onlyDesktop}>
      <div className={styles.projectBtnContainer}>
        <button
          onClick={() => {
            if (selectProject.title !== ProjectData[0].title) {
              fadeClick(0);
            }
          }}
        >
          칼하트
        </button>
        <button
          onClick={() => {
            if (selectProject.title !== ProjectData[1].title) {
              fadeClick(1);
            }
          }}
        >
          테슬라
        </button>
        <button
          onClick={() => {
            if (selectProject.title !== ProjectData[2].title) {
              fadeClick(2);
            }
          }}
        >
          투두리스트
        </button>
        <button
          onClick={() => {
            if (selectProject.title !== ProjectData[3].title) {
              fadeClick(3);
            }
          }}
        >
          필름파인드
        </button>
      </div>
    </div>
  );
}
export default ProjectBtn;
