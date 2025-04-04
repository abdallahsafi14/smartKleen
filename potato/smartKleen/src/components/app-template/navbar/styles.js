import styled from "styled-components";

export const NavbarContainer = styled.nav`
  .navbar {
    padding: 1rem 0;
    background-color: #2c3e50;
  }

  .container {
    justify-content: space-between;
    margin: 0 auto;
    max-width: 100%;
    padding: 0 2rem;
  }

  .navbar-brand {
    padding: 0;
    img {
      height: 60px;
    }
  }
 @media (max-width:768px){
  .navbar-brand {
    img {
      height: 40px;
    }
  }
 }
  .nav-content {
    a {
      color: white !important;
      font-weight: 500;
      position: relative;
      padding: 0.5rem 0;
      margin: 0 1rem;
      transition: all 0.3s ease;

      @media (min-width: 992px) {
     
        &::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #3498db;
          transition: width 0.3s ease;
        }

        &:hover::after {
          width: 100%;
        }
      }

      &.active {
        color: #3498db !important;
        font-weight: 600;

        &::after {
          width: 100% !important;
          background-color: #3498db;
        }
      }
    }
  }

  .navbar-toggle {
    border: none;
    color: white !important;
    padding:0;
    
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
    }

    @media (max-width:768px){
      .navbar-toggler-icon {
        width:25px;
        height:25px;
      }

    }
    
    &:focus {
      box-shadow: none;
    }
  }

  .navbar-nav {
    gap: 1.5rem;
    
    @media (max-width: 992px) {
 
      flex-direction: column;
      text-align: center;
      background-color: #2c3e50;
      padding: 1rem;
      margin-top: 1rem;
      border-radius: 0.5rem;
      
      a {
        color: white !important;
        
        &:hover {
          background-color: rgba(255,255,255,0.1);
          border-radius: 0.25rem;
        }

        &.active {
          color: #3498db !important;
          background-color: rgba(52, 152, 219, 0.1);
        }
      }
    }
  }
  a{
    text-decoration: none;
    margin:0;
  }
`;