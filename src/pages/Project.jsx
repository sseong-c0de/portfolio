import ProjectDropDown from "../Component/ProjectDropdown";
import ProjectBtn from "../Component/ProjectBtn";
import "./Project.css";

function Project() {
  // const fixLabels = {
  //   type: "타입",
  //   font: "폰트",
  //   program: "활용 프로그램",
  //   library: "활용 라이브러리",
  //   typeContents: "반응형:모바일,태블릿,노트북,PC",
  // };

  return (
    <section className="projectSection">
      <div className="sectionTitle">
        <h2>02 프로젝트</h2>
        <div className="projectBtn">
          <ProjectDropDown></ProjectDropDown>
          <ProjectBtn></ProjectBtn>
        </div>
      </div>
      <div className="projectContainer">
        <div className="projectBg">
          <div className="scrollBox">
            <p>마우스를 올린후에 스크롤을 내려보세요</p>
          </div>
          <div className="projectBox">
            <div className="projectImg">
              <img></img>
            </div>
            <div className="projectDescription">
              <div className="projectTtile">
                <h3>carhartt 데이터 꺼내오기</h3>
                <p>칼하트 데이터 꺼내오기</p>
                <p>설명 데이터 꺼내오기</p>
              </div>
              <div className="projectDetailBox">
                <div className="detailRow">
                  <span className="label">타입</span>
                  <span className="contents">
                    반응형:모바일,태블릿,노트북,PC
                  </span>
                </div>
                <div className="detailRow">
                  <span className="label">폰트</span>
                  <span className="contents">데이터꺼내오기</span>
                </div>
                <div className="detailRow">
                  <span className="label">활용 프로그램</span>
                  <span className="contents">데이터꺼내오기</span>
                </div>
                <div className="detailRow">
                  <span className="label">활용 라이브러리</span>
                  <span className="contents">데이터꺼내오기</span>
                </div>
              </div>
            </div>
            <div className="projectPageBtn">
              <button className="">홈페이지</button>
              <button className="">디자인</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;
