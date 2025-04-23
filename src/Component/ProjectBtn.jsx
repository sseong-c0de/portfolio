import styles from "../pages/Project.module.css";
function ProjectBtn() {
  return (
    <div className={styles.onlyDesktop}>
      <div className={styles.projectBtnContainer}>
        <a href="#">칼하트</a>

        <a href="#">테슬라</a>

        <a href="#">투두리스트</a>

        <a href="#">필름파인드</a>
      </div>
    </div>
  );
}
export default ProjectBtn;
