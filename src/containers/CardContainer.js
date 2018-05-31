import React from 'react';
// import Redux from 'redux';
import { connect } from 'react-redux';
// import { Card } from './Card';



export const CardContainer = ({pokeTypes}) => {
  console.log(pokeTypes)
  // const createCards = pokeTypes.map( type =>{
  // })
  return(
    <div>
      {/* {createCards}*/}
    </div>
  )
}

const mapStateToProps = (state) =>({
  pokeTypes: state.pokeTypes
})

export default connect(mapStateToProps)(CardContainer)