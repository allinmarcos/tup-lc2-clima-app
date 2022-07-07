function setCitiesList (cities) {
  let select = document.getElementById("seleccionable");
  for (let i = 0; i < cities.length; i++) {
    let option = document.createElement("option");
    option.value = cities[i];
    option.text = cities[i];
    select.appendChild(option);
  }
}
async function showCityDetails () {
  showLoader();
  let cityName = document.getElementById('seleccionable').value;
  const res = await consultAPI(cityName);
  let city = document.getElementById('city-name');
  city.innerText = res.name;
  let icon = document.getElementById('weather-icon');
  icon.src = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
  icon.alt = res.weather[0].description;
  let temperature = document.getElementById('temperature');
  temperature.innerText = res.main.temp;
  let sensation = document.getElementById('sensation');
  sensation.innerText = res.main.feels_like;
  let humidity = document.getElementById('humidity');
  humidity.innerText = res.main.humidity;
  let wind = document.getElementById('wind');
  wind.innerText = res.wind.speed;
  let pressure = document.getElementById('pressure');
  pressure.innerText = res.main.pressure;
  let card = document.getElementById('section-weather-result');
  card.classList.add('display-block');
  card.classList.remove('display-none');
  console.log(res);
  hideLoader();
}

//IIFE Inmediatly Invoked Function Expresion //Como las funciones Lamda
(function(){
  let cities = getCitiesFromLocalStorage();
  console.log(cities);
  let warning = document.getElementById('add-cities');
  let card = document.getElementById('section-weather-result');
  if (cities.length === 0){
    warning.classList.add('display-block');
    warning.classList.remove('display-none');
    card.classList.add('display-none');
    card.classList.remove('display-block');
    let button = document.getElementById('boton-consultar');
    button.disabled = true;

  } else {
    warning.classList.add('display-none');
    warning.classList.remove('display-block');
    card.classList.add('display-none'); //por las dudas
    setCitiesList(cities);
  }
}
)();

document.getElementById("boton-consultar").addEventListener("click", function(event){
  event.preventDefault()
  showCityDetails();
});