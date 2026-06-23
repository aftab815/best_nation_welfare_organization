import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import EventList from '../components/EventList';
import BackToTop from '../components/BackToTop';

export default function Events() {
    return (
        <>
            <Navbar />
            <EventList />
            <Footer />
            <BackToTop />
        </>
    );
}