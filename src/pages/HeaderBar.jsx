import { useState } from "react";
import "./Header.css";
function HeaderBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header>
        <div className="headerContainer">
          <div className="headerCenter">
            <div className="h1Wrap">
              <h1>이재성의 포트폴리오</h1>
            </div>
            <button className="burger" onClick={() => setOpen(!open)}>
              {open ? (
                <span className="close">✕</span>
              ) : (
                <>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </>
              )}
            </button>
          </div>
          <nav>
            <h2 className="screen_out">main_navigation</h2>
            <div className={open ? "gnbWrap show" : "gnbWrap"}>
              <ul className="gnb">
                <li>
                  <a href="#">인트로</a>
                </li>
                <li>
                  <a href="#">프로필</a>
                </li>
                <li>
                  <a href="#">프로젝트</a>
                </li>
                <li>
                  <a href="#">컨택트</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default HeaderBar;
