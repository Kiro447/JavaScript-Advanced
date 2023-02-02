const apiParameters = {
  globalCity: `Skopje`,
  apiKey: `74e59f6374abe0d9b758877616ae444c`,
  apiFirstUrl: `https://api.openweathermap.org/data/2.5/onecall`,
  apiSecondUrl: `https://api.openweathermap.org/data/2.5/forecast`,
  imgUrl: ` http://openweathermap.org/img/wn/`,
};

let div = document.getElementById("container");

const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          return resolve(position);
        },
        (err) => {
          return reject(err);
        }
      );
    } else {
      return reject("Geolocation is not supported by this browser.");
    }
  });
};

function cardCreator(data) {
  for (let i = data.hourly.length - 1; i > 0; i--) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("div");
    newDiv.innerHTML = `
        <h1>Card ${i}</h1>
        <h1>${data.timezone}</h1>
        <h1>DayTime ${new Date(data.hourly[i].dt * 1000)}</h1>
        <h1>Temperature ${data.hourly[i].temp}</h1>
        <h1>Feels Like ${data.hourly[i].feels_like}</h1>
        <h1>Pressure ${data.hourly[i].pressure}</h1>
        <h1>Humidity ${data.hourly[i].humidity}</h1>
        <br>
    `;
    newDiv.style.border = "1px solid black";
    newDiv.style.width = "1100px";
    div.after(newDiv);
    // div.innerHTML = `
    // <h1>Temperature ${data.current.temp}</h1>
    // <h1>TimeZone: ${data.timezone}</h1>

    // `;
  }
}

function setData(key, data) {
  let dataToSave = typeof data == "object" ? JSON.stringify(data) : data;

  localStorage.setItem(key, dataToSave);
}

function getData(key) {
  let dataToReturn;

  dataToReturn = localStorage.getItem(key);

  try {
    dataToReturn = JSON.parse(dataToReturn);
  } catch (e) {
    console.log(e);

    dataToReturn = dataToReturn;
  }

  return dataToReturn;
}

function getDataFromURLorLocal(url) {
  return new Promise((resolve, reject) => {
    const localData = getData(url);

    if (!localData) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          setData(url, data);
          console.log(data);
          resolve(data);
        });
    } else {
      console.log(localData);
      resolve(localData);
    }

  });
}

getLocation()
  .then((position) => {
    const { latitude, longitude } = position.coords;
    return getDataFromURLorLocal( 
      `${apiParameters.apiFirstUrl}?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiParameters.apiKey}&exclude=minutely`
    );
  })
  .then((data) => {
    console.log(data);
    // console.log(data.daily[0].dt);
    // console.log(data.hourly[0].length);
    cardCreator(data);
  });
