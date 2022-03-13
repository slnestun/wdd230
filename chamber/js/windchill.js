const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=3433955&units=Metric&appid=62b017d0bc368f491774a1b152049f7f";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector(".temperature").textContent = Math.round(
      jsObject.main.temp
    );
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("figcaption").textContent = desc;
    document.querySelector(".windspeed").textContent =
      jsObject.wind.speed.toFixed(1);

    let t = jsObject.main.temp;
    let w = jsObject.wind.speed;
    if (t <= 10 && w > 4.83) {
      const windchill =
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(w, 0.16) +
        0.3965 * t * Math.pow(w, 0.16);
      document.querySelector(".windchill").innerHTML = `${Math.round(
        windchill
      )}&#176;C`;
    } else {
      document.querySelector(".windchill").innerHTML = "N/A";
    }
  });
