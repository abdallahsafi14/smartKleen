import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function ServiceGallery({ images }) {
  const column1 = images.filter((_, index) => index % 2 === 0);
  const column2 = images.filter((_, index) => index % 2 !== 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imagePairVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <GalleryContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <GalleryColumn variants={columnVariants}>
        {column1.map((pair, index) => (
          <ImagePair
            key={index}
            variants={imagePairVariants}
            whileHover="hover"
          >
            <ImageGrid>
              <ImageBlock>
                <p>Before</p>
                <StyledImage
                  src={pair.before}
                  alt={`Before`}
                  variants={imageVariants}
                  whileHover="hover"
                />
              </ImageBlock>
              <ImageBlock>
                <p>After</p>
                <StyledImage
                  src={pair.after}
                  alt={`After`}
                  variants={imageVariants}
                  whileHover="hover"
                />
              </ImageBlock>
            </ImageGrid>
          </ImagePair>
        ))}
      </GalleryColumn>
      <GalleryColumn variants={columnVariants}>
        {column2.map((pair, index) => (
          <ImagePair
            key={index}
            variants={imagePairVariants}
            whileHover="hover"
          >
            <ImageGrid>
              <ImageBlock>
                <p>Before</p>
                <StyledImage
                  src={pair.before}
                  alt={`Before`}
                  variants={imageVariants}
                  whileHover="hover"
                />
              </ImageBlock>
              <ImageBlock>
                <p>After</p>
                <StyledImage
                  src={pair.after}
                  alt={`After`}
                  variants={imageVariants}
                  whileHover="hover"
                />
              </ImageBlock>
            </ImageGrid>
          </ImagePair>
        ))}
      </GalleryColumn>
    </GalleryContainer>
  );
}

const GalleryContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  @media (min-width: 992px) {
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

const GalleryColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const ImagePair = styled(motion.div)`
  background: #f9f9f9;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const ImageGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageBlock = styled.div`
  flex: 1;
  min-width: 250px;
  text-align: center;

  p {
    font-weight: 600;
    color: #666;
    margin-bottom: 0.75rem;
  }
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

ServiceGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      before: PropTypes.string.isRequired,
      after: PropTypes.string.isRequired,
    })
  ).isRequired,
};
