import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "process";

import "./assets/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MainApp = () => {
  return (
    <>
      <App />
    </>
  );
};

createRoot(document.getElementById("root")).render(<MainApp />);
