export const pokeTypesFetch = (url) => {
  return fetch(url)
  .then( response => response.json())
  .then( data => data)
}

// export const pokeIdFetch = (id) => {
//   return fetch(`http://localhost:3001/pokemon/:${id}`)
//   .then( response => response.json())
//   .then(data => console.log(data))
// }