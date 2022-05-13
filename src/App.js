import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="">

      <Navbar />

      <Hero />

      <div className="h-screen"></div>

      <About />

      <Services />

      <Portfolio />

    </div>
  );
}

export default App;
