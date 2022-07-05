function setCitiesList (cities) {
    let select = document.getElementById("seleccionable");
    for (let i = 0; i < cities.length; i++) {
      let option = document.createElement("option");
      option.value = cities[i];
      option.text = cities[i];
      select.appendChild(option);
    }
  }
  
  (function(){
    let cities = getCitiesFromLocalStorage();
    console.log(cities);
    let warining = document.getElementById('add-cities');
    let card = document.getElementById('section-weather-result');
    if (cities.length === 0){
      warining.classList.add('display-block');
      warining.classList.remove('display-none');
      card.classList.add('display-none');
      card.classList.remove('display-block');
    } else {
      warining.classList.add('display-none');
      warining.classList.remove('display-block');
      card.classList.add('display-block');
      card.classList.remove('display-none');
      setCitiesList(cities);
    }
  }
  )();