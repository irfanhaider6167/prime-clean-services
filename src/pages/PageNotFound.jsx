import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" className="code">
          404
        </Typography>

        <Typography variant="h4" className="title">
          Page Not Found
        </Typography>

        <Typography className="desc">
          Sorry, the page you are looking for does not exist or may have been
          moved. Visit PrimeClean Services to explore our professional cleaning
          services in Islamabad and Rawalpindi.
        </Typography>

        <Button
          variant="contained"
          className="btn"
          onClick={() => navigate("/")}
        >
          Back to PrimeClean Services
        </Button>
      </motion.div>
    </Wrapper>
  );
};

export default PageNotFound;

/* ================= STYLE ================= */

const Wrapper = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #f9fafb, #eef2f7);

  .code {
    font-size: 120px;
    font-weight: 800;
    color: #111827;
    line-height: 1;
    margin-bottom: 15px;
  }

  .title {
    font-weight: 700;
    color: #111827;
    margin-bottom: 15px;
  }

  .desc {
    color: #6b7280;
    line-height: 1.7;
    margin: 0 auto 25px;
    max-width: 500px;
  }

  .btn {
    background: #111827 !important;
    color: #ffffff !important;
    text-transform: none !important;
    padding: 10px 25px !important;
    border-radius: 8px !important;
    font-weight: 600 !important;
  }

  .btn:hover {
    background: #000000 !important;
  }

  @media (max-width: 600px) {
    .code {
      font-size: 80px;
    }

    .title {
      font-size: 28px;
    }

    .desc {
      font-size: 15px;
    }

    .btn {
      width: 100%;
      max-width: 300px;
    }
  }
`;
