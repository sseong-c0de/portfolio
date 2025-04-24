// import "./Profile.css/";
import styles from "./Profile.module.css";
function Profile() {
  const skillIcons = Array(6).fill("");
  return (
    <section className={styles.profileSection} id="profileSection">
      <div className={styles.title}>
        <h2>01 나의 프로필</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.profileLeft}>
          <div className={styles.profilePicture}>
            <div className={styles.pictureBox}>사진 박스</div>
          </div>
          <div className={styles.profileInfoBox}>
            <p>이름:이재성(2000.09.29)</p>
            <p>전화번호:010 0000 0000</p>
            <p>이메일:만들 예정 </p>
          </div>
        </div>
        <div className={styles.profileRight}>
          <div className={styles.profileDetail}>
            <div className={styles.detailInfoBox}>
              <h3 className={styles.detailTitle}>학력사항</h3>
              <div className={styles.detailBox}>
                <span>2016.03 ~ 2019.02</span>
                <span>두원공업고등학교</span>
              </div>
              <div className={styles.detailBox}>
                <span>2016.03 ~ 2019.02</span>
                <span>한국폴리텍대학</span>
              </div>
              <div className={styles.detailBox}>
                <span>2016.03 ~ 2019.02</span>
                <span>sbs아카데미</span>
              </div>
            </div>
            <div className={styles.detailInfoBox}>
              <h3 className={styles.detailTitle}>경력사항</h3>
              <div className={styles.detailBox}>
                <span>2016.03 ~ 2019.02</span>
                <span>코멕스카본</span>
              </div>
            </div>
            <div className={styles.detailInfoBox}>
              <h3 className={styles.detailTitle}>자격사항 및 면허</h3>
              <div className={styles.detailBox}>
                <span>2016.03 ~ 2019.02</span>
                <span>밀링기능사</span>
              </div>
              <div className={styles.detailBox}>
                <span>2016.03 ~ 2019.02</span>
                <span>운전면허</span>
              </div>
            </div>
            <div className={styles.detailInfoBox}>
              <h3 className={styles.detailTitle}>활용프로그램 및 라이브러리</h3>
              <div className={styles.skillBox}>
                {skillIcons.map((_, index) => {
                  return (
                    <div key={index} className={styles.skillicon}>
                      {index}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.profileIntroduce}>
            <h3 className={styles.detailTitle}>자기소개</h3>
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
