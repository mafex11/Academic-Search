import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');
  const [isAcademic, setIsAcademic] = useState(true);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    // Perform search logic here
  };

  const handleToggle = () => {
    setIsAcademic(!isAcademic);
  };

  return (

    <div className="app-container">
      
      <div className="search-bar">

      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
      />

      <div className="toggle-container">
          <label className="switch">
          <input type="checkbox" checked={isAcademic} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>

        <div className="toggle-label">
        Academic
        </div>
        </div>
      </div>

      <div className="search-button">
        <button onClick={() => console.log('Search:', searchText)}>Search</button>
      </div>

    </div>

  );

}

export default App;
