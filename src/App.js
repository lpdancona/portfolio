import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
import Experience from "./PortfolioContainer/Experience/Experience";
import About from "./PortfolioContainer/Home/About";
import Skills from "./PortfolioContainer/Home/Skills";
import Projects from "./PortfolioContainer/Home/Projects";
function App() {
  return (
    <div className="App">
      <Profile />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
