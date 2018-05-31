import { combineReducers } from 'redux'
import { fakeReducer } from './fake-reducer'
import { pokeReducer } from './pokeReducer';

const rootReducer = combineReducers({
  fake: fakeReducer,
  pokeTypes: pokeReducer
})

export default rootReducer
