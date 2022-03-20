const requestURL = "https://slnestun.github.io/wdd230/chamber/data/data.json";
const spotlight_1 = document.querySelector(".spotlight-1");
const spotlight_2 = document.querySelector(".spotlight-2");
const spotlight_3 = document.querySelector(".spotlight-3");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const member = jsonObject["members"];
    //member.forEach(displayCards);
    console.log(member);
    let level = member.filter((lvl) => lvl.level === "Gold");
    console.log(level);
  });

function displayCards(member) {
  //Create elements to add info from json
  let h3 = document.createElement("h3");
  let div = document.createElement("div");
  let image = document.createElement("img");
  let hr = document.createElement("hr");
  let site = document.createElement("a");
  let phone = document.createElement("p");
  let address = document.createElement("a");

  h3.textContent = `${member.name}`;
  image.setAttribute("src", member.logo);
  image.setAttribute("alt", `${member.name} Logo`);
  image.setAttribute("height", `62`);
  image.setAttribute("width", `$62`);

  address.textContent = `${member.address}`;
  phone.textContent = `${member.phone}`;
  site.href = `${member.website}`;
  site.target = "_blank";
  site.textContent = `${member.name}`;

  spotlight_1.appendChild(h3);
  spotlight_1.appendChild(div);
  div.appendChild(image);
  spotlight_1.appendChild(address);
  spotlight_1.appendChild(hr);
  spotlight_1.appendChild(phone);
  spotlight_1.appendChild(site);
}
