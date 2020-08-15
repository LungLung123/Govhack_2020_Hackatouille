import React, {useState, useEffect} from 'react';
import '../App.css';

let data = require('../mock/business_abr.json');

function Browse() {
  const [packages, setPackages] = useState([]);
  const [filter, setFilter] = useState([]);
  const [hasSearch, setHasSearch] = useState(false);

  const handleInput = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
    //console.log(event.target.value);
    
  }

  const handleSearch = (event) => {
    event.preventDefault();
    
    console.log(JSON.parse(JSON.stringify(data)));
    let filteredPackages = data.ABR.filter(item => item.MainEntity.BusinessAddress.AddressDetails.Postcode === filter);
    setPackages(filteredPackages)
    setHasSearch(true)
    //console.log("filteredPackages", filteredPackages)
    
  }

  return (
    <div className="contentWrapper">
      <div className="jumbotron">
        <h1>Browse carepackages</h1>
        <input className="search" placeholder="Search for a carepackage" onChange={handleInput}></input>
        <button className="searchButton" onClick={handleSearch}>Search</button>
      </div>
      { 
        hasSearch  ? (packages.length > 0 ? 
        packages.map(
          (item, index) => ( 
              <div className="card" key={index}>
                <h2 className="cardTitle">{item.MainEntity.NonIndividualName.NonIndividualNameText}</h2>
                <p className="cardDescription">{}</p>
              </div>
        )
        ) : 'No results found' ) : ''
      }
    </div>
  );
}

export default Browse;
