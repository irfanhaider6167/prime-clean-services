import React, { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const WHATSAPP_NUMBER = "923350566349";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const whatsappMessage =
    "Hello PrimeClean Services, I would like to inquire about your cleaning services.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const navLinkClass = ({ isActive }) =>
    isActive ? "navLink active" : "navLink";

  return (
    <Wrapper>
      {/* =========================
          DESKTOP / MAIN HEADER
      ========================= */}

      <AppBar
        component="header"
        position="fixed"
        elevation={0}
        className="appBar"
      >
        <Toolbar className="toolbar">
          {/* LOGO */}
          <NavLink
            to="/"
            className="logoLink"
            aria-label="PrimeClean Services Home"
          >
            {/* <img
              src="/images/logo2.jpg"
              alt="PrimeClean Services logo"
              className="logo"
            /> */}

            <Box className="brandLogo">
              <Typography className="brandName">PrimeClean</Typography>

              <Typography className="brandSubtext">Services</Typography>
            </Box>
          </NavLink>

          {/* DESKTOP MENU */}
          <Box
            component="nav"
            className="desktopMenu"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkClass}
                end={item.path === "/"}
              >
                {item.name}
              </NavLink>
            ))}
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            className="mobileMenuButton"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* =========================
          CUSTOM MOBILE MENU
      ========================= */}

      <div
        className={`mobileMenuOverlay ${menuOpen ? "overlayVisible" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <aside
        className={`mobileMenu ${menuOpen ? "mobileMenuOpen" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {/* MOBILE MENU HEADER */}
        <div className="mobileMenuHeader">
          <Typography className="mobileBrand">PrimeClean Services</Typography>

          <IconButton
            className="closeMenuButton"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </div>

        {/* MOBILE LINKS */}
        <nav className="mobileLinks">
          {navItems.map((item, index) => (
            <React.Fragment key={item.path}>
              <NavLink
                to={item.path}
                className={navLinkClass}
                onClick={closeMenu}
                end={item.path === "/"}
              >
                <span className="mobileLinkText">{item.name}</span>

                <span className="mobileArrow">›</span>
              </NavLink>

              {index < navItems.length - 1 && <div className="mobileLine" />}
            </React.Fragment>
          ))}
        </nav>

        {/* MOBILE WHATSAPP */}
        <div className="mobileCta">
          <Typography className="mobileCtaTitle">
            Need a Cleaning Service?
          </Typography>

          <Typography className="mobileCtaText">
            Get a quick quotation from PrimeClean Services.
          </Typography>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobileWhatsapp"
            onClick={closeMenu}
          >
            <WhatsAppIcon />
            <span>Get a Quote on WhatsApp</span>
          </a>
        </div>

        {/* MOBILE FOOTER */}
        <div className="mobileFooter">
          <Typography className="footerTitle">
            Professional Cleaning Services
          </Typography>

          <Typography className="footerArea">
            Islamabad &amp; Rawalpindi
          </Typography>
        </div>
      </aside>

      {/* FIXED HEADER SPACE */}
      <Toolbar className="headerSpacer" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* =====================================
     MAIN HEADER
  ===================================== */

  .appBar {
    background: #071426 !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .toolbar {
    min-height: 82px;
    padding: 0 35px;
  }

  /* =====================================
     LOGO
  ===================================== */

  .logoLink {
    display: flex;
    align-items: center;
    gap: 10px;

    margin-right: auto;

    text-decoration: none;
  }

  .brandLogo {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1;
    cursor: pointer;
    text-decoration: none;
  }

  .brandName {
    font-family: "Montserrat", "Arial", sans-serif !important;
    font-size: 1.65rem !important;
    font-weight: 800 !important;
    letter-spacing: -0.8px !important;
    line-height: 1 !important;
    color: #12355b !important;
    margin: 0 !important;
  }

  .brandSubtext {
    font-family: "Montserrat", "Arial", sans-serif !important;
    font-size: 0.62rem !important;
    font-weight: 700 !important;
    letter-spacing: 4px !important;
    text-transform: uppercase;
    color: #35a853 !important;
    margin: 5px 0 0 2px !important;
    line-height: 1 !important;
  }

  .brandText {
    display: flex;
    flex-direction: column;
    line-height: 1;
  }

  .brandName {
    color: #ffffff !important;

    font-size: 21px !important;
    font-weight: 700 !important;

    line-height: 1.1;
  }

  .brandSubtext {
    margin-top: 3px !important;

    color: #25d366 !important;

    font-size: 13px !important;
    font-weight: 600 !important;

    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  /* =====================================
     DESKTOP MENU
  ===================================== */

  .desktopMenu {
    display: flex;
    align-items: center;
    gap: 27px;
  }

  .desktopMenu .navLink {
    position: relative;

    padding: 31px 0;

    color: #ffffff !important;
    text-decoration: none;

    font-size: 15px;
    font-weight: 500;

    white-space: nowrap;

    transition: color 0.25s ease;
  }

  .desktopMenu .navLink::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: 22px;

    width: 0;
    height: 2px;

    background: #25d366;

    border-radius: 5px;

    transition: width 0.25s ease;
  }

  .desktopMenu .navLink:hover {
    color: #25d366 !important;
  }

  .desktopMenu .navLink:hover::after,
  .desktopMenu .navLink.active::after {
    width: 100%;
  }

  .desktopMenu .navLink.active {
    color: #25d366 !important;
  }

  /* =====================================
     DESKTOP WHATSAPP
  ===================================== */

  .desktopWhatsapp {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    padding: 11px 17px;

    color: #ffffff !important;
    background: #25d366;

    border-radius: 7px;

    text-decoration: none;

    font-size: 14px;
    font-weight: 600;

    white-space: nowrap;

    transition:
      background 0.25s ease,
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .desktopWhatsapp svg {
    font-size: 20px;
  }

  .desktopWhatsapp:hover {
    color: #ffffff !important;
    background: #1ebe5d;

    transform: translateY(-2px);

    box-shadow: 0 6px 18px rgba(37, 211, 102, 0.25);
  }

  /* =====================================
     MOBILE MENU BUTTON
  ===================================== */

  .mobileMenuButton {
    display: none;

    padding: 8px !important;

    color: #ffffff !important;

    border-radius: 8px !important;
  }

  .mobileMenuButton svg {
    font-size: 32px;
  }

  .mobileMenuButton:hover {
    background: rgba(37, 211, 102, 0.08) !important;
  }

  /* =====================================
     MOBILE OVERLAY
  ===================================== */

  .mobileMenuOverlay {
    position: fixed;

    inset: 0;

    z-index: 1300;

    background: rgba(0, 0, 0, 0.55);

    opacity: 0;
    visibility: hidden;

    transition:
      opacity 0.3s ease,
      visibility 0.3s ease;
  }

  .mobileMenuOverlay.overlayVisible {
    opacity: 1;
    visibility: visible;
  }

  /* =====================================
     CUSTOM MOBILE MENU
  ===================================== */

  .mobileMenu {
    position: fixed;

    top: 0;
    right: 0;

    z-index: 1400;

    width: 100%;
    max-width: 390px;
    height: 100vh;

    display: flex;
    flex-direction: column;

    background: #071426;

    transform: translateX(100%);

    box-shadow: -10px 0 35px rgba(0, 0, 0, 0.25);

    transition: transform 0.35s ease;

    overflow-y: auto;
  }

  .mobileMenu.mobileMenuOpen {
    transform: translateX(0);
  }

  /* =====================================
     MOBILE MENU HEADER
  ===================================== */

  .mobileMenuHeader {
    position: relative;

    min-height: 74px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 15px 55px 15px 20px;

    background: #050f1d;

    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    text-align: center;
  }

  .mobileBrand {
    color: #ffffff !important;

    font-size: 20px !important;
    font-weight: 700 !important;

    text-align: center;
  }

  /* =====================================
     CLOSE BUTTON
  ===================================== */

  .closeMenuButton {
    position: absolute !important;

    top: 14px;
    right: 12px;

    padding: 5px !important;

    color: #ffffff !important;
  }

  .closeMenuButton svg {
    font-size: 30px;
  }

  .closeMenuButton:hover {
    color: #ffffff !important;

    background: rgba(255, 255, 255, 0.07) !important;
  }

  /* =====================================
     MOBILE LINKS
  ===================================== */

  .mobileLinks {
    display: flex;
    flex-direction: column;

    padding: 10px 16px;

    text-align: center;
  }

  .mobileLinks .navLink {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 52px;

    padding: 14px 40px;

    color: #ffffff !important;

    text-decoration: none;

    font-size: 17px;
    font-weight: 500;

    border-radius: 7px;

    transition:
      background 0.25s ease,
      transform 0.2s ease;
  }

  /* FORCE WHITE TEXT */
  .mobileLinks .navLink,
  .mobileLinks .navLink span,
  .mobileLinks .navLink .mobileLinkText,
  .mobileLinks .navLink.active,
  .mobileLinks .navLink.active span,
  .mobileLinks .navLink.active .mobileLinkText {
    color: #ffffff !important;
  }

  .mobileLinks .navLink:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  .mobileLinks .navLink:active {
    transform: scale(0.98);
  }

  .mobileLinks .navLink.active {
    background: rgba(37, 211, 102, 0.08);
  }

  /* ACTIVE LINE */
  .mobileLinks .navLink.active::before {
    content: "";

    position: absolute;

    left: 50%;
    bottom: 5px;

    width: 28px;
    height: 2px;

    transform: translateX(-50%);

    background: #25d366;

    border-radius: 5px;
  }

  /* ARROW */
  .mobileArrow {
    position: absolute;

    right: 14px;

    color: #ffffff !important;

    font-size: 23px;
    line-height: 1;

    transition: transform 0.2s ease;
  }

  .mobileLinks .navLink:hover .mobileArrow {
    color: #ffffff !important;

    transform: translateX(3px);
  }

  .mobileLine {
    width: calc(100% - 36px);

    height: 1px;

    margin: 0 auto;

    background: rgba(255, 255, 255, 0.08);
  }

  /* =====================================
     MOBILE CTA
  ===================================== */

  .mobileCta {
    margin: 18px 20px;

    padding: 18px;

    text-align: center;

    background: rgba(37, 211, 102, 0.06);

    border: 1px solid rgba(37, 211, 102, 0.14);

    border-radius: 10px;
  }

  .mobileCtaTitle {
    color: #ffffff !important;

    font-size: 16px !important;
    font-weight: 600 !important;

    text-align: center;
  }

  .mobileCtaText {
    margin: 5px 0 14px !important;

    color: #ffffff !important;
    opacity: 0.75;

    font-size: 12px !important;
    line-height: 1.5;

    text-align: center;
  }

  /* =====================================
     MOBILE FOOTER
  ===================================== */

  .mobileFooter {
    margin-top: auto;

    padding: 16px 20px;

    text-align: center;

    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .footerTitle {
    color: #ffffff !important;

    opacity: 0.65;

    font-size: 11px !important;

    text-align: center;
  }

  .footerArea {
    margin-top: 3px !important;

    color: #ffffff !important;

    font-size: 12px !important;
    font-weight: 600 !important;

    text-align: center;
  }

  /* =====================================
     TABLET
  ===================================== */

  @media (max-width: 1000px) {
    .toolbar {
      padding: 0 22px;
    }

    .desktopMenu {
      gap: 18px;
    }

    .desktopMenu .navLink {
      font-size: 14px;
    }

    .desktopWhatsapp {
      padding: 10px 13px;
    }
  }

  /* =====================================
     MOBILE
  ===================================== */

  @media (max-width: 768px) {
    .toolbar {
      min-height: 68px;

      padding: 0 14px;
    }

    .logo {
      width: 52px;
      height: 52px;
    }

    .brandName {
      font-size: 18px !important;
    }

    .brandSubtext {
      font-size: 10px !important;

      letter-spacing: 1.2px;
    }

    .desktopMenu {
      display: none;
    }

    .mobileMenuButton {
      display: flex;
    }

    .headerSpacer {
      min-height: 68px;
    }
  }

  /* =====================================
     SMALL MOBILE
  ===================================== */

  @media (max-width: 480px) {
    .toolbar {
      min-height: 64px;

      padding: 0 11px;
    }

    .logo {
      width: 48px;
      height: 48px;
    }

    .brandName {
      font-size: 17px !important;
    }

    .brandSubtext {
      font-size: 9px !important;
    }

    .mobileMenuButton svg {
      font-size: 30px;
    }

    .headerSpacer {
      min-height: 64px;
    }

    .mobileMenuHeader {
      min-height: 70px;

      padding: 15px 50px 15px 15px;
    }

    .mobileBrand {
      font-size: 19px !important;
    }

    .mobileLinks {
      padding: 8px 14px;
    }

    .mobileLinks .navLink {
      min-height: 48px;

      padding: 13px 32px;

      font-size: 16px;
    }

    .mobileCta {
      margin: 12px 17px 15px;

      padding: 16px;
    }

    .mobileFooter {
      padding: 14px 15px;
    }
  }
`;

export default Nav;
