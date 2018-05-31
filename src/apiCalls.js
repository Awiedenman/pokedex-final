export const pokeTypesFetch = (url) => {
  return fetch(url)
  .then( response => response.json())
  .then( data => data)
.catch(error => {throw error})
}

export const pokeIdFetch = (pokeTypes) => {
  const newPokes = pokeTypes.map( type => {
     fetch(`http://localhost:3001/pokemon/:${type.pokemon}`)
    .then( response => response.json())
    .then( data => data)
  })
  return Promise.all(newPokes)
  .catch(error => {throw error})
}