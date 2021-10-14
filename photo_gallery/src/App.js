import React from 'react';
import './App.css';
import Gallery from './modules/Gallery/Gallery';
import SearchBar from './modules/SearchBar/SearchBar';

function App() {
  return (
    <div>
    <h1 style= {{textAlign: 'center'}}>Image Gallery</h1>
    <div>
        <SearchBar />
    </div>
    <div>
        <Gallery />
    </div>
    
    </div>
  );
}

export default App;
