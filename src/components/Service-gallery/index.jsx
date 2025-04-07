import PropTypes from "prop-types";
import styled from "styled-components";

export default function ServiceGallery({ images }) {
  return (
    <Gallery>
      {images.map((pair, index) => (
        <ImagePair key={index}>
          <h4>{pair.label}</h4>
          <ImageGrid>
            <ImageBlock>
              <p>Before</p>
              <StyledImage src={pair.before} alt={`Before - ${pair.label}`} />
            </ImageBlock>
            <ImageBlock>
              <p>After</p>
              <StyledImage src={pair.after} alt={`After - ${pair.label}`} />
            </ImageBlock>
          </ImageGrid>
        </ImagePair>
      ))}
    </Gallery>
  );
}

ServiceGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      before: PropTypes.string.isRequired,
      after: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Styled Components
const Gallery = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ImagePair = styled.div`
  background: #f9f9f9;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #333;
  }
`;

const ImageGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
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

const StyledImage = styled.img`
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;
