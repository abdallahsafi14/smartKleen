import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/layout";
import PathConstants from "./pathConstants";
import AboutUs from "../pages/aboutUs";
import Contacts from "../pages/Contacts";
import Service from "../components/Service";
import OurWorks from "../pages/OurWorks";

const Home = lazy(() => import("../pages/home"));

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      errorElement: <Navigate to={PathConstants.Home} replace />,
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
        {
          path: PathConstants.OurWorks,
          element: <OurWorks />,
        },
        {
          path: "*",
          element: <Navigate to={PathConstants.Home} replace />,
        },
      ],
    },
  ],
  { future: { v7_startTransition: true } }
);

export default router;
