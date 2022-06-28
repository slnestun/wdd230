const datefieldUK = document.querySelector(".date");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
let oLastModif = new Date(document.lastModified);
let currentYear = oLastModif.getFullYear();
document.querySelector("#year").innerText = currentYear;
let dateFormated = oLastModif.toLocaleString();
document.getElementById("currentDate").innerText = dateFormated;
