import React, { Component, createContext } from 'react'
import axios from 'axios'

const Context = createContext()

export default class ArrayProvider extends Component {

  state = {
    data: []
  }

  fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
    this.setState({
      data: response.data
    })
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, getImages: this.fetchData }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const ArrayConsumer = Context.Consumer;