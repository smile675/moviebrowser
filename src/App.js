
import './App.css';
import { userState, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import AboutView from './Aboutview';
import { Routes, Route } from 'react-router-dom';
import SearchView from './SearchView';
import MovieView from './components/MovieView';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // console.log(searchText, "is the search text")
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=4120e79ef2bdc889c46a62aebbe33f5a&language=en-US&query=${searchText}&page=1`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path='/search' element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path='/movie:id' element={MovieView} />

      </Routes>

    </div>
  );
}

export default App;
