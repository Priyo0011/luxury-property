import Cards from "./Cards";
import Banner from "./shared/banner/Banner";
import Navbar from "./shared/navbar/Navbar";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Cards></Cards>
        </div>
    );
};

export default Home;