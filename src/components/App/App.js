import React, { Component } from 'react';
import { connect } from'react-redux';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'
import { pokeTypesFetch } from '../../apiCalls';
import { pokeTypesAction } from '../../actions/index';


class App extends Component {

  async componentDidMount(){
    const url = 'http://localhost:3001/types';
    const pokeTypes = await pokeTypesFetch( url )
    const resolvedTypes = Promise.resolve(pokeTypes)
    this.props.sendPokeType( pokeTypes )
  console.log(resolvedTypes);
  
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

const mapDispatchToProps = (dispatch) => ({
sendPokeType: ( pokeTypes ) => dispatch(pokeTypesAction( pokeTypes ))
})

export default connect(null, mapDispatchToProps)(App);
