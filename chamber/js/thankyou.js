window.addEventListener("load", () => {
  // Via Query parameters - GET
  /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

  // Via local Storage
  /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */

  const name = sessionStorage.getItem("NAME");
  const surname = sessionStorage.getItem("SURNAME");

  document.getElementById("name-form").innerHTML = name;
  document.getElementById("lastName-form").innerHTML = surname;
});
