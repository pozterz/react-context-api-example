import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Timeline from './components/Timeline'
import DataProvider from './context/DataProvider'
import ArrayProvider from './context/ArrayProvider'

import First from './components/context_example/First'

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <DataProvider>
        <ArrayProvider>
          <Navbar isOpen={this.state.isOpen} toggle={this.toggle.bind(this)} />
          <Container fluid className="view p-0">
            <Sidebar/>
            <Timeline className="w-75" />
          </Container>
          <hr/>
          <h3>Context API Example</h3>
          <First/>
        </ArrayProvider>
      </DataProvider>
    );
  }
}

export default App;
