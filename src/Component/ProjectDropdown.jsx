import "./ProjectDropdown.css";
import { useState } from "react";

function ProjectDropDown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="onlyMobile">
      <div className="dropDown">
        <button
          className="dropDownUl"
          onClick={() => {
            setOpen(!open);
          }}
        >
          프로젝트들
        </button>
        <ul className={`dropDownMenu ${open ? "show" : ""}`}>
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
