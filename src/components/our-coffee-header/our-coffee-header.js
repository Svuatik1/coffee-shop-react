import logo from "../../img/Group.png";
import "./our-coffee-header.css";

import { Link } from "react-router-dom";

const OurCoffeeHeader = () => {
  return (
    <div className="our_coffee_header">
      <nav className="navigation">
        <img
          style={{ background: "none" }}
          className="logo"
          alt="logo"
          src={logo}
        ></img>
        <Link to="/">Coffee house</Link>
        <Link to="/our_coffee">Our coffee</Link>
        <Link to="/for_your_plesure">For your pleasure</Link>
      </nav>
      <h1 className="h1_our_coffe">Our Coffee</h1>
    </div>
  );
};

export default OurCoffeeHeader;
