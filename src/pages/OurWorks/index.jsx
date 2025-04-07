import AppTemplate from "../../components/app-template";
import ServiceGallery from "../../components/Service-gallery";
import { galleryData } from "../../dummyData/galleryData";
import { Styles } from "./Styles";
import { motion } from "framer-motion";

export default function OurWorks() {
  console.log("Gallery Data:", galleryData); // Add this line
  console.log("First image before:", galleryData[0]?.before); // Check first image
  console.log("First image after:", galleryData[0]?.after); // Check first image

  return (
    <AppTemplate
      pageTitle="Our Works"
      navbar={true}
      footer={true}
      SEOPageName="Our Works"
    >
      <Styles>
        <div className="ourWorks-wrapper">
          <motion.div
            className="ourWorks-header"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>Some Of Our Works</h2>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiceGallery images={galleryData || []} />
          </motion.div>
        </div>
      </Styles>
    </AppTemplate>
  );
}
