const URL_ROOT = 'http://localhost:3004'

export function getCars(keywords){

  const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`, {method: 'GET'})
  .then(response => response.json()) //grab response and fetch the json data we need
  

  return {
    type: 'SEARCH_CARS',
    payload: request
  }
}
