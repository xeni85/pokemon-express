import React, { Component } from 'react'
import pokemon from '../models/pokemon';

export class Index extends Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>
            See all the pokemon
        </h1>
        <ul>
            {pokemon.map(poke => <li key={poke.name}><a href={'http://localhost:3000/pokemon/' + pokemon.indexOf(poke).toString()}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</a><img src={poke.img + '.jpg'} /></li>)}
        </ul>
      </div>
    )
  }
}

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

module.exports = Index;