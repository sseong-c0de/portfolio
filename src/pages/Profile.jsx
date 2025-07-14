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
        <h2>01 About me</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.profileLeft}>
          <div className={styles.profilePicture}>
            <div className={styles.pictureBox}>사진 박스</div>
          </div>
        </div>
        <div className={styles.profileRight}>
          {/* <div className={styles.profileDetail}>
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
          </div> */}
          <div className={styles.profileIntroduce}>
            <div className={styles.infoTitle}>
              <p>안녕하세요!</p>
              <p>
                <span className={styles.titleColor}>사람과 화면 사이</span>를
                연결하는 퍼블리셔를 꿈꾸는 이재성입니다.
              </p>
            </div>
            <div className={styles.info}>
              <div className={styles.pBox}>
                <p>
                  제조업 현장에서 다양한 장비를 다루며 문제를 해결하고, 결과를
                  직접 확인하는 과정에서 큰 흥미를 느꼈고 그 경험은 결과물이
                  직접적으로 보이는 웹 개발쪽으로 자연스럽게 이어졌습니다.
                </p>
                <p>
                  처음 코딩을 접하면서 웹을 만들며 내가 작성한 코드가 동작하는
                  사이트를 보고 느낀 기쁨과 재미를 잊지 않고 있습니다. 그
                  순간들이 저에게 큰 동기부여가 되었고, 단순히 동작하는 코드가
                  아닌 가독성이 좋고 유지보수에 좋고 효율적인 코드를 작성하는
                  개발자가 되고 싶다는 목표를 가지게 되었습니다.
                </p>
                <p>
                  끈임없이 배우고 성장하며, 완성도가 높은 코드를 작성하는
                  개발자가 되기 위해 노력하고 있습니다.
                </p>
                <p>시간내어 읽어주셔서 감사합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Profile;
