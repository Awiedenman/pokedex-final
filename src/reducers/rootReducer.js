import { combineReducers } from 'redux'
import fakeReducer from './fake-reducer'

const rootReducer = combineReducers({
  pokeTypes: pokeReducer
})

export default rootReducer
