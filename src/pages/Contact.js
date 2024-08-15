import hero from "../assets/image/hero2.png";
import logo from "../assets/image/svg/logo.svg";
import con1 from "../assets/image/svg/con1.svg";
import con2 from "../assets/image/svg/con2.svg";
import con3 from "../assets/image/svg/con3.svg";
import Map from "../components/Map";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <section id="home" className="hero">
        <div className="hero__top">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="hero__info">
          <div className="hero__main">
            <h1>Looking to send us a message at Zitch?</h1>
            {/* <h1>Order Food</h1> */}
            <p>Enjoy cashless payment options and get cool loans with Zitch.</p>
          </div>
          <div className="hero__img">
            <img src={hero} alt="" />
          </div>
        </div>
      </section>

      <div className="contact__main">
        <div className="contact__main__left">
          <h2>Get in touch with us</h2>
          <p className="contact__main__left__disc">
            Our user-friendly interface and intuitive features make managing
            your finances a breeze, so you can focus on the things that matter
            most.
          </p>
          <div className="contact__main__left__info">
            <div className="contact__main__left__info__item">
              <img src={con1} alt="" />
              <div className="contact__main__left__info__item__right">
                <h5>Have any question?</h5>
                <p>08166938327</p>
              </div>
            </div>
            <div className="contact__main__left__info__item">
              <img src={con2} alt="" />
              <div className="contact__main__left__info__item__right">
                <h5>Write email</h5>
                <p>info@zitch.ng</p>
              </div>
            </div>
            <div className="contact__main__left__info__item">
              <img src={con3} alt="" />
              <div className="contact__main__left__info__item__right">
                <h5>Visit anytime</h5>
                <p>41, Awoniyi Elemo Street Ajao Estate, Lagos State.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__main__right">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
