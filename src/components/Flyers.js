import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import flyer1 from "../assets/images/flyer/1.jpg";
import flyer2 from "../assets/images/flyer/2.jpg";
import flyer3 from "../assets/images/flyer/3.jpg";
import flyer4 from "../assets/images/flyer/4.jpg";
import flyer5 from "../assets/images/flyer/5.jpg";
import flyer6 from "../assets/images/flyer/6.jpg";
import flyer7 from "../assets/images/flyer/7.jpg";
import flyer8 from "../assets/images/flyer/8.jpg";
import flyer9 from "../assets/images/flyer/9.jpg";
import flyer10 from "../assets/images/flyer/10.jpg";
import flyer11 from "../assets/images/flyer/11.jpg";
import flyer12 from "../assets/images/flyer/12.jpg";
import flyer13 from "../assets/images/flyer/13.jpg";
import flyer14 from "../assets/images/flyer/14.jpg";
import flyer15 from "../assets/images/flyer/15.jpg";
import flyer16 from "../assets/images/flyer/16.jpg";
import flyer17 from "../assets/images/flyer/17.jpg";
import flyer18 from "../assets/images/flyer/18.jpg";
import flyer19 from "../assets/images/flyer/19.jpg";
import flyer20 from "../assets/images/flyer/20.jpg";
// import flyer21 from "../assets/images/flyer/21.jpg";
import flyer22 from "../assets/images/flyer/22.jpg";
import flyer23 from "../assets/images/flyer/23.jpg";
import flyer24 from "../assets/images/flyer/24.jpg";
import flyer25 from "../assets/images/flyer/25.jpg";
import flyer26 from "../assets/images/flyer/26.jpg";
import flyer27 from "../assets/images/flyer/27.jpg";
import flyer28 from "../assets/images/flyer/28.jpg";
import flyer29 from "../assets/images/flyer/29.jpg";
import flyer30 from "../assets/images/flyer/30.jpg";
import flyer31 from "../assets/images/flyer/31.jpg";
import flyer32 from "../assets/images/flyer/32.jpg";
import flyer33 from "../assets/images/flyer/33.jpg";
import { useRef } from "react";

const Flyers = () => {
  const swiperRef = useRef();

  const flyers = [
    flyer1,
    flyer2,
    flyer3,
    flyer4,
    flyer5,
    flyer6,
    flyer7,
    flyer8,
    flyer9,
    flyer10,
    flyer11,
    flyer12,
    flyer13,
    flyer14,
    flyer15,
    flyer16,
    flyer17,
    flyer18,
    flyer19,
    flyer20,
    // flyer21,
    flyer22,
    flyer23,
    flyer24,
    flyer25,
    flyer26,
    flyer27,
    flyer28,
    flyer29,
    flyer30,
    flyer31,
    flyer32,
    flyer33,
  ];

  return (
    <section id="gallary" className="flyers">
      <div className="flyers__main">
        <Swiper
          // style={{ height: 800 }}
          // spaceBetween={20}
          //   navigation
          breakpoints={{
            900: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            500: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            300: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            // disableOnInteraction: false,
          }}
          // direction="vertical"
          modules={[Autoplay, Navigation, Pagination]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {flyers.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={item} alt="" className="flyers__main__img" />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="flyers__main__nav">
          <button
            className="left"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <i className="icon-arrow-left"></i>
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <i className="icon-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Flyers;
