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
import SolarPowerIcon from "@mui/icons-material/SolarPower";

// Google Ads Conversion Tracking
import { trackWhatsAppClick } from "../utils/conversions";

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
      "Professional sofa cleaning to remove dust, dirt and suitable stains and help keep your sofas fresh and clean.",
    icon: <WeekendIcon />,
    imgurl: "/images/sofa-cleaning.webp",
  },
  {
    name: "Carpet Cleaning",
    slug: "carpet-cleaning",
    description:
      "Carpet cleaning services to remove accumulated dust, dirt and suitable stains and restore a cleaner appearance.",
    icon: <LayersIcon />,
    imgurl: "/images/carpet-cleaning.webp",
  },
  {
    name: "Mattress Cleaning",
    slug: "mattress-cleaning",
    description:
      "Mattress cleaning to remove surface dust, dirt and buildup for a fresher sleeping environment.",
    icon: <BedIcon />,
    imgurl: "/images/mattress-cleaning.webp",
  },
  {
    name: "Water Tank Cleaning",
    slug: "water-tank-cleaning",
    description:
      "Professional cleaning for underground and overhead water tanks to help maintain a cleaner water storage system.",
    icon: <WaterDropIcon />,
    imgurl: "/images/water-tank-cleaning.webp",
  },
  {
    name: "Solar Panel Cleaning",
    slug: "solar-panel-cleaning",
    description:
      "Solar panel cleaning to remove accumulated dust and dirt from residential and commercial solar panels.",
    icon: <SolarPowerIcon />,
    imgurl: "/images/solar-panel-cleaning.webp",
  },
];

const ActionAreaCard = () => {
  const navigate = useNavigate();

  const handleCardClick = (slug) => {
    navigate(`/services/${slug}`);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handleCardKeyDown = (event, slug) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick(slug);
    }
  };

  const handleWhatsAppClick = () => {
    // Google Ads WhatsApp conversion tracking
    trackWhatsAppClick();
  };

  return (
    <Wrapper>
      <Box
        component="section"
        className="cardContainer"
        aria-label="PrimeClean cleaning services"
      >
        {services.map((service, index) => {
          const message =
            `Hi PrimeClean Services, I am interested in ${service.name} ` +
            "service in Islamabad/Rawalpindi. Please share the details and quotation.";

          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{ y: -6 }}
              className="cardWrapper"
              role="link"
              tabIndex={0}
              aria-label={`View ${service.name} service details`}
              onClick={() => handleCardClick(service.slug)}
              onKeyDown={(event) => handleCardKeyDown(event, service.slug)}
            >
              <Card className="serviceCard" elevation={0}>
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

                  <Typography component="p" className="serviceDescription">
                    {service.description}
                  </Typography>

                  <Button
                    component="a"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    className="whatsappBtn"
                    aria-label={`Get a WhatsApp quotation for ${service.name}`}
                    onClick={(event) => {
                      // WhatsApp click should not navigate to the card page
                      event.stopPropagation();
                      handleWhatsAppClick();
                    }}
                    onKeyDown={(event) => {
                      // Keep keyboard activation on the WhatsApp link
                      event.stopPropagation();
                    }}
                  >
                    WhatsApp for Quote
                  </Button>

                  <Typography
                    component="span"
                    className="detailsHint"
                    aria-hidden="true"
                  >
                    View Service Details →
                  </Typography>
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
  width: 100%;
  padding: 10px 20px 60px;
  background: linear-gradient(180deg, #f9fafb, #eef2f7);

  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  }

  .cardWrapper {
    width: 340px;
    display: flex;
    cursor: pointer;
    border-radius: 18px;
    outline-offset: 4px;
  }

  .cardWrapper:focus-visible {
    outline: 3px solid #087f72;
  }

  .serviceCard {
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 18px !important;
    background: #ffffff !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08) !important;
    transition: box-shadow 0.3s ease;
  }

  .cardWrapper:hover .serviceCard {
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.12) !important;
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
    flex-shrink: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, #25d366, #16a34a);
    color: #ffffff;
    box-shadow: 0 8px 18px rgba(37, 211, 102, 0.25);
  }

  .iconBox svg {
    font-size: 32px;
  }

  .serviceTitle {
    margin-bottom: 12px !important;
    color: #111827;
    text-align: center;
    font-size: 23px !important;
    font-weight: 700 !important;
    line-height: 1.3;
  }

  .serviceDescription {
    margin-bottom: 20px !important;
    color: #6b7280;
    text-align: center;
    font-size: 15px;
    line-height: 1.7;
  }

  .whatsappBtn {
    width: 100%;
    margin-top: auto !important;
    background: #25d366 !important;
    color: #ffffff !important;
    font-weight: 600 !important;
    text-transform: none !important;
    border-radius: 8px !important;
    padding: 10px 16px !important;
  }

  .whatsappBtn:hover {
    background: #1ebe5d !important;
  }

  .detailsHint {
    margin-top: 15px;
    color: #087f72;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 30px 15px 45px;

    .cardContainer {
      gap: 22px;
    }

    .cardWrapper {
      width: 100%;
      max-width: 400px;
    }

    .serviceCard {
      min-height: 0;
    }

    .serviceImage {
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    padding-right: 8px;
    padding-left: 8px;

    .serviceTitle {
      font-size: 21px !important;
    }
  }
`;
