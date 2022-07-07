function getCitiesFromLocalStorage() {
  let cities = localStorage.getItem("CITIES");

  if (cities) {
    cities = JSON.parse(cities);
  } else {
    cities = [];
  }
  return cities;
}

async function consultAPI(cityName) {
  let apiKey = "a94da602ea18424689a54463ed264644";
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`
  )
    .then((response) => {
      if (response.ok) {return response.json()}
      else { throw new Error("error");};
    })
    .catch(() => {
      return "error";
    });
}

function showLoader(){
  let loader = document.getElementById('loader');
  loader.classList.add('display-block');
  loader.classList.remove('display-none');
}

function hideLoader(){
  let loader = document.getElementById('loader');
  loader.classList.add('display-none');
  loader.classList.remove('display-block');
}
