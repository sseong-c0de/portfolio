import "./ProjectDropdown.css";
import styles from "../pages/Project.module.css";
import { useState } from "react";

function ProjectDropDown() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.onlyMobile}>
      <div className={styles.dropDown}>
        <button
          className={styles.dropDownUl}
          onClick={() => {
            setOpen(!open);
          }}
        >
          프로젝트들
        </button>
        <ul className={`${styles.dropDownMenu} ${open ? styles.show : ""}`}>
          <li>칼하트</li>
          <li>테슬라</li>
          <li>투두리스트앱</li>
          <li>필름파인드</li>
        </ul>
      </div>
    </div>
  );
}
export default ProjectDropDown;
