
import './App.css';
import { userState, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import AboutView from './Aboutview';
import { Routes, Route } from 'react-router-dom';
import SearchView from './SearchView';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [serachText, setSearchText] = useState('');
  return (
    <div>
      <Navbar searchText={serachText} setSearchText={setSearchText} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path='/search' element={<SearchView keyword={serachText} searchResults={searchResults} />} />

      </Routes>

    </div>
  );
}

export default App;
