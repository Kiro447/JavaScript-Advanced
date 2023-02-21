import Creator from "./creator.js";

const api = {
    url:"https://swapi.dev/api/",
    films:"films/",
    people:"people/",
    planets:"planets/",
    species:"species/",
    starships:"starships/",
    vehicles:"vehicles/"
  }
  


async function getStoreData(category, cardCreator) {
    try {
      const response = await fetch(`${api.url}${category}`);
      const data = await response.json();
      console.log(data.results);
      let mainData = data.results;
      container.innerHTML = '';
      for (let element of mainData) {
        cardCreator(element);
      }
      return mainData;
    } catch (e) {
      console.log("Error fetching data", e);
    }
  }
  
  let container = document.getElementById('container')
  

  
  let films = document.getElementById('films')
  let people = document.getElementById('people')
  let planets = document.getElementById('planets')
  let species = document.getElementById('species')
  let starships = document.getElementById('starships')
  let vehicles = document.getElementById('vehicles')
  

  
  films.addEventListener('click',()=>{
    getStoreData(api.films, Creator.filmsCreator)
  })
  
  people.addEventListener('click',()=>{
    getStoreData(api.people, Creator.peopleCreator)
  })
  
  planets.addEventListener('click',()=>{
    getStoreData(api.planets, Creator.planetsCreator)
  })
  
  species.addEventListener('click',()=>{
    getStoreData(api.species, Creator.speciesCreator)
  })
  
  starships.addEventListener('click',()=>{
    getStoreData(api.starships, Creator.starshipsCreator)
  })
  
  vehicles.addEventListener('click',()=>{
    getStoreData(api.vehicles, Creator.vehicleCreator)
  })
  