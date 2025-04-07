import { useState } from "react";
import ProjectDropDown from "../Component/ProjectDropdown";
import ProjectBtn from "../Component/ProjectBtn";
function Project() {
  // const fixLabels = {
  //   type: "타입",
  //   font: "폰트",
  //   program: "활용 프로그램",
  //   library: "활용 라이브러리",
  //   typeContents: "반응형:모바일,태블릿,노트북,PC",
  // };
  return (
    <div>
      <div className="ProjectContainer">
        <div className="sectionTitle">
          <h2>02 프로젝트</h2>
          <ProjectDropDown></ProjectDropDown>
          <ProjectBtn></ProjectBtn>
        </div>
        <div className="scrollBox">
          <p>마우스를 올린후에 스크롤을 내려보세요</p>
        </div>
        <div className="ProjectBox">
          <div className="ProjectImg">
            <img></img>
          </div>
          <div className="ProjectDescription">
            <div className="ProjectTtile">
              <h3>carhartt 데이터 꺼내오기</h3>
              <p>칼하트 데이터 꺼내오기</p>
              <p>설명 데이터 꺼내오기</p>
            </div>
            <div className="ProjectDetailBox">
              <div className="detailRow">
                <span className="label">타입</span>
                <span className="contents">반응형:모바일,태블릿,노트북,PC</span>
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
          <div className="ProjectPageBtn">
            <button className="">홈페이지</button>
            <button className="">디자인</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
