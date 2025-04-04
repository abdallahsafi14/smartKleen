import AppProvider from "./components/app-provider";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 
  return (
    <AppProvider>
    

      <RouterProvider router={router} />
     
      {/* <ToastContainer /> */}
    </AppProvider>
  );
}

export default App;