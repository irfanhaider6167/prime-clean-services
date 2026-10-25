import React from "react";
import { Typography, Box } from "@mui/material";
import styled from "styled-components";

import ActionAreaCard from "../components/Card";

const Services = () => {
  return (
    <Wrapper>
      <Box
        component="section"
        aria-labelledby="services-heading"
        className="services-container"
      >
        {/* Main SEO Heading */}
        <Typography
          component="h1"
          variant="h1"
          id="services-heading"
          className="title"
        >
          Professional Cleaning Services in Islamabad & Rawalpindi
        </Typography>

        {/* Introduction */}
        <Typography component="p" className="intro">
          PrimeClean Services offers professional cleaning services in Islamabad
          and Rawalpindi for homes and residential properties. Our services
          include home deep cleaning, sofa cleaning, carpet cleaning, mattress
          cleaning, water tank cleaning, and solar panel cleaning. Contact our
          team to discuss your cleaning requirements and request a quotation.
        </Typography>

        {/* Services Cards */}
        <Box
          component="section"
          className="content"
          aria-label="Cleaning services offered by PrimeClean Services"
        >
          <ActionAreaCard />
        </Box>

        {/* Service Area Information */}
        <Box component="aside" className="service-area">
          <Typography component="h2" className="area-title">
            Serving Islamabad & Rawalpindi
          </Typography>

          <Typography component="p" className="area-description">
            Looking for home or property cleaning in Islamabad or Rawalpindi?
            Explore our services and contact PrimeClean Services for details and
            a quotation based on your needs.
          </Typography>
        </Box>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 70px 20px;
  background: #f9fafb;
  color: #374151;

  .services-container {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
  }

  .title {
    max-width: 1000px;
    margin: 0 auto 22px;
    color: #111827;
    font-size: clamp(30px, 4vw, 44px);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.6px;
    text-align: center;
  }

  .intro {
    max-width: 850px;
    margin: 0 auto 44px;
    color: #596579;
    font-size: 17px;
    line-height: 1.85;
    text-align: center;
  }

  .content {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .service-area {
    max-width: 850px;
    margin: 55px auto 0;
    padding: 25px 20px;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    background: #ffffff;
    text-align: center;
  }

  .area-title {
    margin-bottom: 12px;
    color: #087f72;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4;
  }

  .area-description {
    margin: 0;
    color: #596579;
    font-size: 15px;
    line-height: 1.8;
  }

  @media (max-width: 768px) {
    padding: 50px 16px;

    .intro {
      margin-bottom: 32px;
      font-size: 16px;
    }

    .service-area {
      margin-top: 38px;
      padding: 22px 16px;
    }

    .area-title {
      font-size: 21px;
    }
  }

  @media (max-width: 480px) {
    padding: 40px 14px;

    .title {
      font-size: 29px;
      line-height: 1.25;
    }

    .intro {
      font-size: 15px;
      line-height: 1.75;
    }
  }
`;

export default Services;
