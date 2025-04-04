import styled from "styled-components";

export const Styles = styled.div`
  .footer {
    background-color: #2c3e50;
    color: white;
    padding: 2rem 1rem;
  }

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer-logo h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
  }

  .footer-info {
    text-align: right;
    font-size: 0.95rem;
  }

  .footer-info p {
    margin: 0.2rem 0;
  }

  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      text-align: center;
    }

    .footer-info {
      text-align: center;
    }
  }
`;
