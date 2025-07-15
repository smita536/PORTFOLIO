import Navbar from './Navbar';
import Home from './Home'; 
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#070135] text-white">
      <Navbar />
      <Home />
      <section className="w-full px-4 md:px-20 py-10 space-y-20">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </section>
    </div>
  );
}

export default App;
