import React, { Component } from 'react'
import { WeightContext } from './Weight';

export default class Person2 extends Component {
  render() {
    return (
      <div>
        <h2>Hello jigar !! Do you have 
        <WeightContext.Consumer>
          {(value)=>value}
        </WeightContext.Consumer>
        Kg Weight?
        </h2>
      </div>
    )
  }
}

