import React from "react";
import AppTemplate from "../../components/app-template";
import PageNotFoundComponent from "../../components/errors-components/page-not-found";


const PageNotFound = () => {

  return (
    <AppTemplate pageTitle={"Page Not Found"}>
      <PageNotFoundComponent />
    </AppTemplate>
  );
};

export default PageNotFound;
