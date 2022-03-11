let cuerrentDate = new Date();

// Set the value of the "date" field
document.getElementById("date").value = cuerrentDate.toDateString();

// Set the value of the "time" field
let hours = cuerrentDate.getHours();
let mins = cuerrentDate.getMinutes();
let seconds = cuerrentDate.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;
