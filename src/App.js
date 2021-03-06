import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainProject from "./components/Portfolio"
import Contact from "./components/Contact"
import Jobs from "./components/Jobs";



function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About  />
      <Experience />
      <MainProject />
      <Jobs />
      <Contact />
    </div>
  );
}

export default App;
