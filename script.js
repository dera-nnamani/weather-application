const SEARCH_INPUT_FIELD = document.getElementById("search__input__field");
const SEARCH_BTN = document.getElementById("search__btn");
const WEATHER_INFO = document.getElementById("weather__info");
//steo one lets add an eventg listener to our btn
SEARCH_BTN.addEventListener("click", getWeatherInformation);
//create a function called getWeatherInformation
async function getWeatherInformation() {
  //get the location from te search input field
  const locationToFind = SEARCH_INPUT_FIELD.value;
  console.log(locationToFind);

  // create an http request to weather API
  try {
    //this is the weather api url
    const url = `https://open-weather13.p.rapidapi.com/city/${locationToFind}/EN`;
    const options = {
      method: "GET", //POST //PATCH //PUT //DELETE
      headers: {
        "X-RapidAPI-Key": "cb36ed403fmsh4787089f5dd2742p137327jsne3a4f60ce382",
        "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const displayWeatherInfo = `<section> <h3>${result.name}</h3>
        <p>time</p>
        <div>
          <img src="" alt="" />
          <h1>${result.main.temp}<h1>
          <p>partly sunny</p>
        </div>
        <div>
          <div>
            <p>Humidity</p>
            <p>${result.main.humidity}</p>
          </div>
          <div>
            <p>wind</p>
            <p>${result.wind.deg}</p>
          </div>
          <div>
            <p>visibility</p>
            <p>${result.visibility}</p>
          </div>
          <div>
            <p>Pressure</p>
            <p>${result.main.pressure}</p>
          </div>
         
        </div><section>`;
    WEATHER_INFO.innerHTML = displayWeatherInfo;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
