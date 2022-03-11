window.addEventListener("load", () => {
  // Via Query parameters - GET
  const params = new URL(document.location).searchParams;
  const name = params.get("fname");
  const surname = params.get("lsurname");

  // Via local Storage
  /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */

  document.getElementById("name-form").innerHTML = name;
  document.getElementById("lastName-form").innerHTML = surname;
});
