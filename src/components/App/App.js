import React, { Component } from 'react';
import { connect } from'react-redux';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'
import { pokeTypesFetch } from '../../apiCalls';


class App extends Component {

  componentDidMount(){
    const url = 'http://localhost:3001/types';
    const pokeTypes = pokeTypesFetch( url )
    this.props.sendPokeType( pokeTypes )
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

const mapDispatchToProps = (dispatch) => {
sendPokeType: ( pokeTypes ) => dispatch(pokeTypesAction( pokeTypes ))
}

export default connect(null, mapDispatchToProps)(App);
