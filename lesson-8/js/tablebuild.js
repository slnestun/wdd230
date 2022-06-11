//create an object to store last date data
let oLastModif = new Date(document.lastModified);
let currentYear = oLastModif.getFullYear();
document.querySelector('#year').innerText = currentYear;

let dateFormated = oLastModif.toLocaleString();
//console.log(dateFormated)
document.getElementById('currentDate').innerText = dateFormated;