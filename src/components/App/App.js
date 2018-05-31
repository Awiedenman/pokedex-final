import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'
import { pokeTypesFetch } from '../../apiCalls';

class App extends Component {

  componentDidMount(){
    const url = 'http://localhost:3001/types';
    const pokeTypes = pokeTypesFetch(url)
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}


export default App;
