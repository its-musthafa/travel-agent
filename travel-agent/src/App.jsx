import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header/Header'
import Home from './Home/Home'
import Plans from './Plans/Plans'
import Gallery from './Gallery/Gallery'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {
  return (
    <Router>
      <Header />
      <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App
