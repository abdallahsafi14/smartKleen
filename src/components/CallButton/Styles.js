import styled from "styled-components";

export const Styles = styled.div`
  .button-container-com {
    display: inline-block;
  }

  .call-link-com {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    background-color: #007bff;
    border: 2px solid #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }

  .call-link-com:hover {
    background-color: transparent;
  }
  .mobile-call {
    display: none;
  }
  .desktop-contact {
    display: flex;
  }

  @media (max-width: 768px) {
    .mobile-call {
      display: flex;
    }
    .desktop-contact {
      display: none;
    }
  }
`;
