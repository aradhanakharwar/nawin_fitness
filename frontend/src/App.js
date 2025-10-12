import './App.css';
// import '../public/css/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './components/Home';
import AboutUsPage from './components/About';
import Classes from './components/Classes';
import Services from './components/Services';
import BmiCalculator from './components/BmiCalculator';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bmi-calculator" element={<BmiCalculator />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
