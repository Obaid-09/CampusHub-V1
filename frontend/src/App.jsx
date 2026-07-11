import Footer from "./Components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./Components/common/ScrollToTop";
function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <AppRoutes />
            <Footer/>
        </>
    );
}

export default App;
