import React from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';

import Form from './Form'

class Business extends React.Component{
  constructor() {
    super();
    this.state = {
      name: "Apple"
    }
  }

  routeChange=()=> {
    let path = Form;
    let history = useHistory();
    history.push(path);
  }

  render() {
    const foods =[{'name':'Sugar', 'price':'$4'}, {'name': 'Rice', 'price':'$2'}, {'name': 'Laptop', 'price':'$0.60'}, {'name': 'Curry', 'price':'$0.09'}]
    return (
            <div className="contentWrapper">
              <div className="jumbotron">
                <h1>Welcome Back {this.state.name}</h1>
                <h3>View your inventory and curated care packages</h3>
                <div className="alert"><strong>Note: </strong>The data here is static for the sake of the hackathon. This would a separate flow only accessible to businesses</div>              
              </div>
              <div className="cardWrapper">
                { 
                  foods.map(
                    (item, index) => ( 
                        <div className="card" key={index}>
                          <h4 className="cardTitle">{item.name}</h4>
                          <p className="cardDescription">
                            <ul>
                              <li>Item Description</li>
                              <li>Lorem Ipsum</li>
                              <li>Lorem Ipsum</li>
                              <li>Lorem Ipsum</li>
                              <li>Price {item.price}</li>
                            </ul>
                          </p>
                        </div>
                    )
                  )
                }
              </div>
                <div className="buttonWrapper">
                  <button type="button" className="primaryButton" align="center" onClick={this.routeChange}>
                      Create New Item
                  </button>
                </div>
            </div>
    );
  }
}

export default Business;