import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

// Icons
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import WeekendIcon from "@mui/icons-material/Weekend";
import LayersIcon from "@mui/icons-material/Layers";
import BedIcon from "@mui/icons-material/Bed";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

const WHATSAPP_NUMBER = "923350566349";

const services = [
  {
    name: "Home Deep Cleaning",
    slug: "home-deep-cleaning",
    description:
      "Professional home deep cleaning services for bedrooms, kitchens, bathrooms, floors and other areas of your property.",
    icon: <CleaningServicesIcon />,
    imgurl: "/images/home-deep-cleaning.webp",
  },
  {
    name: "Sofa Cleaning",
    slug: "sofa-cleaning",
    description:
      "Professional sofa cleaning to remove dust, dirt and stains and keep your sofas fresh, clean and comfortable.",
    icon: <WeekendIcon />,
    imgurl: "/images/sofa-cleaning.webp",
  },
  {
    name: "Carpet Cleaning",
    slug: "carpet-cleaning",
    description:
      "Deep carpet cleaning services to remove accumulated dust, dirt and stains and restore a cleaner appearance.",
    icon: <LayersIcon />,
    imgurl: "/images/carpet-cleaning.webp",
  },
  {
    name: "Mattress Cleaning",
    slug: "mattress-cleaning",
    description:
      "Thorough mattress cleaning to remove dust, dirt and unwanted buildup for a fresher and cleaner sleeping environment.",
    icon: <BedIcon />,
    imgurl: "/images/mattress-cleaning.webp",
  },
  {
    name: "Water Tank Cleaning",
    slug: "water-tank-cleaning",
    description:
      "Professional water tank cleaning for underground and overhead tanks to help maintain a cleaner water storage system.",
    icon: <WaterDropIcon />,
    imgurl: "/images/water-tank-cleaning.webp",
  },
];

const ActionAreaCard = () => {
  const navigate = useNavigate();

  const handleCardClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <Wrapper>
      <Box
        component="section"
        className="cardContainer"
        aria-label="PrimeClean Services"
      >
        {services.map((service, index) => {
          const message = `Hi, I am interested in ${service.name} service. Please share the details and quotation.`;

          return (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{ y: -8 }}
              className="cardWrapper"
              onClick={() => handleCardClick(service.slug)}
            >
              <Card className="serviceCard">
                <CardMedia
                  component="img"
                  image={service.imgurl}
                  alt={`${service.name} in Islamabad and Rawalpindi`}
                  className="serviceImage"
                  loading="lazy"
                />

                <CardContent className="cardContent">
                  <div className="iconBox" aria-hidden="true">
                    {service.icon}
                  </div>

                  <Typography
                    variant="h2"
                    component="h2"
                    className="serviceTitle"
                  >
                    {service.name}
                  </Typography>

                  <Typography className="serviceDescription">
                    {service.description}
                  </Typography>

                  <Button
                    component="a"
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      message,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    className="whatsappBtn"
                    aria-label={`Contact PrimeClean Services for ${service.name}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    WhatsApp for Quote
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </Box>
    </Wrapper>
  );
};

export default ActionAreaCard;

/* ================= STYLE ================= */

const Wrapper = styled.section`
  padding: 10px 20px 60px 20px;
  background: linear-gradient(180deg, #f9fafb, #eef2f7);

  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 1300px;
    margin: 0 auto;
  }

  .cardWrapper {
    cursor: pointer;
  }

  .serviceCard {
    width: 340px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 18px !important;
    overflow: hidden;
    background: #fff !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08) !important;
    transition: 0.3s ease;
  }

  .serviceImage {
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: center;
    background: #e5e7eb;
  }

  .cardContent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 20px !important;
  }

  .iconBox {
    width: 65px;
    height: 65px;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(135deg, #25d366, #16a34a);
    color: white;
    box-shadow: 0 8px 18px rgba(37, 211, 102, 0.25);
  }

  .iconBox svg {
    font-size: 32px;
  }

  .serviceTitle {
    font-weight: 700 !important;
    color: #111827;
    text-align: center;
    margin-bottom: 12px !important;
    font-size: 23px !important;
    line-height: 1.3;
  }

  .serviceDescription {
    color: #6b7280;
    text-align: center;
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 20px !important;
  }

  .whatsappBtn {
    margin-top: auto !important;
    background: #25d366 !important;
    color: white !important;
    font-weight: 600 !important;
    text-transform: none !important;
    border-radius: 8px !important;
    padding: 10px 20px !important;
  }

  .whatsappBtn:hover {
    background: #1ebe5d !important;
  }

  @media (max-width: 768px) {
    padding: 60px 15px;

    .serviceCard {
      width: 100%;
      max-width: 400px;
    }

    .serviceImage {
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    .serviceTitle {
      font-size: 21px !important;
    }
  }
`;
