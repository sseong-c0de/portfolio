import "./Contact.css";
function Contact() {
  return (
    <section className="contactSection">
      <div className="sectionTitle">
        <h2>03 컨택트</h2>
      </div>
      <div className="contactContainer">
        <div className="contactContents">
          <div className="contactThank">
            <p>저의 포트폴리오를 끝까지 봐주셔서 감사합니다</p>
          </div>
          <div className="contactClosing">
            <p>
              더 나은 웹 개발자로 성장하기 위해 끊임없이 배우고, 새로운
              기술을익히며 발전해 나가고 있습니다. 앞으로도 완성도가 높은 개발을
              위해 노력하겠습니다.
            </p>
          </div>
        </div>
        <div className="contactEmail">
          <p>이메일 & 연락처</p>
          <div className="emailPhone">
            <div className="email">
              <p>이메일: jsjssj@jsjsjss</p>
            </div>
            <div className="phone">
              <p>연락처: 01000000000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
