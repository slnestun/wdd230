//create a veriable to store lessons names and links
let myLessons = {};

myLessons = {
  weekLessons: [
    {
      lessons: "Lesson 02: ",
      linkName: "Design Principles Document",
      link: "./lesson2/index.html",
    },
    {
      lessons: "Lesson 03: ",
      linkName: "Website Planning Document",
      link: "./lesson3/index.html",
    },
    {
      lessons: "Lesson 04: ",
      linkName: "Chamber Of Comerce",
      link: "./chamber/index.html",
    },
    {
      lessons: "Lesson 05: ",
      linkName: "BOM",
      link: "./bom/index.html",
    },
    {
      lessons: "Lesson 06: ",
      linkName: "Camber of comerce Home",
      link: "./chamber/index.html",
    },
    {
      lessons: "Lesson 07: ",
      linkName: "Lazy Loading",
      link: "./lesson-7/lazyload.html",
    },
    {
      lessons: "Lesson 07: ",
      linkName: "Discover Page",
      link: "./chamber/discover.html",
    },
    {
      lessons: "Lesson 08: ",
      linkName: "Table Build",
      link: "./lesson-8/tablebuild.html",
    },
    {
      lessons: "Lesson 08: ",
      linkName: "Join Chamber",
      link: "./chamber/join.html",
    },
    {
      lessons: "Lesson 09: ",
      linkName: "Working with JSON data and the Fetch API",
      link: "./lesson-9/prophets.html",
    },
    {
      lessons: "Lesson 09: ",
      linkName: "The Business Directory Page",
      link: "./chamber/directory.html",
    },
    {lessons: "Lesson 09: ",
      linkName: "WireFrame Mobile for Directory page",
      link: "https://wireframe.cc/RVQ6tF",
    },
    {lessons: "Lesson 09: ",
      linkName: "WireFrame Tablet for Directory page",
      link: "https://wireframe.cc/EvwpJD",
    },
    {lessons: "Lesson 09: ",
      linkName: "WireFrame Desktop for Directory page",
      link: "https://wireframe.cc/7uVhyB",
    },
    {
      lessons: "Lesson 10: ",
      linkName: "The Weather API",
      link: "./lesson-10/weather-api.html",
    },
    {
      lessons: "Lesson 10: ",
      linkName: "Using the weather API",
      link: "./chamber/index.html",
    },
      {
      lessons: "Lesson 11: ",
      linkName: "",
      link: "",
    },
  ],
};

//foreach to create li and a ahref elements
let weeklyLessons = document.getElementById("lessons");
myLessons.weekLessons.forEach((weekLessons) => {
  let listLesson = document.createElement("li");
  listLesson.textContent = weekLessons.lessons;
  weeklyLessons.appendChild(listLesson);

  let listLinks = document.createElement("a");
  listLinks.innerText = weekLessons.linkName;
  listLinks.href = weekLessons.link;
  listLinks.target = "_blank";
  listLesson.appendChild(listLinks);
});
//console.log(weeklyLessons)

//create an object to store last date data
let oLastModif = new Date(document.lastModified);
let currentYear = oLastModif.getFullYear();
document.querySelector("#year").innerText = currentYear;

let dateFormated = oLastModif.toLocaleString();
//console.log(dateFormated)

document.getElementById("currentDate").innerText = dateFormated;
