import { useParams } from "react-router-dom";
import ServiceGallery from "../Service-gallery";
import { galleryData } from "../../dummyData/galleryData";
import { cleanServices } from "../../dummyData/cleanServices";
import styled from "styled-components";
import AppTemplate from "../app-template";

const Service = () => {
  const { serviceName } = useParams();

  const gallery = galleryData.find((g) => g.serviceKey === serviceName);

  const service = cleanServices.find(
    (s) => s.name.toLowerCase().replace(/\s+/g, "-") === serviceName
  );

  if (!service) return <NotFound>Service not found</NotFound>;

  return (
    <AppTemplate
      pageTitle={serviceName}
      navbar={true}
      footer={true}
      SEOPageName={serviceName}
    >
    <Wrapper>
      <ContentCard>
        <ImageContainer>
          <img src={service.image} alt={service.name} />
        </ImageContainer>
        <Info>
          <h1>{service.name}</h1>
          <p>{service.description}</p>
        </Info>
      </ContentCard>

      <GallerySection>
        <h2>Gallery</h2>
        <ServiceGallery images={gallery?.items || []} />
      </GallerySection>
    </Wrapper>
    </AppTemplate>
  );
};

export default Service;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-bottom: 10px;
  img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Info = styled.div`
  flex: 2;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #222;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }
  @media (max-width:768px){
    p {
      text-align: center;
    }

  }
`;

const GallerySection = styled.div`
  margin-top: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #222;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  font-size: 1.5rem;
  color: #888;
`;
