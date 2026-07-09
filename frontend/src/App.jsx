import Footer from "./Components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <>
            <Navbar />
            <AppRoutes />
            <Footer/>
        </>
    );
}

export default App;
