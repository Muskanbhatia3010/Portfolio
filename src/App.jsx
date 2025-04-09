import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './templates/Home';
import ProjectPage from './templates/Projectpage';
import './assets/styles/component/_app.scss';


function App() {

  return (
    <>
      <div className='app-layout'>  
        <Header />
        <main className='right-panel'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;