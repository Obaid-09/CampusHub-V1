import Footer from "./Components/layout/Footer";
import Navbar from "./Components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./Components/common/ScrollToTop";
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom";

// function App() {
//   return <h1>Hello World</h1>;
// }

// export default App;
