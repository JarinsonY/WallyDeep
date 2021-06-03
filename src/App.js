import { useState } from 'react';
import './App.css';
import HeaderApp from './components/HeaderApp';
import ListOfPics from './components/ListOfPics';
import SearchBar from './components/SearchBar';

function App() {

  const [keyword, setKeyword] = useState('')

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    setKeyword(e.target.value);
  }

  return (
    <div className="App">
      <HeaderApp />
      <div className="search-bar">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search your photos..."
          value={keyword}
          className="search-input"
        />
        <button onClick={handleSubmit} type="submit" className="search-btn">
          Search
        </button>
      </div>
      {/* <SearchBar /> */}
      {/* <button onClick={() => setKeyword('Futbol')}>Cambiar</button> */}
      <ListOfPics keyword={keyword} />
    </div>
  );
}

export default App;
