export default class Creator {
  static filmsCreator(element) {
    let newDiv = document.createElement("div");
    newDiv.classList = "movies";
    newDiv.innerHTML = `
          <div class="movies-title">${element.title}</div>
          <div class="movies-text">${
            element.opening_crawl
          }</div>
        `;
    container.appendChild(newDiv);
  }
  static peopleCreator(element) {
    let newDiv = document.createElement("div");
    newDiv.classList = "people";
    newDiv.innerHTML = `
          <div class="people-name">${element.name}</div>
          <div class="people-details">
            <div><span>Height:</span> ${element.height}</div>
            <div><span>Mass:</span> ${element.mass}</div>
            <div><span>Birth Year:</span> ${element.birth_year}</div>
          </div>
        `;
    container.appendChild(newDiv);
  }

  static planetsCreator(element) {
    let newDiv = document.createElement("div");
    newDiv.classList = "planets";
    newDiv.innerHTML = `
          <div class="planets-name">${element.name}</div>
          <div class="planets-details">
            <div><span>Climate:</span> ${element.climate}</div>
            <div><span>Diameter:</span> ${element.diameter}</div>
            <div><span>Population:</span> ${element.population}</div>
          </div>
        `;
    container.appendChild(newDiv);
  }
  static speciesCreator(element) {
    let newDiv = document.createElement("div");
    newDiv.classList = "spicies";
    newDiv.innerHTML = `
          <div class="species-name">${element.name}</div>
          <div class="species-details">
            <div><span>classification:</span> ${element.classification}</div>
            <div><span>language:</span> ${element.language}</div>
            <div><span>Skin Color:</span> ${element.skin_colors}</div>
          </div>
        `;
    container.appendChild(newDiv);
  }

  static starshipsCreator(element) {
    let newDiv = document.createElement("div");
    newDiv.classList = "starships";
    newDiv.innerHTML = `
          <div class="starships-name">${element.name}</div>
          <div class="starships-details">
            <div><span>Model:</span> ${element.model}</div>
            <div><span>Mnufacturer:</span> ${element.manufacturer}</div>
            <div><span>Crew capacity:</span> ${element.crew}</div>
          </div>
        `;
    container.appendChild(newDiv);
  }
  static vehicleCreator(element) {
    let newDiv = document.createElement("div");
    newDiv.classList = "vehicle";
    newDiv.innerHTML = `
        <div class="vehicle-name">${element.name}</div>
        <div class="vehicle-details">
          <div><span>Model:</span> ${element.model}</div>
          <div><span>Mnufacturer:</span> ${element.manufacturer}</div>
          <div><span>Crew capacity:</span> ${element.crew}</div>
        </div>
        `;
    container.appendChild(newDiv);
  }


//   static textWrapper(element, maxLength) {
//     if (element.length > maxLength) {
//         element = element.substring(0, maxLength) + "..."
//         return element;
//     }
// } ne rab neso
}
