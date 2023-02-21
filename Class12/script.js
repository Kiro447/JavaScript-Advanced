const api = {
    url:"https://swapi.dev/api/",
    films:"films/",
    people:"people/",
    planets:"planets/",
    species:"species/",
    starships:"starships/",
    vehicles:"vehicles/"
  }
  
  function textWrapper(element, maxLength) {
    if (element.length > maxLength) {
        element = element.substring(0, maxLength) + "..."
        return element;
    }
}

  async function getStoreData(category) {
    try {
      const response = await fetch(`${api.url}${category}`);
      const data = await response.json();
      console.log(data.results);
      let mainData = data.results;
      for (let element of mainData){
        filmsCreator(element)
      }
      return mainData;
    } catch (e) {
      console.log('Error fetch');
    }
  } 
  
  let container = document.getElementById('container')
  
  function filmsCreator(element){
    let newDiv = document.createElement('div');
    newDiv.classList = 'movies';
    newDiv.innerHTML = `
      <div class="movies-title">${element.title}</div>
      <div class="movies-text">${textWrapper(element.opening_crawl,300)}</div>
    `;
    container.appendChild(newDiv);
  }
  
  let films = document.getElementById('films')
  let people = document.getElementById('people')
  let planets = document.getElementById('planets')
  let species = document.getElementById('species')
  let starships = document.getElementById('starships')
  let vehicles = document.getElementById('vehicles')
  
  films.addEventListener('click',()=>{
    getStoreData(api.films)
  })
  people.addEventListener('click',()=>{
    getStoreData(api.people)
  })
  planets.addEventListener('click',()=>{
    getStoreData(api.planets)
  })
  species.addEventListener('click',()=>{
    getStoreData(api.species)
  })
  starships.addEventListener('click',()=>{
    getStoreData(api.starships)
  })
  vehicles.addEventListener('click',()=>{
    getStoreData(api.vehicles)
  })
  