import Navbar from "../components/Navbar";

import '../css/home.css';
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Landing from "../components/Landing";
import Funds from "../components/Funds";
import BackToTop from "../components/BackToTop";

export default function Home() {
    return (
        <>
            <Navbar />

            <Landing />
            <Initiatives />
            <Funds />
            <ContactForm />
            <Footer />
            <BackToTop />
        </>
    );
}