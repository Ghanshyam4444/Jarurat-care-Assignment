import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/layout/navbar";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/layout/footer";
import GetAllServices from "./pages/GetAllServices";
import { Home } from "./pages/Home";
import SeeFullDetail from "./pages/SeeFullDetail";
import EditServiceDetail from "./pages/EditServiceDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="get_all_services" element={<GetAllServices />} />
          <Route
            path="get_all_services/:id/seemore"
            element={<SeeFullDetail />}
          />
          <Route
            path="get_all_services/:id/edit"
            element={<EditServiceDetail />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
