import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pokeTypesFetch } from '../apiCalls';
import { pokeIdFetch } from '../apiCalls';



class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }

handleCardClick = (e) => {
  this.setState({ active: !this.state.active })
  if(this.state.active){
    pokeIdFetch(this.props.pokeTypes)
  }
  
}

  render() {
    const { id, name, pokemon} = this.props

    return(
      <div onClick={this.handleCardClick}>
        <h1>{name}</h1>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => ({
  pokeTypes : state.pokeTypes
})

export default connect(mapStateToProps)(Card)