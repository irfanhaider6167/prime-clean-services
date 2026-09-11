import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Typography, Box, Button, Chip } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";

// Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const WHATSAPP_NUMBER = "923350566349";

const services = {
  "home-deep-cleaning": {
    title: "Home Deep Cleaning Services in Islamabad & Rawalpindi",
    shortTitle: "Home Deep Cleaning",
    description:
      "Professional home deep cleaning services for apartments, houses, kitchens, washrooms, bedrooms and living areas. Our cleaning teams help remove dust, dirt, stains and buildup from different areas of your property.",
    image: "/images/home-deep-cleaning.webp",

    beforeImage: "/images/home-deep-cleaning-before.webp",
    afterImage: "/images/home-deep-cleaning-after.webp",

    included: [
      "Bedrooms and living areas",
      "Kitchen deep cleaning",
      "Washroom and bathroom cleaning",
      "Floor cleaning",
      "Doors and accessible surfaces",
      "Dust and dirt removal",
    ],

    benefits: [
      "Professional cleaning team",
      "Detailed cleaning process",
      "Suitable for houses and apartments",
      "Flexible service scheduling",
      "Service available in Islamabad & Rawalpindi",
    ],
  },

  "sofa-cleaning": {
    title: "Sofa Cleaning Services in Islamabad & Rawalpindi",
    shortTitle: "Sofa Cleaning",
    description:
      "Professional sofa cleaning service to help remove dust, dirt, stains and unwanted buildup from fabric and upholstered sofas. Our service is suitable for homes, apartments and offices.",
    image: "/images/sofa-cleaning.webp",

    beforeImage: "/images/sofa-cleaning-before.webp",
    afterImage: "/images/sofa-cleaning-after.webp",

    included: [
      "Fabric sofa cleaning",
      "Dust and dirt removal",
      "Stain treatment",
      "Deep cleaning",
      "Cushion cleaning",
      "Professional finishing",
    ],

    benefits: [
      "Professional cleaning equipment",
      "Experienced cleaning team",
      "Suitable for different sofa types",
      "Convenient home service",
      "Islamabad & Rawalpindi coverage",
    ],
  },

  "carpet-cleaning": {
    title: "Carpet Cleaning Services in Islamabad & Rawalpindi",
    shortTitle: "Carpet Cleaning",
    description:
      "Professional carpet cleaning services for homes and offices. We help remove accumulated dust, dirt and stains and improve the overall appearance of your carpets.",
    image: "/images/carpet-cleaning.webp",

    beforeImage: "/images/carpet-cleaning-before.webp",
    afterImage: "/images/carpet-cleaning-after.webp",

    included: [
      "Carpet deep cleaning",
      "Dust and dirt removal",
      "Stain treatment",
      "Surface cleaning",
      "Professional washing process",
      "Final cleaning and finishing",
    ],

    benefits: [
      "Professional cleaning equipment",
      "Experienced team",
      "Residential and office service",
      "Convenient doorstep service",
      "Islamabad & Rawalpindi coverage",
    ],
  },

  "mattress-cleaning": {
    title: "Mattress Cleaning Services in Islamabad & Rawalpindi",
    shortTitle: "Mattress Cleaning",
    description:
      "Professional mattress cleaning services to remove dust, dirt and unwanted buildup from mattresses and help maintain a fresher sleeping environment.",
    image: "/images/mattress-cleaning.webp",

    beforeImage: "/images/mattress-cleaning-before.webp",
    afterImage: "/images/mattress-cleaning-after.webp",

    included: [
      "Mattress surface cleaning",
      "Dust removal",
      "Deep cleaning",
      "Stain treatment",
      "Professional cleaning process",
      "Final drying and finishing",
    ],

    benefits: [
      "Professional equipment",
      "Experienced cleaning staff",
      "Convenient home service",
      "Suitable for different mattress sizes",
      "Islamabad & Rawalpindi coverage",
    ],
  },

  "water-tank-cleaning": {
    title: "Water Tank Cleaning Services in Islamabad & Rawalpindi",
    shortTitle: "Water Tank Cleaning",
    description:
      "Professional underground and overhead water tank cleaning services for homes and properties. We clean the tank interior and remove accumulated dirt, sediment and buildup.",
    image: "/images/water-tank-cleaning.webp",

    beforeImage: "/images/water-tank-cleaning-before.webp",
    afterImage: "/images/water-tank-cleaning-after.webp",

    included: [
      "Underground water tank cleaning",
      "Overhead water tank cleaning",
      "Sediment removal",
      "Tank floor cleaning",
      "Wall cleaning",
      "Final inspection",
    ],

    benefits: [
      "Professional cleaning team",
      "Suitable for underground tanks",
      "Suitable for overhead tanks",
      "Detailed cleaning process",
      "Islamabad & Rawalpindi coverage",
    ],
  },
};

const ServicePage = () => {
  const { serviceSlug } = useParams();

  const service = services[serviceSlug];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const whatsappMessage = `Hi, I am interested in ${service.shortTitle} service. Please share the details and quotation.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  // Current service ko related services se remove karna
  const relatedServices = Object.entries(services).filter(
    ([slug]) => slug !== serviceSlug,
  );

  return (
    <Wrapper>
      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="heroContainer">
          <motion.div
            className="heroContent"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Chip
              icon={<CleaningServicesIcon />}
              label="Professional Cleaning Service"
              className="serviceChip"
            />

            <Typography variant="h1" component="h1" className="heroTitle">
              {service.title}
            </Typography>

            <Typography className="heroDescription">
              {service.description}
            </Typography>

            <div className="heroButtons">
              <Button
                component="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={<WhatsAppIcon />}
                className="whatsappButton"
              >
                Get a Free Quote
              </Button>

              <Button
                component="a"
                href="tel:+923350566349"
                variant="outlined"
                className="callButton"
              >
                Call Now
              </Button>
            </div>

            <div className="serviceLocation">
              <LocationOnIcon />
              <span>Serving Islamabad & Rawalpindi</span>
            </div>
          </motion.div>

          <motion.div
            className="heroImageWrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={service.image}
              alt={`${service.shortTitle} in Islamabad and Rawalpindi`}
              className="heroImage"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= BEFORE & AFTER ================= */}

      <section className="beforeAfterSection">
        <div className="sectionContainer">
          <div className="sectionHeading">
            <Typography variant="h2" component="h2" className="sectionTitle">
              Before & After
            </Typography>

            <Typography className="sectionDescription">
              See the difference professional cleaning can make.
            </Typography>
          </div>

          <div className="beforeAfterGrid">
            <motion.div className="comparisonCard" whileHover={{ y: -5 }}>
              <div className="imageLabel">Before</div>

              <img
                src={service.beforeImage}
                alt={`Before ${service.shortTitle}`}
              />
            </motion.div>

            <motion.div className="comparisonCard" whileHover={{ y: -5 }}>
              <div className="imageLabel">After</div>

              <img
                src={service.afterImage}
                alt={`After ${service.shortTitle}`}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= DETAILS ================= */}

      <section className="detailsSection">
        <div className="sectionContainer">
          <div className="detailsGrid">
            {/* What's Included */}

            <div className="detailBox">
              <Typography variant="h2" component="h2" className="detailTitle">
                Services Included
              </Typography>

              <div className="list">
                {service.included.map((item) => (
                  <div className="listItem" key={item}>
                    <CheckCircleIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}

            <div className="detailBox">
              <Typography variant="h2" component="h2" className="detailTitle">
                Why Choose Our Service?
              </Typography>

              <div className="list">
                {service.benefits.map((item) => (
                  <div className="listItem" key={item}>
                    <CheckCircleIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RELATED SERVICES ================= */}

      <section className="relatedSection">
        <div className="sectionContainer">
          <div className="sectionHeading">
            <Typography variant="h2" component="h2" className="sectionTitle">
              Related Cleaning Services
            </Typography>

            <Typography className="sectionDescription">
              Explore our other professional cleaning services in Islamabad and
              Rawalpindi.
            </Typography>
          </div>

          <div className="relatedGrid">
            {relatedServices.map(([slug, relatedService], index) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <Link to={`/services/${slug}`} className="relatedCard">
                  <img
                    src={relatedService.image}
                    alt={`${relatedService.shortTitle} in Islamabad and Rawalpindi`}
                    loading="lazy"
                  />

                  <div className="relatedContent">
                    <Typography
                      variant="h3"
                      component="h3"
                      className="relatedTitle"
                    >
                      {relatedService.shortTitle}
                    </Typography>

                    <span className="viewService">
                      View Service
                      <ArrowForwardIcon />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="ctaSection">
        <div className="ctaContainer">
          <Typography variant="h2" component="h2" className="ctaTitle">
            Need {service.shortTitle}?
          </Typography>

          <Typography className="ctaText">
            Contact us today for service details and a quotation. Our team
            serves customers across Islamabad and Rawalpindi.
          </Typography>

          <Button
            component="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<WhatsAppIcon />}
            className="ctaButton"
          >
            WhatsApp for Quote
          </Button>
        </div>
      </section>
    </Wrapper>
  );
};

export default ServicePage;

/* ================= STYLE ================= */

const Wrapper = styled.main`
  background: #ffffff;

  /* ================= HERO ================= */

  .hero {
    padding: 80px 20px;
    background: linear-gradient(135deg, #f8fafc, #eef2f7);
  }

  .heroContainer {
    max-width: 1250px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .heroContent {
    max-width: 650px;
  }

  .serviceChip {
    margin-bottom: 20px;
    background: #dcfce7 !important;
    color: #15803d !important;
    font-weight: 600 !important;
  }

  .heroTitle {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.15;
    color: #111827;
    margin-bottom: 25px;
  }

  .heroDescription {
    color: #4b5563;
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 30px;
  }

  .heroButtons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .whatsappButton {
    background: #25d366 !important;
    padding: 13px 25px !important;
    font-weight: 700 !important;
    text-transform: none !important;
    border-radius: 8px !important;
  }

  .whatsappButton:hover {
    background: #1ebe5d !important;
  }

  .callButton {
    padding: 12px 25px !important;
    font-weight: 700 !important;
    text-transform: none !important;
    border-radius: 8px !important;
  }

  .serviceLocation {
    margin-top: 25px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #6b7280;
    font-size: 15px;
  }

  .serviceLocation svg {
    color: #16a34a;
  }

  .heroImageWrapper {
    width: 100%;
  }

  .heroImage {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 24px;
    display: block;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }

  /* ================= COMMON ================= */

  .sectionContainer {
    max-width: 1200px;
    margin: auto;
  }

  .sectionHeading {
    text-align: center;
    margin-bottom: 50px;
  }

  .sectionTitle {
    font-size: 38px;
    font-weight: 800;
    color: #111827;
    margin-bottom: 12px;
  }

  .sectionDescription {
    color: #6b7280;
    font-size: 17px;
    line-height: 1.7;
  }

  /* ================= BEFORE AFTER ================= */

  .beforeAfterSection {
    padding: 90px 20px;
    background: #ffffff;
  }

  .beforeAfterGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .comparisonCard {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    background: #f3f4f6;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .comparisonCard img {
    width: 100%;
    height: 400px;
    display: block;
    object-fit: cover;
  }

  .imageLabel {
    position: absolute;
    top: 18px;
    left: 18px;
    z-index: 2;
    padding: 7px 18px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.75);
    color: white;
    font-size: 14px;
    font-weight: 700;
  }

  /* ================= DETAILS ================= */

  .detailsSection {
    padding: 90px 20px;
    background: #f8fafc;
  }

  .detailsGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 35px;
  }

  .detailBox {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  }

  .detailTitle {
    font-size: 27px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 25px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 17px;
  }

  .listItem {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: #4b5563;
    font-size: 16px;
    line-height: 1.5;
  }

  .listItem svg {
    color: #16a34a;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* ================= RELATED SERVICES ================= */

  .relatedSection {
    padding: 90px 20px;
    background: #ffffff;
  }

  .relatedGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }

  .relatedCard {
    display: block;
    overflow: hidden;
    text-decoration: none;
    background: #ffffff;
    border-radius: 18px;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
    transition: 0.3s ease;
  }

  .relatedCard:hover {
    transform: translateY(-7px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.13);
  }

  .relatedCard img {
    width: 100%;
    height: 190px;
    display: block;
    object-fit: cover;
  }

  .relatedContent {
    padding: 20px;
  }

  .relatedTitle {
    color: #111827;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 14px;
  }

  .viewService {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #16a34a;
    font-size: 14px;
    font-weight: 700;
  }

  .viewService svg {
    font-size: 18px;
    transition: transform 0.2s ease;
  }

  .relatedCard:hover .viewService svg {
    transform: translateX(4px);
  }

  /* ================= CTA ================= */

  .ctaSection {
    padding: 90px 20px;
    background: #071426;
  }

  .ctaContainer {
    max-width: 850px;
    margin: auto;
    text-align: center;
  }

  .ctaTitle {
    color: white;
    font-size: 38px;
    font-weight: 800;
    margin-bottom: 18px;
  }

  .ctaText {
    color: #d1d5db;
    font-size: 17px;
    line-height: 1.8;
    margin-bottom: 30px;
  }

  .ctaButton {
    background: #25d366 !important;
    color: white !important;
    padding: 13px 28px !important;
    font-weight: 700 !important;
    text-transform: none !important;
    border-radius: 8px !important;
  }

  .ctaButton:hover {
    background: #1ebe5d !important;
  }

  /* ================= TABLET ================= */

  @media (max-width: 1000px) {
    .relatedGrid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* ================= MOBILE ================= */

  @media (max-width: 900px) {
    .heroContainer {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .heroContent {
      max-width: 100%;
      text-align: center;
    }

    .heroButtons {
      justify-content: center;
    }

    .serviceLocation {
      justify-content: center;
    }

    .heroImage {
      height: 380px;
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 60px 20px;
    }

    .heroTitle {
      font-size: 34px;
    }

    .heroDescription {
      font-size: 16px;
    }

    .beforeAfterSection,
    .detailsSection,
    .relatedSection,
    .ctaSection {
      padding: 65px 20px;
    }

    .sectionTitle,
    .ctaTitle {
      font-size: 30px;
    }

    .beforeAfterGrid,
    .detailsGrid {
      grid-template-columns: 1fr;
    }

    .comparisonCard img {
      height: 300px;
    }

    .detailBox {
      padding: 28px 22px;
    }
  }

  @media (max-width: 600px) {
    .relatedGrid {
      grid-template-columns: 1fr;
    }

    .relatedCard img {
      height: 220px;
    }
  }

  @media (max-width: 480px) {
    .heroTitle {
      font-size: 29px;
    }

    .heroButtons {
      flex-direction: column;
    }

    .heroButtons a {
      width: 100%;
    }

    .heroImage {
      height: 280px;
    }

    .sectionTitle,
    .ctaTitle {
      font-size: 27px;
    }

    .comparisonCard img {
      height: 250px;
    }
  }
`;
