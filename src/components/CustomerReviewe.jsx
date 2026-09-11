import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

/*
 * Add only genuine customer testimonials here.
 * Replace these placeholder examples with your actual
 * customer reviews when available.
 */
const reviews = [
  {
    id: 1,
    name: "Our Customer",
    review:
      "Professional cleaning service with a responsive team. The home deep cleaning service was completed carefully and professionally.",
  },
  {
    id: 2,
    name: "Our Customer",
    review:
      "Very satisfied with the sofa and carpet cleaning service. The team was professional, punctual and did a great job.",
  },
  {
    id: 3,
    name: "Our Customer",
    review:
      "Excellent water tank cleaning service. The team cleaned the tank properly and maintained professional service throughout.",
  },
  {
    id: 4,
    name: "Our Customer",
    review:
      "Good experience with PrimeClean Services. The team was cooperative and the cleaning work was completed professionally.",
  },
];

const ReviewSlider = () => {
  return (
    <Wrapper>
      {/* Testimonials Heading */}
      <motion.div
        className="heading"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" component="h2" className="mainHeading">
          Customer Reviews
        </Typography>

        <Typography className="subHeading">
          See what our customers say about PrimeClean Services and our
          professional cleaning services in Islamabad and Rawalpindi.
        </Typography>
      </motion.div>

      {/* Review Slider */}
      <Box
        className="reviewSlider"
        aria-label="PrimeClean Services customer reviews"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={review.id}>
              <motion.div
                className="reviewCard"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
              >
                {/* Review Icon */}
                <div className="quoteIcon" aria-hidden="true">
                  "
                </div>

                {/* Customer Name */}
                <Typography variant="h3" component="h3" className="reviewName">
                  {review.name}
                </Typography>

                {/* Review */}
                <Typography className="reviewText">{review.review}</Typography>

                {/* Rating */}
                <div className="rating" aria-label="Five star customer rating">
                  ★★★★★
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 90px 20px;

  background:
    linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url("https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=1400");

  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  .heading {
    text-align: center;
    max-width: 850px;
    margin: 0 auto 60px;
  }

  .mainHeading {
    color: white;
    font-weight: 700;
    margin-bottom: 16px;
    font-size: 38px;
  }

  .subHeading {
    color: #d1d5db;
    font-size: 17px;
    line-height: 1.7;
  }

  .reviewSlider {
    width: 92%;
    max-width: 1200px;
    margin: auto;
  }

  .reviewCard {
    background: rgba(255, 255, 255, 0.97);

    border-radius: 24px;

    padding: 35px 25px;

    text-align: center;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

    transition: 0.3s ease;

    min-height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .quoteIcon {
    width: 55px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #25d366;

    color: white;

    font-size: 35px;
    font-weight: 700;

    margin-bottom: 20px;
  }

  .reviewName {
    font-weight: 700;
    color: #111827;

    font-size: 20px;

    margin-bottom: 14px;
  }

  .reviewText {
    color: #4b5563;

    line-height: 1.8;

    font-size: 15px;

    max-width: 400px;
  }

  .rating {
    margin-top: 20px;

    color: #f59e0b;

    font-size: 20px;

    letter-spacing: 3px;
  }

  /* SWIPER */

  .swiper {
    padding-bottom: 60px;
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    background: #25d366;
    opacity: 1;
  }

  /* MOBILE */

  @media (max-width: 768px) {
    padding: 70px 15px;

    .mainHeading {
      font-size: 30px !important;
    }

    .subHeading {
      font-size: 15px;
    }

    .reviewSlider {
      width: 100%;
    }

    .reviewCard {
      padding: 30px 20px;
      min-height: 280px;
    }
  }
`;

export default ReviewSlider;
