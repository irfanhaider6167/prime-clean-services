import React, { useRef } from "react";
import { IconButton, Typography } from "@mui/material";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  CheckCircle,
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import styled from "styled-components";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "923350566349";

const slides = [
  {
    image: "/images/home-deep-cleaning.webp",
    service: "Home Deep Cleaning",
    title: "Professional Cleaning Services in Islamabad & Rawalpindi",
    description:
      "Give your home a fresh, spotless and comfortable look with professional deep cleaning services.",
  },
  {
    image: "/images/sofa-cleaning.webp",
    service: "Sofa Cleaning",
    title: "Deep Sofa Cleaning for a Fresh & Clean Home",
    description:
      "Remove dust, dirt and stains with professional sofa cleaning for a cleaner living space.",
  },
  {
    image: "/images/carpet-cleaning.webp",
    service: "Carpet Cleaning",
    title: "Professional Carpet Cleaning Services",
    description:
      "Deep cleaning solutions to remove accumulated dust, dirt and stains from your carpets.",
  },
  {
    image: "/images/mattress-cleaning.webp",
    service: "Mattress Cleaning",
    title: "Deep Mattress Cleaning for a Fresher Home",
    description:
      "Professional mattress cleaning to help keep your sleeping environment fresh and clean.",
  },
  {
    image: "/images/water-tank-cleaning.webp",
    service: "Water Tank Cleaning",
    title: "Professional Water Tank Cleaning Services",
    description:
      "Thorough cleaning for underground and overhead water tanks in Islamabad and Rawalpindi.",
  },
];

const Slider = () => {
  const swiperRef = useRef(null);

  const whatsappMessage =
    "Hello PrimeClean Services, I would like to get a quotation for your cleaning services.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <Wrapper>
      <section
        className="hero"
        aria-label="PrimeClean Services professional cleaning services"
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          slidesPerView={1}
          loop
          speed={1100}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".customPagination",
          }}
          allowTouchMove
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.service}>
              <div className="heroSlide">
                <motion.img
                  src={slide.image}
                  alt={`${slide.service} - PrimeClean Services`}
                  className="heroImage"
                  loading={index === 0 ? "eager" : "lazy"}
                  initial={{ scale: 1.12 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 6,
                    ease: "easeOut",
                  }}
                />

                <div className="heroOverlay" />

                <div className="heroContentWrapper">
                  <motion.div
                    className="heroContent"
                    initial={{
                      opacity: 0,
                      x: -50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut",
                    }}
                  >
                    <div className="topBadge">
                      <CheckCircle />
                      <span>Professional Cleaning Services</span>
                    </div>

                    <Typography
                      component={index === 0 ? "h1" : "h2"}
                      className="heroTitle"
                    >
                      {slide.title}
                    </Typography>

                    <Typography className="heroDescription">
                      {slide.description}
                    </Typography>

                    <div className="serviceBadge">{slide.service}</div>

                    <div className="locationText">
                      <span className="locationDot" />
                      Serving Islamabad &amp; Rawalpindi
                    </div>

                    <div className="heroButtons">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primaryButton"
                      >
                        Get a Free Quote
                      </a>

                      <NavLink to="/services" className="secondaryButton">
                        Explore Services
                      </NavLink>
                    </div>
                  </motion.div>
                </div>

                <div className="slideNumber">
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <div className="numberLine" />

                  <span>{String(slides.length).padStart(2, "0")}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="navigationButtons">
          <IconButton
            className="navigationButton"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <ArrowBackIosNew />
          </IconButton>

          <IconButton
            className="navigationButton"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            <ArrowForwardIos />
          </IconButton>
        </div>

        <div className="customPagination" />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;

  .hero {
    position: relative;
    width: 100%;
    overflow: hidden;
    background: #071426;
  }

  .heroSlide {
    position: relative;
    width: 100%;
    height: 78vh;
    min-height: 570px;
    max-height: 780px;
    overflow: hidden;
  }

  .heroImage {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .heroOverlay {
    position: absolute;
    inset: 0;
    z-index: 1;

    background:
      linear-gradient(
        90deg,
        rgba(3, 13, 27, 0.9) 0%,
        rgba(3, 13, 27, 0.72) 38%,
        rgba(3, 13, 27, 0.4) 72%,
        rgba(3, 13, 27, 0.2) 100%
      ),
      linear-gradient(
        180deg,
        rgba(3, 13, 27, 0.1) 0%,
        rgba(3, 13, 27, 0.45) 100%
      );
  }

  .heroContentWrapper {
    position: relative;
    z-index: 3;

    width: 100%;
    max-width: 1280px;
    height: 100%;

    margin: 0 auto;
    padding: 40px 90px;

    display: flex;
    align-items: center;
  }

  .heroContent {
    width: 100%;
    max-width: 850px;
  }

  .topBadge {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 8px 14px;
    margin-bottom: 20px;

    color: #ffffff;
    background: rgba(37, 211, 102, 0.12);

    border: 1px solid rgba(37, 211, 102, 0.35);
    border-radius: 50px;

    backdrop-filter: blur(8px);
  }

  .topBadge svg {
    color: #25d366;
    font-size: 18px;
  }

  .topBadge span {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .heroTitle {
    max-width: 850px;

    margin: 0 0 20px !important;

    color: #ffffff !important;

    font-size: clamp(2.4rem, 5vw, 4.6rem) !important;
    font-weight: 800 !important;
    line-height: 1.08 !important;

    letter-spacing: -1px;

    text-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
  }

  .heroDescription {
    max-width: 650px;

    margin-bottom: 20px !important;

    color: rgba(255, 255, 255, 0.88) !important;

    font-size: 17px !important;
    line-height: 1.7 !important;
  }

  .serviceBadge {
    display: inline-flex;

    padding: 9px 18px;
    margin-bottom: 12px;

    color: #ffffff;
    background: rgba(7, 20, 38, 0.82);

    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 50px;

    font-size: 12px;
    font-weight: 700;

    letter-spacing: 1.2px;
    text-transform: uppercase;

    backdrop-filter: blur(8px);
  }

  .locationText {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 25px;

    color: rgba(255, 255, 255, 0.8);

    font-size: 14px;
    font-weight: 500;
  }

  .locationDot {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #25d366;

    box-shadow: 0 0 0 5px rgba(37, 211, 102, 0.12);
  }

  .heroButtons {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .primaryButton,
  .secondaryButton {
    min-width: 160px;

    padding: 14px 22px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: 7px;

    text-decoration: none;

    font-size: 14px;
    font-weight: 700;

    transition:
      transform 0.25s ease,
      background 0.25s ease,
      box-shadow 0.25s ease;
  }

  .primaryButton {
    color: #ffffff !important;
    background: #25d366;

    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.18);
  }

  .primaryButton:hover {
    color: #ffffff !important;
    background: #1ebe5d;

    transform: translateY(-3px);

    box-shadow: 0 12px 30px rgba(37, 211, 102, 0.3);
  }

  .secondaryButton {
    color: #ffffff !important;

    background: rgba(255, 255, 255, 0.1);

    border: 1px solid rgba(255, 255, 255, 0.5);

    backdrop-filter: blur(8px);
  }

  .secondaryButton:hover {
    color: #071426 !important;
    background: #ffffff;

    transform: translateY(-3px);
  }

  .navigationButtons {
    position: absolute;

    right: 55px;
    bottom: 55px;

    z-index: 10;

    display: flex;
    gap: 8px;
  }

  .navigationButton {
    width: 45px !important;
    height: 45px !important;

    color: #ffffff !important;

    background: rgba(255, 255, 255, 0.12) !important;

    border: 1px solid rgba(255, 255, 255, 0.3) !important;

    backdrop-filter: blur(8px);

    transition:
      background 0.25s ease,
      transform 0.25s ease !important;
  }

  .navigationButton svg {
    font-size: 17px;
  }

  .navigationButton:hover {
    color: #ffffff !important;

    background: #25d366 !important;

    transform: translateY(-2px);
  }

  .slideNumber {
    position: absolute;

    right: 58px;
    top: 50%;

    z-index: 5;

    transform: translateY(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    color: rgba(255, 255, 255, 0.7);

    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .slideNumber span:first-child {
    color: #25d366;
    font-size: 15px;
  }

  .numberLine {
    width: 1px;
    height: 55px;

    background: rgba(255, 255, 255, 0.3);
  }

  .customPagination {
    position: absolute;

    left: 90px !important;
    bottom: 28px !important;

    z-index: 10;

    width: auto !important;

    display: flex;
    gap: 7px;
  }

  .customPagination .swiper-pagination-bullet {
    width: 24px;
    height: 3px;

    margin: 0 !important;

    border-radius: 5px;

    opacity: 0.45;

    background: #ffffff;

    transition:
      width 0.3s ease,
      opacity 0.3s ease,
      background 0.3s ease;
  }

  .customPagination .swiper-pagination-bullet-active {
    width: 45px;

    opacity: 1;

    background: #25d366;
  }

  @media (max-width: 1000px) {
    .heroContentWrapper {
      padding: 40px 65px;
    }

    .slideNumber {
      right: 30px;
    }

    .navigationButtons {
      right: 30px;
      bottom: 45px;
    }

    .customPagination {
      left: 65px !important;
    }
  }

  @media (max-width: 768px) {
    .heroSlide {
      height: 72vh;
      min-height: 560px;
      max-height: 700px;
    }

    .heroOverlay {
      background: linear-gradient(
        180deg,
        rgba(3, 13, 27, 0.38) 0%,
        rgba(3, 13, 27, 0.78) 65%,
        rgba(3, 13, 27, 0.94) 100%
      );
    }

    .heroContentWrapper {
      align-items: flex-end;

      padding: 40px 45px 105px;
    }

    .heroContent {
      max-width: 650px;
      text-align: center;
    }

    .topBadge {
      margin-bottom: 14px;
      padding: 7px 11px;
    }

    .topBadge span {
      font-size: 10px;
    }

    .topBadge svg {
      font-size: 15px;
    }

    .heroTitle {
      font-size: 2.25rem !important;
      line-height: 1.18 !important;
      letter-spacing: -0.4px;
      margin-bottom: 14px !important;
    }

    .heroDescription {
      font-size: 13px !important;
      line-height: 1.55 !important;
      margin-bottom: 15px !important;
    }

    .serviceBadge {
      padding: 8px 14px;
      font-size: 10px;
    }

    .locationText {
      justify-content: center;
      font-size: 12px;
      margin-bottom: 17px;
    }

    .heroButtons {
      justify-content: center;
    }

    .primaryButton,
    .secondaryButton {
      min-width: 135px;
      padding: 12px 15px;
      font-size: 12px;
    }

    .slideNumber {
      display: none;
    }

    .navigationButtons {
      right: 15px;
      bottom: 27px;
    }

    .navigationButton {
      width: 37px !important;
      height: 37px !important;
    }

    .navigationButton svg {
      font-size: 14px;
    }

    .customPagination {
      left: 20px !important;
      bottom: 43px !important;
    }

    .customPagination .swiper-pagination-bullet {
      width: 15px;
    }

    .customPagination .swiper-pagination-bullet-active {
      width: 28px;
    }
  }

  @media (max-width: 480px) {
    .heroSlide {
      height: 78vh;
      min-height: 570px;
    }

    .heroContentWrapper {
      padding: 30px 32px 100px;
    }

    .topBadge {
      margin-bottom: 12px;
    }

    .topBadge span {
      font-size: 9px;
    }

    .heroTitle {
      font-size: 1.75rem !important;
      line-height: 1.22 !important;
    }

    .heroDescription {
      font-size: 12px !important;
      max-width: 330px;
      margin-left: auto !important;
      margin-right: auto !important;
    }

    .serviceBadge {
      font-size: 9px;
      padding: 7px 12px;
    }

    .locationText {
      font-size: 11px;
    }

    .heroButtons {
      width: 100%;
      flex-direction: column;
      gap: 8px;
    }

    .primaryButton,
    .secondaryButton {
      width: 100%;
      max-width: 230px;
    }

    .navigationButtons {
      right: 12px;
      bottom: 25px;
    }

    .customPagination {
      left: 15px !important;
      bottom: 40px !important;
    }
  }
`;

export default Slider;
