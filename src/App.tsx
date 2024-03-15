import './App.css'
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Welcome from "./components/Welcome.tsx";
import Card from "./components/Card.tsx";

function App() {

  return (
      <>
          <Header />
          <main>
              <Welcome />
              <Card />
          </main>
          <Footer />
      </>
  )
}

export default App
