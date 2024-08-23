


















import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Web from "./pages/Web";
import Mobile from "./pages/Mobile";
import Pos from "./pages/Pos";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<Web />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/pos" element={<Pos />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route element={<PrivateRoute/>}>
          <Route path="/admin-panel" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
