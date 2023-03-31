import React, { Component } from 'react'

export class Index extends Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>
            See all the pokemon
        </h1>
      </div>
    )
  }
}

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

module.exports = Index;