import { useLoaderData } from "react-router-dom";
import Banner from "./shared/banner/Banner";
import Navbar from "./shared/navbar/Navbar";

import Footer from "./shared/footer/Footer";
import SaleCards from "./SaleCards";
import OurTeam from "../components/OurTeam";


const Home = () => {
    const cards = useLoaderData()
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="text-center mt-8">
                <h1 className="text-4xl font-semibold">Our Sale and Rent Property</h1>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                {
                    cards.map(aCards =><SaleCards key={aCards.id} cards={aCards}></SaleCards>)
                }
            </div>
            <div className="mt-10">
            <OurTeam></OurTeam>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;