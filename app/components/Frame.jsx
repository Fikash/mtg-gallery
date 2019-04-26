import React, { Component } from 'react';
import axios from 'axios';


const API = 'https://api.scryfall.com/cards/random'



class Frame extends Component {
   
  constructor(props) {

    super(props);
    
    this.state = {
    id: '',
    cardName: '',
    releaseDate: '',
    artCropped: '',
    artCard: '',
    artist: '',
    cardDataVisible: false,
   };


   this.fetchCard = this.fetchCard.bind(this);
   this.saveCard = this.saveCard.bind(this);
   this.toggleVisibility = this.toggleVisibility.bind(this);
  } 

  componentDidMount() {
    this.fetchCard()
  }

  fetchCard() {
    fetch('https://api.scryfall.com/cards/random')
      .then(res => res.json())
      .then(
        (result) =>  {
          console.log('anything')
          this.setState({
            id: result.id,
            cardName: result.name,
            releaseDate: result.released_at,
            artCropped: result.image_uris.art_crop,
            artCard: result.image_uris.normal,
            artist: result.artist,
            cardDataVisible: false
          })
        }
      )
  }

  saveCard() {
    let that = this;
    axios.post('http://localhost:3000/saveCard', that.state)
    .then(function(response){console.log(response.config.data)})
  }

  toggleVisibility() {
    this.setState({cardDataVisible: this.state.cardDataVisible ? false : true})
    console.log('toggling cardDataVisibible', this.state.cardDataVisible)
  }


  render () {
      return (
        <div id='littledaddy'>
            <div className='frame-div'>
              <img id='mainImage' src={this.state.artCropped} onClick={this.toggleVisibility}></img>
              <button id='newImage' onClick={this.fetchCard}>New Image</button>
              <button id='saveImage' onClick={this.saveCard}>Save Image</button>
            </div>
            <div>
              {this.state.cardDataVisible ? <CardDataDisplay artCard = {this.state.artCard}/> : ''}
            </div>
        </div>
            );
  }
}

function CardDataDisplay (props) {
    return ( 
      <div id='cardliteral-div'>
        <img id='cardliteral' src={props.artCard}></img>
      </div>
    )
  }

export default Frame;