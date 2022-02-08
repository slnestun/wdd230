//header date
const datefieldUK = document.querySelector(".date"); 

// derive the current date using a date object
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


//create an object to store last date data
let oLastModif = new Date(document.lastModified);
let currentYear = oLastModif.getFullYear();
document.querySelector('#year').innerText = currentYear;

let dateFormated = oLastModif.toLocaleString();
//console.log(dateFormated)

document.getElementById('currentDate').innerText = dateFormated;