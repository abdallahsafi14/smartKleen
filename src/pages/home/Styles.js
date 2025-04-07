import styled from "styled-components";

export const Styles = styled.div`
  .carousel-wrapper {
    overflow: hidden;
    max-width: 100%;
    padding: 2rem;
    margin: 0 auto;
  }

  .carousel-header {
    text-align: center;
    font-family: "GOTHIC";
  }

  .services-carousel .p-carousel-item {
    display: flex;
    justify-content: center;
    padding: 1rem 0.5rem;
    box-sizing: border-box;
  }

  .service-card {
    width: 100%;
    max-width: 340px;
    min-height: 350px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100%; /* Ensure full height */
  }

  .image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0; /* Prevent image from shrinking */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .text-content {
    padding: 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Take remaining space */
  }

  .service-title {
    color: #2c3e50;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .service-description {
    color: #7f8c8d;
    font-size: 0.9rem;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* Show max 4 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.5rem;
    flex-grow: 1; /* Fill available space */
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  .call-link {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    border: 2px solid #007bff;
    font-weight: 500;
    text-align: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: transparent;
      color: #007bff;
    }
  }

  .Commercial {
    padding: 3rem 1rem;
    background-color: #f9f9f9;
  }

  .commercial-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .commercial-image,
  .commercial-text {
    flex: 1 1 48%;
  }

  .commercial-image img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
  }

  .commercial-text h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  .commercial-text h3 {
    font-size: 1.4rem;
    color: #34495e;
    margin-bottom: 1rem;
  }

  .commercial-text p {
    color: #666;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .button-container-com {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
  }

  .call-link-com {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    border: 2px solid #007bff;
    font-weight: 500;
    text-align: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: transparent;
      color: #007bff;
    }
  }

  @media (max-width: 992px) {
    .carousel-wrapper {
      padding: 1.5rem;
    }

    .service-card {
      min-height: 320px;
    }
  }

  @media (max-width: 992px) {
    .carousel-wrapper {
      padding: 1rem;
    }

    .image-container {
      height: 180px;
    }

    .service-card {
      min-height: 300px;
      max-width: 100%;
    }

    .text-content {
      padding: 1.25rem;
    }

    .service-title {
      font-size: 1.1rem;
    }

    .service-description {
      font-size: 0.85rem;
      -webkit-line-clamp: 3; /* Show fewer lines on mobile */
    }

    .commercial-container {
      flex-direction: column;
    }

    .commercial-text {
      text-align: center;
    }

    .commercial-text h2 {
      font-size: 1.5rem;
    }

    .commercial-text h3 {
      font-size: 1.2rem;
    }

    .commercial-text p {
      font-size: 0.95rem;
    }

    .button-container-com {
      justify-content: center;
    }

    .call-link-com {
      margin-inline: auto;
    }
  }

  @media (max-width: 480px) {
    .image-container {
      height: 160px;
    }

    .service-card {
      min-height: 280px;
    }

    .service-title {
      font-size: 1rem;
    }

    .service-description {
      font-size: 0.8rem;
      -webkit-line-clamp: 2; /* Even fewer lines on smallest screens */
    }
  }
`;
