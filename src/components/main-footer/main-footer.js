import "./main-footer.css";
import logo from "../../img/Vector (2).png";
import logoOne from "../../img/VectorAboutUs.png";

const MainFooter = () => {
  return (
    <div className="main_footer">
      <nav className="navigation_footer">
        <img
          style={{ background: "none" }}
          className="logo_footer"
          alt="logo"
          src={logo}
        ></img>
        <a href="/">Coffee house</a>
        <a href="/">Our coffee</a>
        <a href="/">For your pleasure</a>
      </nav>
      <hr className="hr-footer-first"></hr>
      <img className="footer_logo" alt="footer-logo" src={logoOne}></img>
      <hr className="hr-footer-second"></hr>
    </div>
  );
};

export default MainFooter;
