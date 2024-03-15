import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Welcome from "../components/Welcome.tsx";

const Home = () => {
  return (
    <>
        <Header/>
        <main>
            <Welcome />
        </main>
        <Footer />
    </>
  );
}
export default Home;