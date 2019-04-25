import React, { Component } from 'react';

const API = 'https://api.scryfall.com/cards/random'


class Frame extends Component {
   
  constructor() {

    super();
    
    this.state = {
    randomImg: ''
   };

   this.fetchCard = this.fetchCard.bind(this);
  } 

  componentDidMount() {
    this.fetchCard()
  }

  fetchCard() {
    fetch('https://api.scryfall.com/cards/random')
      .then(res => res.json())
      .then(
        (result) =>  {
          this.setState({
            randomImg: result.image_uris.art_crop
          })
        }
      )
  }

  render () {
    
    return (
          <div>
            <img id='mainImage' src={this.state.randomImg}></img>
            <button id='newImage' onClick={this.fetchCard}>New Image</button>
          </div>
            );
  }
}


export default Frame;