import React, { Component } from 'react';
// import Redux from 'redux';
import { connect } from 'react-redux';
import Card from './Card';



class CardContainer extends Component {
  typeCards = () => {
    console.log(this.props.pokeTypes); 
    return this.props.pokeTypes.map( type => {
      return <Card {...type} key = {type.id} />
    })
  }
  

  render(){
    return(
      <div>
        {this.typeCards()}
      </div>
    )
  }
} 
  

const mapStateToProps = (state) =>({
  pokeTypes: state.pokeTypes
})

export default connect(mapStateToProps)(CardContainer)