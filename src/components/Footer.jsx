import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  "Home Deep Cleaning",
  "Sofa Cleaning",
  "Carpet Cleaning",
  "Mattress Cleaning",
  "Water Tank Cleaning",
];

const PHONE_NUMBER = "03350566349";
const INTERNATIONAL_PHONE = "923350566349";
const EMAIL = "primecleanservicees@gmail.com";

const Footer = () => {
  const year = new Date().getFullYear();

  const whatsappMessage =
    "Hello PrimeClean Services, I would like to inquire about your cleaning services.";

  const whatsappUrl = `https://wa.me/${INTERNATIONAL_PHONE}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <Wrapper>
      <Box component="footer" className="footerWrapper">
        <div className="footerContainer">
          {/* BRAND */}
          <div className="brandContainer">
            <Typography component="h2" className="brandName">
              PrimeClean Services
            </Typography>

            <Typography className="description">
              Professional cleaning services in Islamabad & Rawalpindi. We
              provide reliable cleaning solutions for homes and properties with
              a focus on quality and customer satisfaction.
            </Typography>

            <div className="serviceArea">
              <LocationOnIcon />
              <span>Islamabad & Rawalpindi</span>
            </div>
          </div>

          <Divider orientation="vertical" flexItem className="divider" />

          {/* QUICK LINKS */}
          <nav className="linksContainer" aria-label="Footer navigation">
            <Typography component="h2" className="footerHeading">
              Quick Links
            </Typography>

            {footerLinks.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          <Divider orientation="vertical" flexItem className="divider" />

          {/* SERVICES */}
          <div className="linksContainer">
            <Typography component="h2" className="footerHeading">
              Our Services
            </Typography>

            {services.map((service) => (
              <NavLink key={service} to="/services" state={{ service }}>
                {service}
              </NavLink>
            ))}
          </div>

          <Divider orientation="vertical" flexItem className="divider" />

          {/* CONTACT */}
          <div className="contactContainer">
            <Typography component="h2" className="footerHeading">
              Contact Us
            </Typography>

            {/* PHONE */}
            <a
              href={`tel:+${INTERNATIONAL_PHONE}`}
              className="footerContact"
              aria-label={`Call PrimeClean Services at ${PHONE_NUMBER}`}
            >
              <AddIcCallIcon />
              <span>{PHONE_NUMBER}</span>
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footerContact"
              aria-label="Contact PrimeClean Services on WhatsApp"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>

            {/* EMAIL */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footerContact"
              aria-label="Email PrimeClean Services"
            >
              <MailOutlineIcon />
              <span>{EMAIL}</span>
            </a>

            {/* SERVICE AREA */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=G-11+Islamabad"
              target="_blank"
              rel="noopener noreferrer"
              className="footerContact"
              aria-label="PrimeClean Services in G-11 Islamabad"
            >
              <LocationOnIcon />
              <span>G-11, Islamabad</span>
            </a>

            {/* SOCIAL MEDIA */}
            <div className="socialLinks">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footerContact"
                aria-label="PrimeClean Services on Facebook"
              >
                <FacebookIcon />
                <span>Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footerContact"
                aria-label="PrimeClean Services on Instagram"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <Divider className="bottomDivider" />

        {/* BOTTOM FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bottomFooter">
            <Typography className="copyright">
              © {year} PrimeClean Services. All Rights Reserved.
            </Typography>

            <Typography className="seoText">
              Professional Cleaning Services in Islamabad & Rawalpindi
            </Typography>
          </div>
        </motion.div>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .footerWrapper {
    background: #050505;
    color: #f3f4f6;
    width: 100%;
    padding: 55px 25px 20px;
  }

  .footerContainer {
    max-width: 1400px;
    margin: 0 auto;

    display: grid;
    grid-template-columns:
      minmax(220px, 1.3fr)
      auto
      minmax(150px, 0.8fr)
      auto
      minmax(190px, 1fr)
      auto
      minmax(240px, 1.2fr);

    gap: 30px;
    align-items: stretch;
  }

  /* BRAND */

  .brandContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 14px;
  }

  .brandName {
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
  }

  .description {
    color: #bfc3c9;
    font-size: 14px;
    line-height: 1.8;
    max-width: 320px;
  }

  .serviceArea {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #d1d5db;
    font-size: 14px;
  }

  .serviceArea svg {
    color: #25d366;
    font-size: 20px;
  }

  /* HEADINGS */

  .footerHeading {
    color: #ffffff;
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  /* LINKS */

  .linksContainer,
  .contactContainer {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .linksContainer a,
  .contactContainer a {
    color: #c7cbd1;
    text-decoration: none;
    font-size: 14px;
    line-height: 1.5;

    transition:
      color 0.25s ease,
      transform 0.25s ease;
  }

  .linksContainer a:hover {
    color: #25d366;
    transform: translateX(4px);
  }

  /* CONTACT */

  .footerContact {
    display: flex;
    align-items: center;
    gap: 9px;
  }

  .footerContact svg {
    font-size: 20px;
    flex-shrink: 0;
  }

  .footerContact:hover {
    color: #25d366 !important;
    transform: translateX(4px);
  }

  .socialLinks {
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin-top: 5px;
  }

  /* DIVIDERS */

  .divider {
    background: rgba(255, 255, 255, 0.12);
  }

  .bottomDivider {
    max-width: 1400px;
    margin: 45px auto 18px;
    background: rgba(255, 255, 255, 0.15);
  }

  /* BOTTOM */

  .bottomFooter {
    max-width: 1400px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  .copyright,
  .seoText {
    color: #8f949c;
    font-size: 13px;
    line-height: 1.5;
  }

  .seoText {
    text-align: right;
  }

  /* TABLET */

  @media (max-width: 1100px) {
    .footerContainer {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 30px;
    }

    .divider {
      display: none;
    }

    .brandContainer {
      grid-column: span 2;
    }
  }

  /* MOBILE */

  @media (max-width: 600px) {
    .footerWrapper {
      padding: 40px 20px 18px;
    }

    .footerContainer {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .brandContainer,
    .linksContainer,
    .contactContainer {
      width: 100%;
      max-width: 100%;
    }

    .brandName {
      font-size: 22px;
    }

    .description {
      max-width: 100%;
    }

    .bottomDivider {
      margin: 35px 0 18px;
    }

    .bottomFooter {
      flex-direction: column;
      text-align: center;
      gap: 7px;
    }

    .seoText {
      text-align: center;
    }
  }
`;

export default Footer;
