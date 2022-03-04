import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio"
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
      <Portfolio />
      <Testemonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
