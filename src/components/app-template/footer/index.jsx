import React from "react";
import styled from "styled-components";
import logo from "../../../assets/images/logo.png"; 

const Footer = () => {
  return (
    <Styles>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="Site Logo" />
          </div>

          <div className="footer-contact-info">
            <p>Email: smartkleen24@gmail.com</p>
            <p>Phone: 647-608-1111</p>
          </div>

          <div className="footer-copyright">
            <p>© 2024 smartkleeninc.ca</p>
          </div>
        </div>
      </footer>
    </Styles>
  );
};

export default Footer;

const Styles = styled.div`
  .footer {
    background-color: #2c3e50;
    color: white;
    padding: 1.2rem 1rem;
  }

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .footer-logo img {
    height: 60px;
  }

  .footer-contact-info {
    font-size: 0.95rem;
    text-align: left;
  }

  .footer-contact-info p {
    margin: 0.2rem 0;
  }

  .footer-copyright {
    font-size: 0.95rem;
    text-align: right;
  }

  .footer-copyright p {
    margin: 0.2rem 0;
  }

  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      text-align: center;
    }

    .footer-contact-info,
    .footer-copyright {
      text-align: center;
    }
  }
`;
