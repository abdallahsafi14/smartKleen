import React from "react";
import AppTemplate from "../../components/app-template";
import { Styles } from "./Styles";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <AppTemplate
      pageTitle="About us"
      navbar={true}
      footer={true}
      SEOPageName="About us"
    >
      <Styles>
        <div className="about-wrapper">
          <motion.div
            className="about-header"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>About Us</h2>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Smart Kleen Inc.
            </motion.h1>

            <motion.h6
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Smart Kleen Inc.
            </motion.h6>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <strong>
                At Smart Kleen Inc., we are dedicated to providing top-quality hood exhaust cleaning
                services for commercial kitchens. With years of experience in the industry, our team
                is committed to delivering exceptional results and exceeding our clients' expectations.
              </strong>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              We understand the importance of maintaining a safe and hygienic kitchen environment,
              which is why we use state-of-the-art equipment and proven cleaning techniques to remove
              grease buildup and ensure compliance with fire safety regulations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Our mission is to help businesses enhance safety, prolong equipment lifespan, and create
              healthier workspaces for their employees and customers. Whether you operate a restaurant,
              hotel, cafeteria, or any other foodservice establishment, you can rely on Smart Kleen Inc.
              for reliable and professional hood cleaning services.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Contact us today to learn more about how we can help keep your kitchen clean, safe,
              and compliant.
            </motion.p>
          </motion.div>
        </div>
      </Styles>
    </AppTemplate>
  );
};

export default AboutUs;
