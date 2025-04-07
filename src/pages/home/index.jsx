import { motion } from "framer-motion";
import AppTemplate from "../../components/app-template";
import { Carousel } from "primereact/carousel";
import { Card } from "primereact/card";

import commercialImage from "../../assets/images/commercial.jpg";

import { Styles } from "./Styles";
import { useNavigate } from "react-router-dom";
import { cleanServices } from "../../dummyData/cleanServices";
import { CallButton } from "../../components/CallButton";

const Home = () => {
  const navigate = useNavigate();
  const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

  const serviceTemplate = (service) => {
    const slug = slugify(service.name);
    return (
      <motion.div whileHover={{ scale: 1.02 }}>
        <Card
          className="service-card"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/services/${slug}`)}
        >
          <div className="image-container">
            <img src={service.image} alt={service.name} />
          </div>
          <div className="text-content">
            <h3 className="service-title">{service.name}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        </Card>
      </motion.div>
    );
  };

  const responsiveOptions = [
    {
      breakpoint: "1200px",
      numVisible: 3,
      numScroll: 1,
    },
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
    <AppTemplate
      pageTitle="Home"
      navbar={true}
      footer={true}
      SEOPageName="Home"
    >
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
              numVisible={4}
              numScroll={1}
              circular
              autoplayInterval={3000}
              autoplay={true}
              responsiveOptions={responsiveOptions}
              itemTemplate={serviceTemplate}
              className="services-carousel"
            />
          </motion.div>

          {/* <div className="button-container">
            <Link to="/contacts" className="call-link">
              Call Us
            </Link>
          </div> */}
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
                Hood cleaning and commercial kitchen cleaning services are
                essential for maintaining safe, hygienic, and compliant
                environments in foodservice establishments. Professional
                cleaning helps remove grease buildup, prevent fire hazards,
                ensure compliance with health codes, and improve overall
                cleanliness. By investing in these services, businesses can
                enhance safety, prolong equipment lifespan, and create a
                healthier environment for staff and customers.
              </p>
              <div className="button-container-com">
                {/* <Link to="/contacts" className="call-link-com">
                  <FaPhoneAlt style={{ marginRight: "8px" }} />
                  Call Us — 647-608-1111
                  </Link> */}
                <CallButton />
              </div>
            </motion.div>
          </div>
        </div>
      </Styles>
    </AppTemplate>
  );
};

export default Home;
