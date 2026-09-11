import React from "react";
import { Typography, Box } from "@mui/material";
import styled from "styled-components";

// Main Services Component
import ActionAreaCard from "../components/Card";

const Services = () => {
  return (
    <Wrapper>
      {/* SEO-Friendly Page Heading */}
      <Typography variant="h1" className="title">
        Cleaning Services in Islamabad & Rawalpindi
      </Typography>

      {/* Introduction */}
      <Typography className="intro">
        PrimeClean Services provides professional and reliable cleaning
        solutions for homes and properties in Islamabad and Rawalpindi. Our
        services include home deep cleaning, sofa cleaning, carpet cleaning,
        mattress cleaning and water tank cleaning.
      </Typography>

      {/* Services */}
      <Box
        component="section"
        className="content"
        aria-label="PrimeClean cleaning services"
      >
        <ActionAreaCard />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 70px 20px;
  background: #f9fafb;
  color: #374151;

  .title {
    text-align: center;
    max-width: 1000px;
    margin: 0 auto 20px;
    font-weight: 700;
    font-size: 42px;
    line-height: 1.2;
    color: #111827;
  }

  .intro {
    max-width: 850px;
    margin: 0 auto 50px;
    text-align: center;
    color: #6b7280;
    font-size: 17px;
    line-height: 1.8;
  }

  .content {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 55px 15px;

    .title {
      font-size: 32px;
    }

    .intro {
      font-size: 16px;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 28px;
    }
  }
`;

export default Services;
