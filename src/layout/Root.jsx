/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";

export default function Root({ children }) {

    return (
        <div className="bg-gray-100">
            <Header />
            <main className="container mx-auto">
                <Slider />
                { children }
            </main>
            <Footer />
        </div>
    )
}
