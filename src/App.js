import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainProject from "./components/Portfolio"
import Testemonials from "./components/Testemonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About  />
      <Experience />
      <MainProject />
      <Testemonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
