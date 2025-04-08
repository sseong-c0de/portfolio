import ProfileBox from "../Component/ProfileBox";
import "./Profile.css/";
function Profile() {
  const skillIcons = Array(10).fill("");
  return (
    <section className="profileSection">
      <div className="sectionTitle">
        <h2>01 나의 프로필</h2>
      </div>
      <div className="profileContainer">
        <div className="profileLeft">
          <div className="profilePicture">
            <div className="asd">사진 박스</div>
          </div>
          <div className="profileInfoBox">
            <p>이름:이재성(2000.09.29)</p>
            <p>전화번호:010 0000 0000</p>
            <p>이메일:만들 예정 </p>
          </div>
        </div>
        <div className="profileRight">
          <div className="profileDetail">
            <ProfileBox title={"학력사항"}>
              <div className="detailBox">
                <span>2016.03 ~ 2019.02</span>
                <span>두원공업고등학교</span>
              </div>
              <div className="detailBox">
                <span>2016.03 ~ 2019.02</span>
                <span>한국폴리텍대학</span>
              </div>
              <div className="detailBox">
                <span>2016.03 ~ 2019.02</span>
                <span>sbs아카데미</span>
              </div>
            </ProfileBox>
            <ProfileBox title={"경력사항"}>
              <div className="detailBox">
                <span>2016.03 ~ 2019.02</span>
                <span>코멕스카본</span>
              </div>
            </ProfileBox>
            <ProfileBox title={"자격사항 및 면허"}>
              <div className="detailBox">
                <span>2016.03 ~ 2019.02</span>
                <span>밀링기능사</span>
              </div>
              <div className="detailBox">
                <span>2016.03 ~ 2019.02</span>
                <span>운전면허</span>
              </div>
            </ProfileBox>
            <ProfileBox title={"활용프로그램 및 라이브러리"}>
              <div className="skillBox">
                {skillIcons.map((_, index) => {
                  return (
                    <div key={index} className="skillicon">
                      {index}
                    </div>
                  );
                })}
              </div>
            </ProfileBox>
          </div>
          <div className="profileIntroduce">
            <h3>자기소개</h3>
            <p>
              안녕하세요. 처음 코딩을 시작하면서 웹을 만들며 내가 작성한코드가
              원하는 대로 동작하는 사이트를 보고 느낀 기쁨과 재미를 잊지 않고
              있습니다. 그 순간들이 저에게 큰 동기부여가 되었고 단순히 동작하는
              코드가 아닌 가독성이 좋고 유지보수에 좋고 효율적인 코드를 작성하는
              개발자가 되고 싶다는 목표를 가지게 되었습니다. 저는 끈임없이
              배우고 성장하며, 완성도가 높은 코드를 작성하는 개발자가 되기 위해
              노력하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Profile;
