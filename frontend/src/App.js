import './App.css';
// import '../public/css/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './components/Home';
import AboutUsPage from './components/About';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
