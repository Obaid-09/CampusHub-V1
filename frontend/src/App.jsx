import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
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
