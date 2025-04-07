import { useState } from "react";

function ProjectDropDown() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="DropDown">
        <button
          className="dropDownToggle"
          onClick={() => {
            setOpen(!open);
          }}
        >
          프로젝트들
        </button>
        {open && (
          <ul className="dropdownMenu">
            <li>칼하트</li>
            <li>테슬라</li>
            <li>투두리스트앱</li>
            <li>필름파인드</li>
          </ul>
        )}
      </div>
    </div>
  );
}
export default ProjectDropDown;
