const requestURL = "https://slnestun.github.io/wdd230/chamber/data/data.json";
const spotlight_1 = document.querySelector(".spotlight-1");
const spotlight_2 = document.querySelector(".spotlight-2");
const spotlight_3 = document.querySelector(".spotlight-3");
const membership = ["Bronze", "Non-profit"];
let silverLevel = "Silver";
let godLelvel = "Gold";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const member = jsonObject["members"];
    const randomSilver = selectLevel(member);
    const randomGold = selectLevel1(member);
    const randomBonze = selectLevel2(member);
    //const spot = selectSpotlight(randomlevel);
    //console.log(randomSilver);
    //console.log(randomGold);
    //console.log(spot);
    displayCards(randomGold, spotlight_1);
    displayCards(randomSilver, spotlight_2);
    displayCards(randomBonze, spotlight_3);
  });

function ramdomLevel(membership) {
  return membership[Math.floor(Math.random() * membership.length)];
}

let randomlevel = ramdomLevel(membership);
//console.log(ramdomLevel(membership));

function selectLevel(member) {
  let level = member.filter((lvl) => lvl.level === silverLevel);
  //console.log(level);

  const keys = Object.keys(level);
  //console.log(keys);
  const randIndex = Math.floor(Math.random() * keys.length);
  //console.log(randIndex);
  const randKey = keys[randIndex];
  const levels = level[randKey];
  //console.log(levels);
  return levels;
}

function selectLevel1(member) {
  let level = member.filter((lvl) => lvl.level === godLelvel);
  //console.log(level);

  const keys = Object.keys(level);
  //console.log(keys);
  const randIndex = Math.floor(Math.random() * keys.length);
  //console.log(randIndex);
  const randKey = keys[randIndex];
  const levels1 = level[randKey];
  //console.log(levels);
  return levels1;
}

function selectLevel2(member) {
  let level = member.filter((lvl) => lvl.level === randomlevel);
  //console.log(level);

  const keys = Object.keys(level);
  //console.log(keys);
  const randIndex = Math.floor(Math.random() * keys.length);
  //console.log(randIndex);
  const randKey = keys[randIndex];
  const levels2 = level[randKey];
  //console.log(levels);
  return levels2;
}

function selectSpotlight(randomlevel) {
  if (randomlevel === "Bronze") {
    return spotlight_1;
  } else if (randomlevel == "Non-profit") {
    return spotlight_2;
  }
}

function displayCards(randomMembership, spot) {
  //Create elements to add info from json
  let h3 = document.createElement("h3");
  let div = document.createElement("div");
  let image = document.createElement("img");
  let hr = document.createElement("hr");
  let site = document.createElement("a");
  let phone = document.createElement("p");
  let div1 = document.createElement("div");
  let address = document.createElement("a");

  h3.textContent = `${randomMembership.name}`;
  image.setAttribute("src", randomMembership.logo);
  image.setAttribute("alt", `${randomMembership.name} Logo`);
  image.setAttribute("height", `62`);
  image.setAttribute("width", `$62`);
  div1.setAttribute("class", "urlLink");

  address.textContent = `${randomMembership.address}`;
  phone.textContent = `${randomMembership.phone}`;
  site.href = `${randomMembership.website}`;
  site.target = "_blank";
  site.textContent = `${randomMembership.name}`;

  spot.appendChild(h3);
  spot.appendChild(div);
  div.appendChild(image);
  spot.appendChild(address);
  spot.appendChild(hr);
  spot.appendChild(phone);
  div1.appendChild(site);
  spot.appendChild(div1);
}
