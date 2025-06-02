import styles from "../pages/Project.module.css";
import { useState } from "react";
function ProjectDropDown({ setSelectProject, ProjectData, setFade }) {
  const [open, setOpen] = useState(false);
  const setClose = () => {
    if (open) {
      setOpen(false);
    }
  };

  const fadeClick = (index) => {
    setFade(true);
    setClose();
    setTimeout(() => {
      setSelectProject(ProjectData[index]);
      setFade(false);
    }, 200);
  };
  return (
    <div className={styles.onlyMobile}>
      <div className={styles.dropDown}>
        <button
          className={styles.dropDownUl}
          onClick={() => {
            setOpen(!open);
          }}
        >
          프로젝트
        </button>
        <ul className={`${styles.dropDownMenu} ${open ? styles.show : ""}`}>
          <li
            onClick={() => {
              fadeClick(0);
            }}
          >
            칼하트
          </li>
          <li
            onClick={() => {
              fadeClick(1);
            }}
          >
            테슬라
          </li>
          <li
            onClick={() => {
              fadeClick(2);
            }}
          >
            투두리스트앱
          </li>
          <li
            onClick={() => {
              fadeClick(3);
            }}
          >
            필름파인드
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ProjectDropDown;
