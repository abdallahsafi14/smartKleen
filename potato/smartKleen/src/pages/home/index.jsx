import React from "react";
import { motion } from "framer-motion";
import AppTemplate from "../../components/app-template";
import { Carousel } from "primereact/carousel";
import { Card } from "primereact/card";

import floorCleaningImage from "../../assets/images/Floor-Cleaning.jpeg";
import kitchenCleaningImage from "../../assets/images/Kitchen-Cleaning.jpg";
import commercialImage from "../../assets/images/commercial.jpg";

import { Styles } from "./Styles";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const cleanServices = [
  {
    id: 1,
    name: "Exhaust Services",
    image: floorCleaningImage,
    description:
      "Our professional exhaust system cleaning service ensures optimal airflow and ventilation in your kitchen. Regular cleaning removes grease buildup and reduces fire hazards, while improving the overall efficiency of your ventilation system. Our expert technicians use high-grade tools and methods to keep your system compliant with safety standards, enhancing both hygiene and operational performance.",
  },
  {
    id: 2,
    name: "Filter Cleaning",
    image: kitchenCleaningImage,
    description:
      "We provide in-depth filter cleaning services designed to maintain air quality and enhance kitchen safety. Over time, filters accumulate grease and debris that can obstruct airflow and increase fire risk. Our team meticulously cleans and inspects your filters to ensure they meet hygiene and fire code requirements, helping you maintain a cleaner, safer environment and extend filter lifespan.",
  },
  {
    id: 3,
    name: "Equipment Cleaning",
    image: kitchenCleaningImage,
    description:
      "Regular equipment cleaning is essential for maintaining cleanliness, safety, and operational efficiency across various industries. Proper cleaning procedures remove dirt, contaminants, and pathogens, ensuring product quality, regulatory compliance, and employee well-being. By prioritizing equipment cleaning, businesses can uphold hygiene standards, minimize downtime, and prolong equipment lifespan.",
  },
  {
    id: 4,
    name: "Full Restaurant Cleaning",
    image: kitchenCleaningImage,
    description:
      "Our comprehensive restaurant cleaning service covers everything from floors to ceilings, ensuring a spotless and welcoming environment for your guests. We focus on high-touch surfaces, kitchen areas, dining spaces, and restrooms to eliminate bacteria and grime. Our deep cleaning helps maintain health code compliance and supports a positive customer experience through a visibly clean atmosphere.",
  },
  {
    id: 5,
    name: "Floor Cleaning",
    image: kitchenCleaningImage,
    description:
      "Our floor cleaning services are tailored to handle tough stains, grease, and heavy foot traffic. Using commercial-grade equipment and eco-friendly cleaning solutions, we restore shine and slip resistance to all types of flooring. Regular maintenance reduces wear and tear, improves safety, and keeps your establishment looking professional and hygienic at all times.",
  },
];


const Home = () => {
  const serviceTemplate = (service) => (
    <Card className="service-card">
      <div className="image-container">
        <img src={service.image} alt={service.name} />
      </div>
      <div className="text-content">
        <h3 className="service-title">{service.name}</h3>
        <p className="service-description">{service.description}</p>
      </div>
    </Card>
  );

  const responsiveOptions = [
    {
      breakpoint: "960px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <AppTemplate pageTitle="Home" navbar={true} footer={true} SEOPageName="Home">
      <Styles>
        <div className="carousel-wrapper">
          <motion.div
            className="carousel-header"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>What we do?</h2>
          </motion.div>

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Carousel
              value={cleanServices}
              numVisible={3}
              numScroll={1}
              circular
              autoplayInterval={3000}
              autoplay={true}
              responsiveOptions={responsiveOptions}
              itemTemplate={serviceTemplate}
              className="services-carousel"
            />
          </motion.div>

          <div className="button-container">
            <Link to="/contacts" className="call-link">
              Call Us
            </Link>
          </div>
        </div>

        <div className="Commercial">
          <div className="commercial-container">
            <motion.div
              className="commercial-image"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={commercialImage} alt="Commercial Kitchen Cleaning" />
            </motion.div>

            <motion.div
              className="commercial-text"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Commercial Kitchen Cleaning</h2>
              <h3>Hood Cleaning and Commercial Kitchen Cleaning</h3>
              <p>
                Hood cleaning and commercial kitchen cleaning services are essential for maintaining safe,
                hygienic, and compliant environments in foodservice establishments. Professional cleaning helps
                remove grease buildup, prevent fire hazards, ensure compliance with health codes, and improve overall
                cleanliness. By investing in these services, businesses can enhance safety, prolong equipment lifespan,
                and create a healthier environment for staff and customers.
              </p>
              <div className="button-container-com">
                <Link to="/contacts" className="call-link-com">
                  <FaPhoneAlt style={{ marginRight: "8px" }} />
                  Call Us — 647-608-1111
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Styles>
    </AppTemplate>
  );
};

export default Home;
