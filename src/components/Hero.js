import hero from "../assets/image/hero2.png";
import logo from "../assets/image/svg/logo.svg";
import arrowRight from "../assets/image/svg/arrowRight.svg";
import arrowRightAlt from "../assets/image/svg/arrowRightAlt.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__top">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <Link to="/contact">
          <button className="btnMain">Contact support</button>
        </Link>
      </div>
      <div className="hero__info">
        <div className="hero__main">
          <h1>
            Pay Bills, <span>Recharge & buy data.</span>
          </h1>
          {/* <h1>Order Food</h1> */}
          <p>
            Make money transfers, enjoy cashless payment options and get cool
            loans with Zitch.
          </p>
          <div className="hero__main__btn">
            <button className="btnMain">
              Download app
              <img src={arrowRight} alt="" />
            </button>
            <Link to="/contact">
              <button
                className="btnMain alt"
                style={{ backgroundColor: "#fff" }}
              >
                Contact Support
                <img src={arrowRightAlt} alt="" />
              </button>
            </Link>
          </div>
        </div>
        <div className="hero__img">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
