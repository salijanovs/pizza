import "./Footer.css";
import logo from "../../imgs/navbar/navbar-logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-left_content">
            <img src={logo} alt="" className="footer-logo" />
            <ul className="socials">
              <li className="socials-item">YouTube</li>
              <li className="socials-item">Instagram</li>
              <li className="socials-item">Facebook</li>
              <li className="socials-item">ВКонтакте</li>
            </ul>
          </div>
          <div className="footer-right_content">
            <div className="phone">
              <h2 className="footer-phone_text">+998 93 496-49-66</h2>
              <p className="questions">
                Остались вопросы? А мы всегда на связи:
              </p>
              <p className="security">YaBao Все праав защищены © 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
