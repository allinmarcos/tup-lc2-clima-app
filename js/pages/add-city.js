
async function cityValidation(newCity) {
    let cities = getCitiesFromLocalStorage();
  
    if (cities.includes(newCity)) {
      return "warning";
    }
  
    if ((await consultAPI(newCity)) == "error") {
      return "error";
    } else {
      return "success";
    }
  }
  function setResultMessage(result){
    let message = document.getElementById("result-message");
    if (result == "success") {
      message.innerHTML = "Ciudad añadida";
      message.classList.add("success");
      message.classList.remove(["warning", "add-city-error"]);
    } else if (result == "warning") {
      message.innerHTML = "Ciudad ya existe en la lista";
      message.classList.add("warning");
      message.classList.remove(["success", "add-city-error"]);
    } else {
      message.innerHTML = "Ciudad no existe";
      message.classList.add("add-city-error");
      message.classList.remove(["success", "warning"]);
    }
  }
  
  async function setCityToLocalStorage() {
    const city = document.getElementById("add-city-place").value;
    const uppercaseCity = city.toUpperCase();
    const result = await cityValidation(uppercaseCity);
    if (result == "success") {
      let cities = getCitiesFromLocalStorage();
      cities.push(uppercaseCity);
      localStorage.setItem("CITIES", JSON.stringify(cities));
    }
    setResultMessage(result);
  }
  
  document.getElementById("boton-agregar").addEventListener("click", function(event){
    event.preventDefault()
    setCityToLocalStorage();
  });