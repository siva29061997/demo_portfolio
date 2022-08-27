import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/intro/intro.css"
import { Link } from "react-scroll";
import Skills from "./components/skills/Skills";
import './App.css'


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    
      <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <div className="header">
        
      </div>
      <Toggle />
      <Intro />
      <About />
      <Skills />
      <ProductList />
      <Contact />
    </div>
  
  );
};

export default App;
