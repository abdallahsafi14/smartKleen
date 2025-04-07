import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import PageNotFound from "../pages/page-not-found";
import PathConstants from "./pathConstants";
import AboutUs from "../pages/aboutUs";
import Contacts from "../pages/Contacts";
import Service from "../components/Service";

const Home = lazy(() => import("../pages/home"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: PathConstants.Home,
        element: <Home />,
      },
      {
        path: PathConstants.AboutUs,
        element: <AboutUs />,
      },
      {
        path: PathConstants.Contacts,
        element: <Contacts />,
      },
      {
        path: PathConstants.Service,
        element: <Service />,
      },
     
    
    ],
  },
 
], { future: { v7_startTransition: true } });

export default router;
