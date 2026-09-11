import React from "react";
import { Typography, Box } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Wrapper>
      {/* About Section */}
      <motion.div
        className="about_text"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" className="title">
          About PrimeClean Services
        </Typography>

        <Typography variant="body1" className="text">
          PrimeClean Services is a professional cleaning company providing
          reliable and quality cleaning solutions in Islamabad and Rawalpindi.
          We specialize in home deep cleaning, sofa cleaning, carpet cleaning,
          mattress cleaning and water tank cleaning. Our goal is to make homes
          and properties cleaner, healthier and more comfortable through
          professional cleaning services and customer-focused solutions.
        </Typography>
      </motion.div>

      {/* Sections */}
      <Box className="choose_section">
        {/* Why Choose Us */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h5">Why Choose Us</Typography>

          <Typography>
            Professional cleaning services, responsive customer support and
            reliable cleaning solutions for homes and properties in Islamabad
            and Rawalpindi.
          </Typography>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h5">Our Mission</Typography>

          <Typography>
            Our mission is to provide high-quality home and property cleaning
            services that save our customers time and help them enjoy a cleaner
            and healthier environment.
          </Typography>
        </motion.div>

        {/* Our Values */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h5">Our Values</Typography>

          <Typography>
            Quality, professionalism, reliability, honesty and customer
            satisfaction are at the heart of every cleaning service we provide.
          </Typography>
        </motion.div>
      </Box>
    </Wrapper>
  );
};

export default About;

/* ================= STYLED ================= */

const Wrapper = styled.section`
  padding: 80px 20px;
  background: #f9fafb;
  color: #374151;

  .about_text {
    max-width: 850px;
    margin: auto;
    text-align: center;
  }

  .title {
    font-weight: 700;
    margin-bottom: 20px;
    color: #111827;
  }

  .text {
    font-size: 17px;
    line-height: 1.9;
    color: #6b7280;
  }

  .choose_section {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  .card {
    width: 320px;
    background: white;
    padding: 25px;
    border-radius: 18px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
    transition: 0.3s ease;
  }

  .card:hover {
    transform: translateY(-8px);
  }

  .card h5 {
    margin-bottom: 12px;
    color: #111827;
    font-weight: 600;
  }

  .card p {
    color: #6b7280;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
    }
  }
`;
