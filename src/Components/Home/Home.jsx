import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>THis is the home page</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;