import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Education from "./pages/Education";
import Skill from "./pages/Skill";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
