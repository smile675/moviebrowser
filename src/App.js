
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import AboutView from './Aboutview';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />

      </Routes>

    </div>
  );
}

export default App;
