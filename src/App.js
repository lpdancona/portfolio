import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
import Experience from "./PortfolioContainer/Experience/Experience";
import About from "./PortfolioContainer/Home/About";
import Skills from "./PortfolioContainer/Home/Skills";
function App() {
  return (
    <div className="App">
      <Profile />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
