import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";

import styles from "./Profile.module.css";
function Profile() {
  const skillIcons = [
    <FaHtml5 color="#E34F26" />,
    <FaCss3Alt color="#1572B6" />,
    <FaJs color="#F7DF1E" />,
    <FaReact color="#61DAFB" />,
    <FaFigma color="#A259FF" />,
    <FaGitAlt color="#F05032" />,
  ];

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
            <p>전화번호:010 9400 5475</p>
            <p>이메일:sseong5129@naver.com </p>
          </div>
        </div>
        <div className={styles.profileRight}>
          <div className={styles.profileDetail}>
            <div className={styles.detailInfoBox}>
              <h3 className={styles.detailTitle}>학력사항</h3>
              <div className={styles.detailBox}>
                <span>두원공업고등학교</span>
                <span>2016.03 ~ 2019.01</span>
              </div>
              <div className={styles.detailBox}>
                <span>한국폴리텍대학</span>
                <span>2021.03 ~ 2023.02</span>
              </div>
              <div className={styles.detailBox}>
                <span>sbs아카데미학원(강남)</span>
                <span>2023.12 ~ 2024.11</span>
              </div>
            </div>
            <div className={styles.detailInfoBox}>
              <h3 className={styles.detailTitle}>경력사항</h3>
              <div className={styles.detailBox}>
                <span>(주)코다코(안성공장)</span>
                <span>2017.04 ~ 2018.12</span>
              </div>
              <div className={styles.detailBox}>
                <span>(주)코멕스카본</span>
                <span>2019.07 ~ 2023.11</span>
              </div>
            </div>
            <div className={styles.detailInfoBox}>
              <h3 className={styles.detailTitle}>자격사항 및 면허</h3>
              <div className={styles.detailBox}>
                <span>컴퓨터응용밀링기능사</span>
                <span>2018.07</span>
              </div>
            </div>
            <div className={styles.detailInfoBox}>
              <h3 className={styles.detailTitle}>사용기술 스택</h3>
              <div className={styles.skillBox}>
                {skillIcons.map((Icon, index) => {
                  return (
                    <div key={index} className={styles.skillicon}>
                      {Icon}
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
