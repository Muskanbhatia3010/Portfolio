import { Route, Routes, Link, NavLink } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './templates/Home';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;