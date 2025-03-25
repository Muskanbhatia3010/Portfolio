import { Route, Routes, Link, NavLink } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './templates/Home';

function App() {

  return (
    <>
      <div className='app-layout'>  
       <div className='left-panel'> <Header /></div>
       <div className='right-panel'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        <Footer />
       </div>
      </div>
    </>
  );
}

export default App;