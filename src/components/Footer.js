import logo from "../assets/image/svg/logoAlt.svg";
import flag from "../assets/image/svg/flag.svg";
import apple from "../assets/image/svg/apple.svg";
import playStore from "../assets/image/svg/playStore.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = ({ alt }) => {
  const linksSocial = [
    { name: "Twitter", url: "" },
    { name: "Instagram", url: "" },
    { name: "Facebook", url: "" },
    { name: "Linkedin", url: "" },
  ];

  const { pathname } = useLocation();

  return (
    <div className="footer">
      {pathname === "/contact" ? (
        <div className="footer__contact">
          <h2>Looking to Give a Feedback??</h2>

          <div className="footer__contact__form">
            <div className="footer__contact__form__top">
              <input type="text" placeholder="Enter Name" />
              <input type="text" placeholder="Enter Email" />
            </div>

            <textarea
              name=""
              id=""
              placeholder="Your Message"
              rows={10}
            ></textarea>

            <button className="btnMain" style={{ width: "100%", height: 60 }}>
              Send message
            </button>
          </div>
        </div>
      ) : (
        <div className="footer__top">
          <h2>
            Ready to Grow All Your <br /> Finances in One Solution?
          </h2>
          <p className="footer__top__disc">
            Access high-quality financial data and start processing payments
            directly from bank accounts in minutes.
          </p>

          <div className="footer__top__btn">
            <button className="btnMain">
              <img src={apple} alt="" />
              <div>
                <span>Download Now</span>
                <p>Apple Store</p>
              </div>
            </button>
            <button className="btnMain alt">
              <img src={playStore} alt="" />
              <div>
                <span>Download Now</span>
                <p>Google Store</p>
              </div>
            </button>
          </div>

          <div className="footer__top__social">
            {linksSocial?.map((link) => {
              return (
                <a key={link.name} href={link.url}>
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
      <div className="footer__links">
        <div className="footer__main">
          <div className="footer__main__logo">
            <img src={logo} style={{ marginBottom: 20 }} alt="logo" />
            <p>
              <img src={flag} alt="" />
              Nigeria
            </p>
          </div>
          <div className="footer__main__item">
            <h4>Support</h4>
            <div className="footer__main__item__info">Help Center</div>
            <div className="footer__main__item__info">Live Chat</div>
          </div>

          <div className="footer__main__item">
            <h4>Contact</h4>
            <div className="footer__main__item__info">
              <a href="malto:support@zitch.com">info@zitch.ng</a>
            </div>
            <div className="footer__main__item__info">
              41, Awoniyi Elemo Street, <br />
              Ajao Estate, Lagos State.
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div>© 2023 Zitch. All right reserved.</div>
          <div className="footer__bottom__links">
            <span>Privacy Policy</span>
            <Link to="/terms">
              <span>Terms of Use</span>
            </Link>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
