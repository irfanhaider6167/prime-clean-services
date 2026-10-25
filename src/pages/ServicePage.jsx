import React, { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import {
  Home as HomeIcon,
  Chair as ChairIcon,
  CleaningServices as CleaningServicesIcon,
  Bed as BedIcon,
  WaterDrop as WaterDropIcon,
  SolarPower as SolarPowerIcon,
  CheckCircle as CheckCircleIcon,
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  ArrowForward as ArrowForwardIcon,
  Verified as VerifiedIcon,
} from "@mui/icons-material";

import { trackWhatsAppClick, trackPhoneCallClick } from "../utils/conversions";

const PHONE_DISPLAY = "03350566349";
const PHONE_LINK = "+923350566349";
const WHATSAPP_NUMBER = "923350566349";
const WEBSITE_URL = "https://primecleanservices.com";

/* =========================
   SERVICES DATA
========================= */

const services = {
  "home-deep-cleaning": {
    title: "Home Deep Cleaning Services in Islamabad & Rawalpindi",
    shortTitle: "Home Deep Cleaning",
    description:
      "Professional home deep cleaning services in Islamabad and Rawalpindi. We clean kitchens, bathrooms, floors, and other home areas to help maintain a fresh and hygienic living environment.",
    image: "/images/home-deep-cleaning.webp",
    beforeImage: "/images/home-deep-cleaning-before.webp",
    afterImage: "/images/home-deep-cleaning-after.webp",
    icon: HomeIcon,
    included: [
      "Deep cleaning of floors and surfaces",
      "Kitchen surface and exterior cabinet cleaning",
      "Bathroom cleaning and sanitization",
      "Dusting of accessible furniture and fixtures",
      "Removal of everyday dirt and buildup",
    ],
    benefits: [
      "A cleaner and fresher home",
      "Attention to commonly missed areas",
      "Suitable for routine or detailed cleaning",
      "Professional cleaning for residential properties",
    ],
  },

  "sofa-cleaning": {
    title: "Sofa Cleaning Services in Islamabad & Rawalpindi",
    shortTitle: "Sofa Cleaning",
    description:
      "Professional sofa cleaning services in Islamabad and Rawalpindi. We help remove accumulated dust, dirt, and everyday stains from sofas and upholstered furniture, depending on the fabric and its cleaning requirements.",
    image: "/images/sofa-cleaning.webp",
    beforeImage: "/images/sofa-cleaning-before.webp",
    afterImage: "/images/sofa-cleaning-after.webp",
    icon: ChairIcon,
    included: [
      "Inspection of sofa fabric",
      "Removal of loose dust and debris",
      "Cleaning of accessible sofa surfaces",
      "Treatment of suitable stains where possible",
      "Cleaning recommendations based on fabric type",
    ],
    benefits: [
      "Helps refresh upholstered furniture",
      "Removes accumulated surface dirt",
      "Supports better furniture hygiene",
      "Suitable for homes and offices",
    ],
  },

  "carpet-cleaning": {
    title: "Carpet Cleaning Services in Islamabad & Rawalpindi",
    shortTitle: "Carpet Cleaning",
    description:
      "Professional carpet cleaning services in Islamabad and Rawalpindi. We help remove dust, dirt, and suitable stains from carpets to improve their appearance and cleanliness.",
    image: "/images/carpet-cleaning.webp",
    beforeImage: "/images/carpet-cleaning-before.webp",
    afterImage: "/images/carpet-cleaning-after.webp",
    icon: CleaningServicesIcon,
    included: [
      "Carpet condition inspection",
      "Removal of loose dust and debris",
      "Cleaning according to carpet material",
      "Treatment of suitable stains",
      "Guidance on drying and aftercare",
    ],
    benefits: [
      "Helps restore a fresher appearance",
      "Removes accumulated dirt",
      "Supports a cleaner indoor environment",
      "Suitable for residential and commercial carpets",
    ],
  },

  "mattress-cleaning": {
    title: "Mattress Cleaning Services in Islamabad & Rawalpindi",
    shortTitle: "Mattress Cleaning",
    description:
      "Professional mattress cleaning services in Islamabad and Rawalpindi. We help remove surface dust, dirt, and suitable stains while cleaning according to the mattress material and condition.",
    image: "/images/mattress-cleaning.webp",
    beforeImage: "/images/mattress-cleaning-before.webp",
    afterImage: "/images/mattress-cleaning-after.webp",
    icon: BedIcon,
    included: [
      "Mattress condition inspection",
      "Removal of loose surface dust",
      "Cleaning of suitable mattress surfaces",
      "Treatment of suitable stains where possible",
      "Drying and aftercare recommendations",
    ],
    benefits: [
      "Helps maintain mattress cleanliness",
      "Removes accumulated surface dirt",
      "Supports a fresher sleeping environment",
      "Cleaning tailored to mattress condition",
    ],
  },

  "water-tank-cleaning": {
    title: "Water Tank Cleaning Services in Islamabad & Rawalpindi",
    shortTitle: "Water Tank Cleaning",
    description:
      "Professional underground and overhead water tank cleaning services in Islamabad and Rawalpindi. We clean accessible tank interiors and remove accumulated dirt, sediment, and buildup.",
    image: "/images/water-tank-cleaning.webp",
    beforeImage: "/images/water-tank-cleaning-before.webp",
    afterImage: "/images/water-tank-cleaning-after.webp",
    icon: WaterDropIcon,
    included: [
      "Inspection of the accessible tank interior",
      "Removal of accumulated dirt and sediment",
      "Cleaning of accessible internal surfaces",
      "Removal of loosened residue",
      "Recommendations for ongoing tank maintenance",
    ],
    benefits: [
      "Helps maintain a cleaner water storage tank",
      "Removes accumulated sediment and buildup",
      "Suitable for overhead and underground tanks",
      "Available for residential properties",
    ],
  },

  "solar-panel-cleaning": {
    title: "Solar Panel Cleaning Services in Islamabad & Rawalpindi",
    shortTitle: "Solar Panel Cleaning",
    description:
      "Professional solar panel cleaning services in Islamabad and Rawalpindi for residential and commercial properties. We remove accumulated dust, dirt, and buildup to help maintain panel cleanliness and performance.",
    image: "/images/solar-panel-cleaning.webp",
    beforeImage: "/images/solar-panel-cleaning-before.webp",
    afterImage: "/images/solar-panel-cleaning-after.webp",
    icon: SolarPowerIcon,
    included: [
      "Visual inspection of accessible solar panels",
      "Removal of accumulated dust and dirt",
      "Cleaning of panel surfaces using suitable methods",
      "Attention to visible buildup",
      "Recommendations for routine panel cleaning",
    ],
    benefits: [
      "Helps keep solar panel surfaces clean",
      "Removes dust that may obstruct sunlight",
      "Supports routine solar panel maintenance",
      "Suitable for residential and commercial properties",
    ],
  },
};

/* =========================
   SEO METADATA
========================= */

function useServiceSEO(service, serviceSlug) {
  useEffect(() => {
    if (!service || !serviceSlug) return;

    const pageUrl = `${WEBSITE_URL}/services/${serviceSlug}`;
    const seoTitle = `${service.shortTitle} in Islamabad & Rawalpindi | PrimeClean Services`;

    const seoDescription =
      `${service.shortTitle} in Islamabad and Rawalpindi. ` +
      service.description;

    document.title = seoTitle;

    const setMeta = (name, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";

      let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("description", seoDescription);
    setMeta("robots", "index, follow");

    setMeta("og:title", seoTitle, true);
    setMeta("og:description", seoDescription, true);
    setMeta("og:url", pageUrl, true);
    setMeta("og:image", `${WEBSITE_URL}${service.image}`, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "PrimeClean Services", true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", seoTitle);
    setMeta("twitter:description", seoDescription);
    setMeta("twitter:image", `${WEBSITE_URL}${service.image}`);

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", pageUrl);

    let schema = document.getElementById("primeclean-service-schema");

    if (!schema) {
      schema = document.createElement("script");
      schema.id = "primeclean-service-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.shortTitle,
      serviceType: service.shortTitle,
      url: pageUrl,
      description: service.description,
      image: `${WEBSITE_URL}${service.image}`,
      provider: {
        "@type": "LocalBusiness",
        name: "PrimeClean Services",
        url: `${WEBSITE_URL}/`,
        telephone: PHONE_LINK,
      },
      areaServed: [
        { "@type": "City", name: "Islamabad" },
        { "@type": "City", name: "Rawalpindi" },
      ],
    });

    return () => {
      document.getElementById("primeclean-service-schema")?.remove();
    };
  }, [service, serviceSlug]);
}

/* =========================
   STYLED COMPONENTS
========================= */

const PageWrapper = styled.main`
  width: 100%;
  overflow: hidden;
  color: #172033;
  background: #ffffff;
`;

const Container = styled.div`
  width: min(1160px, 92%);
  margin: 0 auto;
`;

const Hero = styled.section`
  padding: 70px 0 60px;
  background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 65%);

  @media (max-width: 768px) {
    padding: 44px 0 38px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 44px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 18px;
  padding: 8px 13px;
  border-radius: 30px;
  color: #087f72;
  background: #dff8f2;
  font-size: 13px;
  font-weight: 700;
`;

const Heading = styled.h1`
  margin: 0 0 20px;
  color: #132238;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.16;
  letter-spacing: -1.1px;

  span {
    color: #078577;
  }
`;

const Description = styled.p`
  margin: 0 0 25px;
  color: #586579;
  font-size: 17px;
  line-height: 1.85;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 48px;
  padding: 13px 19px;
  border: 1px solid ${(props) => (props.$primary ? "#087f72" : "#d9e2ec")};
  border-radius: 9px;
  background: ${(props) => (props.$primary ? "#087f72" : "#ffffff")};
  color: ${(props) => (props.$primary ? "#ffffff" : "#172033")};
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${(props) => (props.$primary ? "#066b60" : "#f0fdfa")};
  }
`;

const HeroImageWrap = styled.div`
  position: relative;
  min-height: 330px;
  overflow: hidden;
  border-radius: 22px;
  background: #e6f4f1;
  box-shadow: 0 18px 45px rgba(20, 45, 65, 0.12);

  img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 330px;
    max-height: 440px;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    min-height: 250px;

    img {
      min-height: 250px;
    }
  }
`;

const TrustNote = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 20px;
  color: #536276;
  font-size: 13px;

  svg {
    color: #078577;
  }
`;

const Section = styled.section`
  padding: 65px 0;

  @media (max-width: 768px) {
    padding: 44px 0;
  }
`;

const SectionHeader = styled.div`
  max-width: 760px;
  margin: 0 auto 35px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  margin: 0 0 13px;
  color: #132238;
  font-size: clamp(25px, 3vw, 35px);
  line-height: 1.25;
`;

const SectionText = styled.p`
  margin: 0;
  color: #657286;
  font-size: 15px;
  line-height: 1.8;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  padding: 27px;
  border: 1px solid #e5ebf0;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 0 7px 24px rgba(20, 45, 65, 0.04);
`;

const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 21px;
  color: #172033;
  font-size: 20px;

  svg {
    color: #078577;
  }
`;

const CheckList = styled.ul`
  display: grid;
  gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: #536276;
    font-size: 14px;
    line-height: 1.65;
  }

  svg {
    flex: 0 0 auto;
    margin-top: 2px;
    color: #078577;
    font-size: 19px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryCard = styled.div`
  overflow: hidden;
  border: 1px solid #e5ebf0;
  border-radius: 15px;
  background: #ffffff;

  img {
    display: block;
    width: 100%;
    height: 280px;
    object-fit: cover;
    background: #f1f5f9;
  }

  h3 {
    margin: 0;
    padding: 16px 18px;
    color: #172033;
    font-size: 16px;
  }
`;

/* Image-based related service cards */

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled(Link)`
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  border: 1px solid #e5ebf0;
  border-radius: 15px;
  color: #172033;
  background: #ffffff;
  text-decoration: none;
  box-shadow: 0 5px 20px rgba(20, 45, 65, 0.05);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(20, 45, 65, 0.12);
  }

  &:focus-visible {
    outline: 3px solid #078577;
    outline-offset: 3px;
  }

  .service-image {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    background: #f1f5f9;
  }

  .service-card-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 17px;
  }

  .service-card-title {
    margin: 0;
    color: #172033;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  }

  .service-card-arrow {
    flex-shrink: 0;
    color: #078577;
  }
`;

const CTASection = styled.section`
  padding: 58px 0;
  color: #ffffff;
  background: #123b43;
`;

const CTACard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;

  h2 {
    margin: 0 0 12px;
    font-size: clamp(25px, 3vw, 34px);
    line-height: 1.3;
  }

  p {
    margin: 0;
    color: #d3e4e5;
    font-size: 15px;
    line-height: 1.8;
  }

  @media (max-width: 750px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const CTAButtons = styled(ButtonGroup)`
  flex: 0 0 auto;

  a {
    white-space: nowrap;
  }
`;

/* =========================
   SERVICE DETAILS PAGE
========================= */

const ServicePage = () => {
  // App.jsx route: /services/:serviceSlug
  const { serviceSlug } = useParams();

  const service = services[serviceSlug];

  useServiceSEO(service, serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const whatsappMessage = encodeURIComponent(
    `Hi PrimeClean Services, I am interested in your ${service.shortTitle} service in Islamabad/Rawalpindi. Please share the details and quotation.`,
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const relatedServices = Object.entries(services).filter(
    ([slug]) => slug !== serviceSlug,
  );

  return (
    <PageWrapper>
      <Hero>
        <Container>
          <HeroGrid>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Eyebrow>
                <VerifiedIcon fontSize="small" />
                Professional Cleaning Service
              </Eyebrow>

              <Heading>
                {service.shortTitle} <span>in Islamabad & Rawalpindi</span>
              </Heading>

              <Description>{service.description}</Description>

              <ButtonGroup>
                <ActionButton
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  $primary
                  onClick={() => trackWhatsAppClick()}
                >
                  <WhatsAppIcon />
                  WhatsApp for Quote
                </ActionButton>

                <ActionButton
                  href={`tel:${PHONE_LINK}`}
                  onClick={() => trackPhoneCallClick()}
                >
                  <PhoneIcon />
                  Call Now
                </ActionButton>
              </ButtonGroup>

              <TrustNote>
                <CheckCircleIcon fontSize="small" />
                Serving Islamabad and Rawalpindi
              </TrustNote>
            </motion.div>

            <HeroImageWrap>
              <img
                src={service.image}
                alt={`${service.shortTitle} in Islamabad and Rawalpindi`}
                fetchPriority="high"
                width="600"
                height="440"
              />
            </HeroImageWrap>
          </HeroGrid>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Professional {service.shortTitle}</SectionTitle>

            <SectionText>
              PrimeClean Services provides cleaning services for homes and
              properties in Islamabad and Rawalpindi. Our approach is based on
              the service required, the condition of the area, and the
              appropriate cleaning method.
            </SectionText>
          </SectionHeader>

          <TwoColumn>
            <InfoCard>
              <CardTitle>
                <CleaningServicesIcon />
                What Our Service Includes
              </CardTitle>

              <CheckList>
                {service.included.map((item, index) => (
                  <li key={index}>
                    <CheckCircleIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </CheckList>
            </InfoCard>

            <InfoCard>
              <CardTitle>
                <VerifiedIcon />
                Service Benefits
              </CardTitle>

              <CheckList>
                {service.benefits.map((item, index) => (
                  <li key={index}>
                    <CheckCircleIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </CheckList>
            </InfoCard>
          </TwoColumn>
        </Container>
      </Section>

      <Section style={{ background: "#f7fafc" }}>
        <Container>
          <SectionHeader>
            <SectionTitle>{service.shortTitle} Before & After</SectionTitle>

            <SectionText>
              View the before-and-after examples for this service. Actual
              results depend on the condition, material, and level of dirt or
              staining.
            </SectionText>
          </SectionHeader>

          <GalleryGrid>
            <GalleryCard>
              <img
                src={service.beforeImage}
                alt={`${service.shortTitle} before cleaning`}
                loading="lazy"
                decoding="async"
                width="560"
                height="280"
              />
              <h3>Before Cleaning</h3>
            </GalleryCard>

            <GalleryCard>
              <img
                src={service.afterImage}
                alt={`${service.shortTitle} after cleaning`}
                loading="lazy"
                decoding="async"
                width="560"
                height="280"
              />
              <h3>After Cleaning</h3>
            </GalleryCard>
          </GalleryGrid>
        </Container>
      </Section>

      {/* EXPLORE OUR OTHER SERVICES */}
      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Explore Our Other Services</SectionTitle>

            <SectionText>
              Explore our other professional cleaning services in Islamabad and
              Rawalpindi. Select a service to view its details.
            </SectionText>
          </SectionHeader>

          <RelatedGrid>
            {relatedServices.map(([slug, item]) => (
              <RelatedCard key={slug} to={`/services/${slug}`}>
                <img
                  className="service-image"
                  src={item.image}
                  alt={`${item.shortTitle} in Islamabad and Rawalpindi`}
                  width="360"
                  height="225"
                  loading="lazy"
                  decoding="async"
                />

                <div className="service-card-content">
                  <h3 className="service-card-title">{item.shortTitle}</h3>

                  <ArrowForwardIcon className="service-card-arrow" />
                </div>
              </RelatedCard>
            ))}
          </RelatedGrid>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTACard>
            <div>
              <h2>Need {service.shortTitle}?</h2>

              <p>
                Contact PrimeClean Services for details and a quotation for your
                property in Islamabad or Rawalpindi.
              </p>
            </div>

            <CTAButtons>
              <ActionButton
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                $primary
                onClick={() => trackWhatsAppClick()}
              >
                <WhatsAppIcon />
                Get a Free Quote
              </ActionButton>

              <ActionButton
                href={`tel:${PHONE_LINK}`}
                onClick={() => trackPhoneCallClick()}
              >
                <PhoneIcon />
                {PHONE_DISPLAY}
              </ActionButton>
            </CTAButtons>
          </CTACard>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default ServicePage;
