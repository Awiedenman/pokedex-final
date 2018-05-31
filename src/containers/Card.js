import React, { Component } from 'react';
import { connect } from 'react-redux';



class Card extends Component {

  render() {
    console.log(this.props.pokeTypes)
    const { id, name, pokemon} = this.props

    return(
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => ({
  pokeTypes : state.pokeTypes
})

export default connect(mapStateToProps)(Card)