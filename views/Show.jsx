import React, { Component } from 'react'
import pokemon from '../models/pokemon';

export class Show extends Component {

    
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div style={myStyle}>
        <h1>
            Gotta catch them all!
        </h1>
        <h2>{pokemon.image}</h2>
        <img src={pokemon.img + '.jpg'} alt={pokemon.name} />
        <h3><a href='http://localhost:3000/pokemon/'>BACK</a></h3>
      </div>
    )
  }
}

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

module.exports = Show;