import React, { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Footer from "./footer";
import SiteNavbar from "./navbar";
import { ChildrenContent, Styles } from "./Styles";



const AppTemplate = ({ pageTitle, navbar, footer, children }) => {
  const appName = "Smart Kleen";
  



  return (
    <HelmetProvider>
      <Styles>
        {pageTitle && (
          <Helmet>
            <title>
              {pageTitle + " | " + appName}
            </title>
          </Helmet>
        )}

<div className="main-data" > 
    {navbar && <SiteNavbar />}
    <ChildrenContent>{children}</ChildrenContent>
</div>

        {footer && <Footer />}
      </Styles>
    </HelmetProvider>
  );
};

export default AppTemplate;
