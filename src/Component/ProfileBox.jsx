import "./ProfileBox.css";
function ProfileBox({ title, children }) {
  return (
    <div>
      <div className="ProfileInfoBox">
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
}
export default ProfileBox;
