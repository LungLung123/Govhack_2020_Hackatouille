import React from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import bannerImage from '../images/hero.png';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
    const foods =['Sugar', 'Honey', 'Ice', 'Tea']
    const Prices = ["$4", "$2", "$0.60", "$0.09" ]
    const items = []

    for (const [index, value] of foods.entries()) {
      items.push(
                  <Grid container justify="center" spacing={5}>
                    <Card className="card" key={index}>
                      <CardContent>
                        <img alt="Happy Man sitting" src={bannerImage} width="250px"/>
                        <Typography>
                          {value}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
      )
    }
    return (
            <div>
              <div className="">
                <h1>Welcome Back {this.state.name}</h1>
              </div>
              <div>
                  <h3>
                    {items}
                  </h3>
                  <button type="button" className="primaryButton" onClick={this.routeChange}>
                    Create New Item
                </button>
              </div>
            </div>
    );
  }
}

export default Business;