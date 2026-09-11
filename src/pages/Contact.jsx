import React from "react";
import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import AddIcCallSharpIcon from "@mui/icons-material/AddIcCallSharp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import { motion } from "framer-motion";

const Contact = () => {
  const phone = "03350566349";

  const whatsappLink = `https://wa.me/923350566349?text=${encodeURIComponent(
    "Hello PrimeClean Services, I would like to inquire about your cleaning services.",
  )}`;

  return (
    <Wrapper>
      {/* Heading */}
      <motion.div
        className="heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3">Contact PrimeClean Services</Typography>

        <Typography className="subtext">
          Contact us for professional home cleaning services in Islamabad and
          Rawalpindi. Get in touch with our team for service details and
          quotations.
        </Typography>
      </motion.div>

      {/* Contact Cards */}
      <Box className="contact">
        {/* CALL */}
        <motion.a
          href={`tel:${phone}`}
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Call PrimeClean Services"
        >
          <AddIcCallSharpIcon className="icon" />

          <Typography className="label">Call Now</Typography>

          <Typography className="value">{phone}</Typography>
        </motion.a>

        {/* WHATSAPP */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Contact PrimeClean Services on WhatsApp"
        >
          <WhatsAppIcon className="icon" />

          <Typography className="label">WhatsApp Us</Typography>

          <Typography className="value">
            Chat with PrimeClean Services
          </Typography>
        </motion.a>

        {/* SERVICE AREA */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <LocationOnSharpIcon className="icon" />

          <Typography className="label">Service Area</Typography>

          <Typography className="value">Islamabad & Rawalpindi</Typography>
        </motion.div>
      </Box>
    </Wrapper>
  );
};

export default Contact;

/* ================= STYLE ================= */

const Wrapper = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #f9fafb, #eef2f3);
  color: #374151;

  .heading {
    text-align: center;
    max-width: 750px;
    margin: auto;
  }

  h3 {
    font-weight: 700;
    color: #111827;
    margin-bottom: 10px;
  }

  .subtext {
    color: #6b7280;
    line-height: 1.8;
    font-size: 16px;
  }

  .contact {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .card {
    width: 320px;
    min-height: 170px;
    background: white;
    padding: 30px 20px;
    border-radius: 18px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    text-decoration: none;
    color: inherit;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    font-size: 45px;
    color: #25d366;
    margin-bottom: 15px;
  }

  .label {
    font-weight: 600;
    margin-bottom: 8px;
    color: #111827;
  }

  .value {
    color: #6b7280;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
      max-width: 400px;
    }
  }
`;
