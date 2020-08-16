import React, {useState, useEffect} from 'react';
import noResultsImage from '../images/noResults.svg';
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
        <h3>Browse carepackes from your local businesses by searching for your postcode</h3>
        <div className="alert"><strong>Note: </strong>The data here is static for the sake of the hackathon. Try search for 2000, 2141, 2295, 3123, 2010, 2800, or any other postcode in the mock/business_abr.json file.</div>
        <input className="search" placeholder="Search for your postcode" onChange={handleInput}></input>
        <button className="searchButton" onClick={handleSearch}>Search</button>
      </div>
      { 
        hasSearch  ? (packages.length > 0 ? 
          <div className="cardWrapper">
            { 
              packages.map(
                (item, index) => ( 
                    <div className="card" key={index}>
                      <h4 className="cardTitle">{item.MainEntity.NonIndividualName.NonIndividualNameText.toLowerCase()} carepackage</h4>
                      <p className="cardDescription">
                        <ul>
                          <li>Lorem Ipsum</li>
                          <li>Lorem Ipsum</li>
                          <li>Lorem Ipsum</li>
                          <li>Lorem Ipsum</li>
                          <li>Lorem Ipsum</li>
                          <li>Lorem Ipsum</li>
                        </ul>
                      </p>
                    </div>
                )
              )
            }
          </div> : 
        <div className="noResults">
          <h4>No results found</h4>
          <img alt="Landscape" src={noResultsImage} width="250px"/>
        </div>
         ) : ''
      }
    </div>
  );
}

export default Browse;
