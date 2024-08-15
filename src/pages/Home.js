import { useEffect } from "react";
import Hero from "../components/Hero";
import trust1 from "../assets/image/svg/trust1.svg";
import trust2 from "../assets/image/svg/trust2.svg";
import trust3 from "../assets/image/svg/trust3.svg";
import trust4 from "../assets/image/svg/trust4.svg";
// import offer1 from "../assets/image/svg/offer1.svg";
// import offer2 from "../assets/image/svg/offer2.svg";
// import offer3 from "../assets/image/svg/offer3.svg";
import offer4 from "../assets/image/svg/offer4.svg";
import check from "../assets/image/svg/check.svg";
import apple from "../assets/image/svg/apple.svg";
import playStore from "../assets/image/svg/playStore.svg";
import transfer from "../assets/image/svg/transfer.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const logos = [trust1, trust2, trust3, trust4];

  const offers = [
    // {
    //   img: offer1,
    //   title: "Make transfers, pay bills",
    //   desc: "Add money to your wallet and transfer to other bank accounts for free. Enjoy bonuses on airtime & data top-ups and fast bill payments at no extra charge.",
    // },
    // {
    //   img: offer2,
    //   title: "Zitch Loans",
    //   desc: "We’ve set our interest rates carefully to support your financial wellbeing and make repayment convenient.",
    // },
    // {
    //   img: offer3,
    //   title: "Payment-oriented platforms",
    //   desc: "Give your customers the payment experience they deserve by integrating Zitch seamless and secure gateway.",
    // },
    {
      img: offer4,
      title: "Pay Utilities in a Blink",
      desc: "Skip the hassle of long lines and late fees. Manage your water, electricity, internet, and more – all from the comfort of your phone.",
    },
  ];

  const testimonials = [
    {
      text: "“Zitch is the best payment platform i’ve used so far. The UI on dashboard is so easy to use and understand.”",
      name: "Benard Akinbola",
    },
    {
      text: "“This app is by far the best; it is fast, easy to use and reliable.”",
      name: "Jame Ade",
    },
    {
      text: "““Zitch is awesome!!!. If you are looking for where to get the best services, buy cheap data,airtime, TV subscription, speed and accuracy, look no further.”",
      name: "Yusuf Ibrahim",
    },
  ];
  return (
    <div className="home">
      <Hero />

      <div className="home__trusted">
        <h3>Trusted By</h3>

        <ul className="home__trusted__list">
          {logos?.map((logo, i) => {
            return (
              <li key={i}>
                <img src={logo} alt="" />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="home__safe">
        <h3>
          Safe transactions with <span>Zitch.</span>{" "}
        </h3>
        <h4>Here are the interesting features on the Zitch App.</h4>

        <div className="home__safe__btn">
          <div className="home__safe__btn__item active">Buy Data</div>
          {/* <div className="home__safe__btn__item ">Loan & Savings</div> */}
          <div className="home__safe__btn__item ">Recharge Airtime</div>
        </div>

        <div className="home__safe__main">
          <div className="home__safe__main__left">
            <h4>Pay bills, recharge & buy data from anywhere.</h4>
            <ul className="home__safe__main__left__list">
              <li>
                <img src={check} alt="" /> Download App
              </li>
              <li>
                <img src={check} alt="" /> Create an Account & Complete KYC
              </li>
              <li>
                <img src={check} alt="" /> Make swift payment
              </li>
            </ul>

            <div className="home__safe__main__left__btn">
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
          </div>

          <div className="home__safe__main__right">
            <img src={transfer} alt="" />
          </div>
        </div>
      </div>

      <div className="home__offer">
        <h4>
          Use <span>with</span> Zitch.
        </h4>
        <h3>What we offer at zitch.</h3>

        <div className="home__offer__list">
          {offers.map((offer) => {
            return (
              <div className="home__offer__list__item" key={offer.title}>
                <img src={offer.img} alt="" />
                <h5>{offer.title}</h5>
                <p>{offer.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="home__testimonial">
        <h3>Our testimonials</h3>
        <div className="home__testimonial__list">
          <Swiper
            // style={{ height: 800 }}
            // spaceBetween={20}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              900: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              500: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              400: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              300: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
            }}
            sl
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              reverseDirection: true,
            }}
            // direction="vertical"
            modules={[Autoplay]}
          >
            {testimonials.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="home__testimonial__list__item">
                    <div></div>
                    <p>{item.text}</p>
                    <span>{item.name}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
