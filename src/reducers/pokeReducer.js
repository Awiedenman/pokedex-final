export const pokeReducer = (state=[], action) => {
  switch (action.type) {
    case 'POKE_TYPE_ACTION':
    return action.payload
  default:
    return state;
  }
};


