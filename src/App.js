import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SmLinks from './components/SmLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SmLinks />
      <About />
      <Portfolio />
      <Experience />
    </>
  );
}

export default App;
