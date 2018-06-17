import React, { Component, createContext } from 'react'

const Context = createContext()

export default class DataProvider extends Component {

  state = {
    data: 'xD',
    name: 'Pozterz'
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const DataConsumer = Context.Consumer;