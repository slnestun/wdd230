const requestURL = "https://slnestun.github.io/wdd230/chamber/data/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //loop integraded in the promise
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const members = jsonObject["members"];
    members.forEach(displayBusiness);
  });

function displayBusiness(member) {
  //Create elements to add info from json
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let image = document.createElement("img");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let site = document.createElement("p");

  card.setAttribute("class", "images");
  h2.textContent = `${member.name}`;
  image.setAttribute("src", member.logo);
  image.setAttribute("alt", `${member.name} Logo`);

  address.textContent = `${member.address}`;
  phone.textContent = `${member.phone}`;
  site.textContent = `${member.website}`;

  card.appendChild(image);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(site);
  cards.appendChild(card);
}
