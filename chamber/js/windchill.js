let t = 15;
let w = 10;

if (t <= 10 && w > 4.83) {
  const windchill =
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(w, 0.16) +
    0.3965 * t * Math.pow(w, 0.16);

  document.querySelector(".temperature").innerHTML = `${Math.round(
    windchill
  )}&#176;C`;
} else {
  document.querySelector(".windchill").innerHTML = "N/A";
}
