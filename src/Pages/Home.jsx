import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

const Home = () => {
  let cona = "foda se";

  return (
    <div>
      <Navbar />
      <SideBar />
      <Footer />
      <p> {cona} </p>
    </div>
  );
};

export default Home;
