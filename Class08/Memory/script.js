const object = {
  name: "ivan",
  lastName: "Jamandilovski",
  age: 33,
  favouriteSport: "football",
};
console.log(object + "Before local");
localStorage.setItem("primer", JSON.stringify(object));
console.log(object);
const dataFromLocalStorage = localStorage.getItem("primer");
console.log(dataFromLocalStorage);

const objectFromStorage = JSON.parse(dataFromLocalStorage);
console.log(objectFromStorage);

function setData(key,data) {
  localStorage.setItem(key, data);
}
function getData(key) {
  return localStorage.getItem(key);
}

const key = "broj";
setData(key, 1);
console.log(getData(key));
setData(key, 2);
console.log(getData(key));
