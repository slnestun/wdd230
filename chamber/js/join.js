let cuerrentDate = new Date();

// Set the value of the "date" field
document.getElementById("date").value = cuerrentDate.toDateString();

// Set the value of the "time" field
let hours = cuerrentDate.getHours();
let mins = cuerrentDate.getMinutes();
let seconds = cuerrentDate.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;

function handleSubmit() {
  const name = document.getElementById("name-form").value;
  const surname = document.getElementById("lastName-form").value;

  // to set into local storage
  /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */

  sessionStorage.setItem("NAME", name);
  sessionStorage.setItem("SURNAME", surname);

  return;
}
